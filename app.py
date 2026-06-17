"""
汉字乐园 — 儿童汉字拼音学习软件（Streamlit）
优化：图片使用本地生成 + 按需 AI 生成 + 本地缓存，避免网络阻塞
"""

import streamlit as st
import random
import json
import os
from data.characters import CHARACTERS, STORIES, LEVELS
from utils.audio import get_pronunciation_html, text_to_speech_base64
from utils.image_utils import make_placeholder_image, get_image_from_api, CACHE_DIR

st.set_page_config(
    page_title="汉字乐园 | Chinese Character Wonderland",
    page_icon="🀄",
    layout="wide",
)

st.markdown("""
<style>
    * { font-family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif; }

    .main-title {
        text-align: center; font-size: 2.8rem; font-weight: 900;
        background: linear-gradient(135deg, #FF6B6B, #FFE66D, #4ECDC4, #FF6B6B);
        background-size: 300% 300%;
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        animation: gradient 3s ease infinite; margin-bottom: .3rem;
    }
    @keyframes gradient { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }

    .char-display { font-size: 7rem; font-weight: 900; text-align: center; color: #2C3E50; }
    .pinyin-display { font-size: 2.2rem; text-align: center; color: #E74C3C; font-weight: 700; }
    .english-display { font-size: 1.3rem; text-align: center; color: #7F8C8D; }

    .char-card {
        background: white; border-radius: 18px; padding: 18px; text-align: center;
        box-shadow: 0 4px 16px rgba(0,0,0,.08); transition: transform .2s, box-shadow .2s;
        cursor: pointer;
    }
    .char-card:hover { transform: translateY(-4px); box-shadow: 0 10px 28px rgba(0,0,0,.14); }
    .char-card .ch { font-size: 3.8rem; font-weight: 900; line-height: 1; color: #2C3E50; }
    .char-card .py { color: #E74C3C; font-weight: 600; margin-top: 6px; }
    .char-card .en { color: #7F8C8D; font-size: .85rem; margin-top: 2px; }

    .story-card {
        background: linear-gradient(135deg, #FFF9E6, #FFF0F5);
        border-radius: 16px; padding: 22px; border-left: 5px solid #FF6B6B;
    }

    .emoji-badge {
        display: inline-block; padding: 4px 14px; border-radius: 999px;
        font-size: .9rem; font-weight: 700; margin: 3px;
    }

    .footer { text-align: center; padding: 24px; color: #BDC3C7; font-size: .85rem; }

    .divider-fancy {
        height: 3px; background: linear-gradient(90deg, #FF6B6B, #FFE66D, #4ECDC4);
        border-radius: 2px; border: none; margin: 18px 0;
    }
</style>
""", unsafe_allow_html=True)

# ── 侧边栏 ─────────────────────────────────────────────
with st.sidebar:
    st.markdown("## 🀄 汉字乐园")
    st.markdown("*Chinese Character Wonderland*")
    st.caption("v2.0 · 秒开无等待")
    lang = st.radio("语言 / Language", ["中文", "English"], horizontal=True, index=0, key="sidebar_lang")
    is_cn = lang == "中文"

    st.markdown("---")
    page = st.radio(
        "选择页面" if is_cn else "Select Page",
        [
            "🏠 " + ("首页" if is_cn else "Home"),
            "📖 " + ("学习汉字" if is_cn else "Learn"),
            "📚 " + ("故事时间" if is_cn else "Stories"),
            "🎮 " + ("趣味测验" if is_cn else "Quiz"),
            "⭐ " + ("学习进度" if is_cn else "Progress"),
        ],
        key="nav_radio",
    )
    st.markdown("---")
    st.caption("💡 提示：点击汉字卡片可以查看详情")


PROGRESS_FILE = os.path.join(os.path.dirname(__file__), ".progress.json")


def load_progress():
    if os.path.exists(PROGRESS_FILE):
        try:
            with open(PROGRESS_FILE, "r") as f:
                return json.load(f)
        except Exception:
            pass
    return {"learned": [], "quiz_scores": [], "stars": 0}


def save_progress(p):
    with open(PROGRESS_FILE, "w") as f:
        json.dump(p, f)


progress = load_progress()


# ── 主标题 ─────────────────────────────────────────────
st.markdown('<div class="main-title">🀄 汉字乐园</div>', unsafe_allow_html=True)
st.markdown(f"<p style='text-align:center;color:#7F8C8D;'>"
            f"{'儿童汉字 · 拼音 · 故事 · 测验' if is_cn else 'Chinese Characters · Pinyin · Stories · Quiz'}"
            f"</p>", unsafe_allow_html=True)
st.markdown('<hr class="divider-fancy">', unsafe_allow_html=True)


# ═══════════════════════════════════════════════════════
# 辅助：显示大图
# ═══════════════════════════════════════════════════════
def show_big_image(char_data):
    """先展示本地占位图（0延迟），再给个按钮按需生成 AI 图"""
    placeholder = make_placeholder_image(char_data["char"], char_data["category"])
    col1, col2 = st.columns([3, 1])
    with col1:
        st.image(placeholder, use_container_width=True, clamp=True)
    with col2:
        st.markdown(f"**{'当前为速览图' if is_cn else 'Quick view image'}**")
        st.caption("本地生成，无网络延迟")
        if st.button("🎨 " + ("生成 AI 插图" if is_cn else "Generate AI image"),
                     key=f"gen_img_{char_data['char']}", use_container_width=True):
            with st.spinner("🎨 " + ("生成中，稍等片刻..." if is_cn else "Generating...")):
                ai_img = get_image_from_api(char_data["image_prompt"], cache_key=char_data["char"])
            if ai_img:
                st.success("✅ " + ("已生成" if is_cn else "Generated"))
                st.rerun()
            else:
                st.error("❌ " + ("生成失败，请稍后重试" if is_cn else "Failed, try later"))

    # 如果已经缓存过 AI 图，额外展示
    cache_key = char_data["char"].encode().hex() if False else None


# ═══════════════════════════════════════════════════════
# 辅助：汉字详情页
# ═══════════════════════════════════════════════════════
def display_character_detail(char_data):
    col1, col2 = st.columns([5, 7])
    with col1:
        # 大图（占位或缓存的 AI 图）
        ai_cache_path = os.path.join(CACHE_DIR,
                                     __import__("hashlib").md5(char_data["char"].encode()).hexdigest() + ".png")
        if os.path.exists(ai_cache_path):
            try:
                st.image(ai_cache_path, use_container_width=True, clamp=True,
                         caption="🤖 " + ("AI 生成图" if is_cn else "AI generated"))
            except Exception:
                st.image(make_placeholder_image(char_data["char"], char_data["category"]),
                         use_container_width=True, clamp=True)
        else:
            st.image(make_placeholder_image(char_data["char"], char_data["category"]),
                     use_container_width=True, clamp=True)
            if st.button("🎨 " + ("生成 AI 插图" if is_cn else "Generate AI image"),
                         key=f"ai_btn_{char_data['char']}", use_container_width=True):
                with st.spinner("🎨 " + ("AI 正在画图..." if is_cn else "AI drawing...")):
                    img = get_image_from_api(char_data["image_prompt"], cache_key=char_data["char"])
                if img:
                    st.success("✅ " + ("已生成，刷新查看" if is_cn else "Generated"))
                    st.rerun()
                else:
                    st.error("❌ " + ("网络可能不稳定，请稍后再试" if is_cn else "Network issue"))

    with col2:
        st.markdown(f'<div class="char-display">{char_data["char"]}</div>', unsafe_allow_html=True)
        st.markdown(f'<div class="pinyin-display">{char_data["pinyin"]}</div>', unsafe_allow_html=True)
        st.markdown(f'<div class="english-display">{char_data["english"]}</div>', unsafe_allow_html=True)

        audio_html = get_pronunciation_html(char_data["char"], "zh-CN")
        if audio_html:
            st.markdown(audio_html, unsafe_allow_html=True)

        st.markdown(f"✏️ **{'笔顺' if is_cn else 'Strokes'}**：{char_data['stroke_hint']}")
        st.markdown(f"📂 **{'分类' if is_cn else 'Category'}**：{char_data['category']}")

        is_learned = char_data["char"] in progress["learned"]
        col_btn1, col_btn2 = st.columns(2)
        with col_btn1:
            if st.button(
                ("✅ 已学过" if is_learned else "📘 标记为已学") if is_cn
                else ("✅ Learned" if is_learned else "📘 Mark Learned"),
                use_container_width=True,
                disabled=is_learned,
                key=f"learn_btn_{char_data['char']}",
            ):
                progress.setdefault("learned", []).append(char_data["char"])
                progress["stars"] = progress.get("stars", 0) + 1
                save_progress(progress)
                st.rerun()
        with col_btn2:
            st.metric("⭐", progress.get("stars", 0))

    # 词组
    st.markdown("---")
    st.markdown("### 📝 " + ("相关词组" if is_cn else "Related Words"))
    cols = st.columns(len(char_data["words"]))
    for i, w in enumerate(char_data["words"]):
        with cols[i]:
            st.markdown(
                f'<div class="char-card">'
                f'<div class="ch" style="font-size:2.2rem">{w["word"]}</div>'
                f'<div class="py">{w["pinyin"]}</div>'
                f'<div class="en">{w["english"]}</div>'
                f'</div>', unsafe_allow_html=True,
            )
            word_audio = get_pronunciation_html(w["word"], "zh-CN")
            if word_audio:
                st.markdown(word_audio, unsafe_allow_html=True)

    # 故事
    st.markdown("---")
    st.markdown("### 📖 " + ("汉字故事" if is_cn else "Story"))
    story_text = char_data["story_cn"] if is_cn else char_data["story_en"]
    st.markdown(f'<div class="story-card">{story_text}</div>', unsafe_allow_html=True)


# ═══════════════════════════════════════════════════════
# 首页
# ═══════════════════════════════════════════════════════
if "🏠" in page:
    st.markdown(f"## 🎉 {'欢迎来到汉字乐园！' if is_cn else 'Welcome to Chinese Character Wonderland!'}")
    st.markdown(
        ("这里有汉字、拼音、故事和测验，让学习变成游戏！" if is_cn
         else "Learn Chinese characters with pinyin, stories and quizzes — make learning fun!")
    )

    # 统计卡片
    c1, c2, c3, c4 = st.columns(4)
    with c1:
        st.metric("📚 " + ("已学汉字" if is_cn else "Learned"),
                  f"{len(progress.get('learned', []))}/{len(CHARACTERS)}")
    with c2:
        st.metric("⭐ " + ("星星" if is_cn else "Stars"), progress.get("stars", 0))
    with c3:
        st.metric("🎮 " + ("测验次数" if is_cn else "Quizzes"), len(progress.get("quiz_scores", [])))
    with c4:
        avg = 0
        if progress["quiz_scores"]:
            avg = round(sum(s["score"] / s["total"] for s in progress["quiz_scores"]) / len(progress["quiz_scores"]) * 100)
        st.metric("🎯 " + ("平均分" if is_cn else "Avg Score"), f"{avg}%")

    st.markdown('<hr class="divider-fancy">', unsafe_allow_html=True)

    # 今日推荐（网格卡片，纯本地，0延迟）
    st.markdown("### 🌟 " + ("今日推荐" if is_cn else "Today's Picks"))
    picks = random.sample(CHARACTERS, 6)
    cols = st.columns(3)
    for i, c in enumerate(picks):
        with cols[i % 3]:
            st.markdown(
                f'<div class="char-card">'
                f'<div class="ch">{c["char"]}</div>'
                f'<div class="py">{c["pinyin"]}</div>'
                f'<div class="en">{c["english"]}</div>'
                f'</div>',
                unsafe_allow_html=True,
            )
            # 点击入口
            if st.button("📖 " + ("学这个字" if is_cn else "Learn this"),
                         key=f"home_learn_{c['char']}_{i}", use_container_width=True):
                st.session_state["selected_char"] = c["char"]
                st.session_state["force_page"] = "📖 学习汉字" if is_cn else "📖 Learn"
                st.rerun()


# ═══════════════════════════════════════════════════════
# 学习汉字
# ═══════════════════════════════════════════════════════
elif "📖" in page:
    st.markdown("## 📖 " + ("学习汉字" if is_cn else "Learn Characters"))

    level_names = [f"{l['name']} / {l['name_en']}" for l in LEVELS]
    # 记住选中字符后，自动停留在中级（含所有字）
    selected_level = st.selectbox(
        ("选择等级" if is_cn else "Select Level"),
        level_names,
        key="level_select",
    )
    level_idx = level_names.index(selected_level)
    level_chars = [CHARACTERS[i] for i in LEVELS[level_idx]["char_indices"]]

    # 如果有选中的汉字 → 显示详情
    if st.session_state.get("selected_char"):
        selected = next((c for c in CHARACTERS if c["char"] == st.session_state["selected_char"]), None)
        if selected:
            if st.button("🔙 " + ("返回列表" if is_cn else "Back")):
                del st.session_state["selected_char"]
                st.rerun()
            display_character_detail(selected)
        else:
            del st.session_state["selected_char"]

    # 默认展示卡片网格
    if "selected_char" not in st.session_state:
        st.markdown(
            f"#### {'点击卡片开始学习' if is_cn else 'Tap a card to start learning'}"
        )
        cols = st.columns(3)
        for i, c in enumerate(level_chars):
            with cols[i % 3]:
                st.markdown(
                    f'<div class="char-card">'
                    f'<div class="ch">{c["char"]}</div>'
                    f'<div class="py">{c["pinyin"]}</div>'
                    f'<div class="en">{c["english"]}</div>'
                    f'</div>', unsafe_allow_html=True,
                )
                is_learned = c["char"] in progress["learned"]
                if st.button(
                    ("✅ 已学" if is_learned else "📖 学习") if is_cn
                    else ("✅ Learned" if is_learned else "📖 Learn"),
                    key=f"lvl_{level_idx}_char_{c['char']}",
                    use_container_width=True,
                ):
                    st.session_state["selected_char"] = c["char"]
                    if not is_learned:
                        progress.setdefault("learned", []).append(c["char"])
                        progress["stars"] = progress.get("stars", 0) + 1
                        save_progress(progress)
                    st.rerun()

    # 全部分类浏览
    st.markdown("---")
    with st.expander("🗂️ " + ("按分类查看全部汉字" if is_cn else "Browse by category")):
        from collections import defaultdict
        groups = defaultdict(list)
        for c in CHARACTERS:
            groups[c["category"]].append(c)
        for cat, chars in groups.items():
            st.markdown(f"**{cat}**")
            st.markdown(" · ".join(
                f"`{c['char']}` {c['pinyin']} ({c['english']})" for c in chars
            ))


# ═══════════════════════════════════════════════════════
# 故事时间
# ═══════════════════════════════════════════════════════
elif "📚" in page:
    st.markdown("## 📚 " + ("故事时间" if is_cn else "Story Time"))

    for idx, story in enumerate(STORIES):
        with st.container():
            st.markdown(f"### {story['title']} / *{story['title_en']}*")

            # 图片：先展示本地速览图，再给生成按钮
            col_img, col_txt = st.columns([3, 5])
            with col_img:
                placeholder = make_placeholder_image(
                    story["characters"][0], "故事"
                )
                st.image(placeholder, use_container_width=True, clamp=True)
                if st.button("🎨 " + ("生成插图" if is_cn else "Generate image"),
                             key=f"story_img_{idx}", use_container_width=True):
                    with st.spinner("🎨 ..."):
                        img = get_image_from_api(story["image_prompt"], cache_key="story_" + story["title"])
                    if img:
                        st.success("✅")
                        st.rerun()
            with col_txt:
                text = story["content_cn"] if is_cn else story["content_en"]
                st.markdown(f'<div class="story-card">{text}</div>', unsafe_allow_html=True)
                # 朗读
                col_a, col_b = st.columns(2)
                with col_a:
                    cn_audio = get_pronunciation_html(story["title"] + "。" + story["content_cn"][:30], "zh-CN")
                    if cn_audio:
                        st.caption("🔊 " + ("中文朗读" if is_cn else "Chinese audio"))
                        st.markdown(cn_audio, unsafe_allow_html=True)
                with col_b:
                    en_audio = get_pronunciation_html(story["title_en"] + ". " + story["content_en"][:30], "en")
                    if en_audio:
                        st.caption("🔊 " + ("英文朗读" if is_cn else "English audio"))
                        st.markdown(en_audio, unsafe_allow_html=True)

            # 故事中的汉字
            st.markdown("#### " + ("故事里的汉字" if is_cn else "Characters in this story"))
            cols = st.columns(len(story["characters"]))
            for i, ch in enumerate(story["characters"]):
                c = next((x for x in CHARACTERS if x["char"] == ch), None)
                if c is None:
                    continue
                with cols[i]:
                    st.markdown(
                        f'<div class="char-card">'
                        f'<div class="ch" style="font-size:2.5rem">{c["char"]}</div>'
                        f'<div class="py">{c["pinyin"]}</div>'
                        f'<div class="en">{c["english"]}</div>'
                        f'</div>', unsafe_allow_html=True,
                    )
                    if st.button("📖", key=f"story_go_{ch}_{idx}", use_container_width=True):
                        st.session_state["selected_char"] = ch
                        st.session_state["force_page"] = "📖 学习汉字" if is_cn else "📖 Learn"
                        st.rerun()

            st.markdown('<hr class="divider-fancy">', unsafe_allow_html=True)


# ═══════════════════════════════════════════════════════
# 趣味测验
# ═══════════════════════════════════════════════════════
elif "🎮" in page:
    st.markdown("## 🎮 " + ("趣味测验" if is_cn else "Fun Quiz"))

    quiz_type_label = st.radio(
        ("类型" if is_cn else "Type"),
        [
            "📖 " + ("看字选拼音" if is_cn else "Character → Pinyin"),
            "🔤 " + ("看拼音选字" if is_cn else "Pinyin → Character"),
            "🔊 " + ("听音选字" if is_cn else "Audio → Character"),
        ],
        horizontal=True,
        key="quiz_type",
    )
    quiz_type = 0 if "看字选拼音" in quiz_type_label or "Character" in quiz_type_label else (
        1 if "看拼音" in quiz_type_label or "Pinyin →" in quiz_type_label else 2
    )

    if "quiz_state" not in st.session_state:
        st.session_state.quiz_state = {"started": False, "idx": 0, "questions": [], "score": 0}
    qs = st.session_state.quiz_state

    if not qs["started"]:
        num = st.slider("题目数量 / Questions", 3, 10, 5, key="quiz_num")
        if st.button("🚀 " + ("开始测验" if is_cn else "Start Quiz"), use_container_width=True):
            qs["questions"] = random.sample(CHARACTERS, num)
            qs["idx"] = 0
            qs["score"] = 0
            qs["started"] = True
            st.rerun()
    else:
        if qs["idx"] < len(qs["questions"]):
            current = qs["questions"][qs["idx"]]
            total = len(qs["questions"])

            st.progress((qs["idx"]) / total)
            st.markdown(f"**{'第' if is_cn else 'Q'} {qs['idx']+1} / {total}**")
            st.markdown(f"🏆 {'当前得分' if is_cn else 'Score'}：{qs['score']}")

            # 构造选项
            distractors = [c for c in CHARACTERS if c["char"] != current["char"]]
            options = [current] + random.sample(distractors, 3)
            random.shuffle(options)
            correct_key = f"q{qs['idx']}_ans"

            # 题目展示
            st.markdown("---")
            if quiz_type == 0:  # 看字选拼音
                st.markdown(f'<div class="char-display" style="font-size:6rem">{current["char"]}</div>',
                            unsafe_allow_html=True)
                st.markdown("### " + ("选出正确拼音" if is_cn else "Pick the right pinyin"))
                labels = [o["pinyin"] for o in options]
            elif quiz_type == 1:  # 看拼音选字
                st.markdown(f'<div class="pinyin-display" style="font-size:3rem">{current["pinyin"]}</div>',
                            unsafe_allow_html=True)
                st.markdown("### " + ("选出正确汉字" if is_cn else "Pick the right character"))
                labels = [o["char"] for o in options]
            else:  # 听音选字
                st.markdown("### 🔊 " + ("点击播放，选出正确汉字" if is_cn else "Listen and pick the character"))
                audio_html = get_pronunciation_html(current["char"], "zh-CN")
                if audio_html:
                    st.markdown(audio_html, unsafe_allow_html=True)
                st.markdown(" ")
                labels = [o["char"] for o in options]

            # 选项
            cols = st.columns(4)
            answered = correct_key in st.session_state
            for i, (opt, label) in enumerate(zip(options, labels)):
                with cols[i]:
                    disabled = answered
                    style = ""
                    if answered:
                        if opt["char"] == current["char"]:
                            style = "background: #D4EDDA; border-color: #28A745; color: #155724;"
                        else:
                            style = "opacity: .5;"
                    st.markdown(
                        f'<div class="char-card" style="{style}">'
                        f'<div class="ch" style="font-size:2.4rem">{label}</div>'
                        f'</div>', unsafe_allow_html=True,
                    )
                    if st.button(
                        chr(65 + i),  # A/B/C/D
                        key=f"q{qs['idx']}_{i}",
                        disabled=disabled,
                        use_container_width=True,
                    ):
                        st.session_state[correct_key] = i
                        if opt["char"] == current["char"]:
                            qs["score"] += 1
                        st.rerun()

            # 答题反馈
            if answered:
                chosen_idx = st.session_state[correct_key]
                chosen = options[chosen_idx]
                ok = chosen["char"] == current["char"]
                if ok:
                    st.success("🎉 " + ("太棒了，答对了！" if is_cn else "Correct! Great job!"))
                else:
                    st.error(f"❌ " + (f"正确答案是 **{current['char']} {current['pinyin']}**" if is_cn
                                       else f"Correct answer is **{current['char']} {current['pinyin']}**"))
                st.markdown(
                    f"**{current['char']}** — {current['pinyin']} — {current['english']}"
                )
                if st.button("➡️ " + ("下一题" if is_cn else "Next"), use_container_width=True):
                    qs["idx"] += 1
                    st.rerun()
        else:
            # 完成
            score = qs["score"]
            total = len(qs["questions"])
            pct = int(score / total * 100)
            st.balloons()
            st.markdown(f"## 🏆 {'测验完成！' if is_cn else 'Finished!'}")
            st.markdown(f"### {score} / {total}")
            st.markdown(
                f'<div style="text-align:center;padding:22px;border-radius:16px;'
                f'background:linear-gradient(135deg,#4ECDC4,#44B09E);color:white;font-size:2rem;font-weight:900;">'
                f'{pct}%</div>', unsafe_allow_html=True,
            )
            if pct == 100:
                st.markdown("🌟🌟🌟 " + ("满分！太厉害了！" if is_cn else "Perfect score!"))
            elif pct >= 80:
                st.markdown("👍 " + ("很棒！" if is_cn else "Great job!"))
            else:
                st.markdown("💪 " + ("再练习一次吧！" if is_cn else "Keep practicing!"))

            # 记录成绩
            scores = progress.setdefault("quiz_scores", [])
            scores.append({"score": score, "total": total})
            if pct == 100:
                progress["stars"] = progress.get("stars", 0) + 3
            save_progress(progress)

            if st.button("🔁 " + ("再来一次" if is_cn else "Try again"), use_container_width=True):
                st.session_state.quiz_state = {"started": False, "idx": 0, "questions": [], "score": 0}
                st.rerun()


# ═══════════════════════════════════════════════════════
# 学习进度
# ═══════════════════════════════════════════════════════
elif "⭐" in page:
    st.markdown("## ⭐ " + ("学习进度" if is_cn else "My Progress"))
    c1, c2, c3 = st.columns(3)
    with c1: st.metric("📚 " + ("已学汉字" if is_cn else "Learned"),
                       f"{len(progress.get('learned', []))}/{len(CHARACTERS)}")
    with c2: st.metric("⭐ " + ("星星" if is_cn else "Stars"), progress.get("stars", 0))
    with c3: st.metric("🎮 " + ("测验" if is_cn else "Quizzes"), len(progress.get("quiz_scores", [])))

    # 进度条
    total = len(CHARACTERS)
    learned = len(progress.get("learned", []))
    pct = int(learned / total * 100) if total else 0
    st.progress(pct / 100)
    st.caption(f"{pct}% {'已完成' if is_cn else 'Complete'}")

    st.markdown("---")

    # 已学汉字
    st.markdown("### 📚 " + ("已学汉字" if is_cn else "Learned Characters"))
    learned_chars = [c for c in CHARACTERS if c["char"] in progress.get("learned", [])]
    if learned_chars:
        cols = st.columns(min(len(learned_chars), 6))
        for i, c in enumerate(learned_chars):
            with cols[i % len(cols)]:
                st.markdown(
                    f'<div class="char-card">'
                    f'<div class="ch">{c["char"]}</div>'
                    f'<div class="py">{c["pinyin"]}</div>'
                    f'<div class="en">{c["english"]}</div>'
                    f'</div>', unsafe_allow_html=True,
                )
                if st.button("📖", key=f"review_{c['char']}", use_container_width=True):
                    st.session_state["selected_char"] = c["char"]
                    st.session_state["force_page"] = "📖 学习汉字" if is_cn else "📖 Learn"
                    st.rerun()
    else:
        st.info("还没有学过任何汉字，快去【学习汉字】页面吧！" if is_cn
                else "No characters learned yet — go to Learn!")

    # 未学汉字
    not_yet = [c for c in CHARACTERS if c["char"] not in progress.get("learned", [])]
    if not_yet:
        st.markdown("---")
        st.markdown("### 📝 " + ("待学汉字" if is_cn else "Characters to learn"))
        st.markdown(" · ".join(f"`{c['char']}`" for c in not_yet))

    # 历史
    if progress.get("quiz_scores"):
        st.markdown("---")
        st.markdown("### 📊 " + ("最近测验" if is_cn else "Recent quizzes"))
        for i, s in enumerate(progress["quiz_scores"][-8:]):
            pct = int(s["score"] / s["total"] * 100)
            icon = "🌟" if pct == 100 else "✅" if pct >= 80 else "📝"
            st.markdown(f"{icon} {'第' if is_cn else '#'}{i+1}: {s['score']}/{s['total']} ({pct}%)")

    st.markdown("---")
    if st.button("🗑️ " + ("重置进度" if is_cn else "Reset progress")):
        if os.path.exists(PROGRESS_FILE):
            os.remove(PROGRESS_FILE)
        st.rerun()


st.markdown("---")
st.markdown(
    '<div class="footer">'
    + ("🀄 汉字乐园 · Made with ❤️ using Streamlit" if is_cn
       else "🀄 Chinese Character Wonderland · Made with ❤️ using Streamlit")
    + '</div>',
    unsafe_allow_html=True,
)

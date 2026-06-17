"""
儿童汉字拼音学习软件 - Streamlit 版本
功能：汉字学习、故事阅读、趣味测验、学习进度
支持中英文双语、图片、发音
"""

import streamlit as st
import random
import json
import os
import requests
from PIL import Image
from io import BytesIO
from data.characters import CHARACTERS, STORIES, LEVELS
from utils.audio import text_to_speech_base64, get_pronunciation_html

# ─── 页面配置 ───────────────────────────────────────────
st.set_page_config(
    page_title="汉字乐园 - Chinese Character Wonderland",
    page_icon="🀄",
    layout="wide",
    initial_sidebar_state="expanded",
)

# ─── 自定义 CSS ─────────────────────────────────────────
st.markdown("""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700;900&display=swap');

    * { font-family: 'Noto Sans SC', sans-serif; }

    .main-title {
        text-align: center;
        font-size: 3rem;
        font-weight: 900;
        background: linear-gradient(135deg, #FF6B6B, #FFE66D, #4ECDC4, #FF6B6B);
        background-size: 300% 300%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradient 3s ease infinite;
        margin-bottom: 0.5rem;
    }
    @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    .char-display {
        font-size: 8rem;
        font-weight: 900;
        text-align: center;
        color: #2C3E50;
        text-shadow: 3px 3px 6px rgba(0,0,0,0.15);
        animation: bounce 1s ease infinite;
    }
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }

    .pinyin-display {
        font-size: 2.5rem;
        text-align: center;
        color: #E74C3C;
        font-weight: 700;
    }

    .english-display {
        font-size: 1.5rem;
        text-align: center;
        color: #7F8C8D;
        font-weight: 400;
    }

    .card {
        background: white;
        border-radius: 20px;
        padding: 25px;
        box-shadow: 0 8px 30px rgba(0,0,0,0.1);
        transition: transform 0.3s;
        margin: 10px 0;
    }
    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 40px rgba(0,0,0,0.15);
    }

    .story-card {
        background: linear-gradient(135deg, #FFF9E6, #FFF0F5);
        border-radius: 20px;
        padding: 30px;
        border-left: 5px solid #FF6B6B;
        margin: 15px 0;
    }

    .category-badge {
        display: inline-block;
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 700;
        margin: 5px;
    }

    .word-card {
        background: #F8F9FA;
        border-radius: 12px;
        padding: 12px 18px;
        text-align: center;
        margin: 5px;
        display: inline-block;
        border: 2px dashed #DEE2E6;
    }

    .word-card .char {
        font-size: 1.8rem;
        font-weight: 700;
        color: #2C3E50;
    }
    .word-card .pinyin {
        font-size: 1rem;
        color: #E74C3C;
    }
    .word-card .english {
        font-size: 0.85rem;
        color: #7F8C8D;
    }

    .quiz-option {
        font-size: 2.5rem;
        font-weight: 900;
        padding: 20px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
        background: white;
        border: 3px solid #E0E0E0;
        transition: all 0.3s;
    }
    .quiz-option:hover {
        border-color: #4ECDC4;
        background: #F0FFFE;
        transform: scale(1.05);
    }

    .progress-bar-bg {
        background: #E0E0E0;
        border-radius: 10px;
        height: 20px;
        overflow: hidden;
    }
    .progress-bar-fill {
        background: linear-gradient(90deg, #4ECDC4, #44B09E);
        height: 100%;
        border-radius: 10px;
        transition: width 0.5s ease;
    }

    .footer {
        text-align: center;
        padding: 30px;
        color: #BDC3C7;
        font-size: 0.9rem;
    }

    .sidebar-char {
        font-size: 2rem;
        font-weight: 900;
        color: #2C3E50;
    }
</style>
""", unsafe_allow_html=True)


# ─── 图片生成函数 ───────────────────────────────────────
def generate_image(prompt, size="square_hd"):
    """使用 text_to_image API 生成图片"""
    try:
        encoded_prompt = requests.utils.quote(prompt)
        url = f"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt={encoded_prompt}&image_size={size}"
        resp = requests.get(url, timeout=30)
        if resp.status_code == 200:
            img = Image.open(BytesIO(resp.content))
            return img
        return None
    except Exception as e:
        st.warning(f"Image generation unavailable: {e}")
        return None


@st.cache_data(show_spinner=False)
def get_cached_image(prompt, char):
    """缓存图片"""
    return generate_image(prompt)


# ─── 进度管理 ───────────────────────────────────────────
PROGRESS_FILE = os.path.join(os.path.dirname(__file__), ".progress.json")


def load_progress():
    if os.path.exists(PROGRESS_FILE):
        with open(PROGRESS_FILE, "r") as f:
            return json.load(f)
    return {"learned": [], "quiz_scores": [], "stars": 0}


def save_progress(progress):
    with open(PROGRESS_FILE, "w") as f:
        json.dump(progress, f)


def mark_learned(char):
    progress = load_progress()
    if char not in progress["learned"]:
        progress["learned"].append(char)
        progress["stars"] += 1
        save_progress(progress)


def add_quiz_score(score, total):
    progress = load_progress()
    progress["quiz_scores"].append({"score": score, "total": total})
    if score == total:
        progress["stars"] += 3
    save_progress(progress)


# ─── 侧边栏 ─────────────────────────────────────────────
with st.sidebar:
    st.markdown("## 🀄 汉字乐园")
    st.markdown("*Chinese Character Wonderland*")

    # 语言选择
    lang = st.radio(
        "语言 / Language",
        ["中文", "English"],
        horizontal=True,
    )
    is_cn = lang == "中文"

    st.divider()

    # 导航
    page = st.radio(
        "选择页面 / Select Page" if not is_cn else "选择页面",
        [
            "🏠 " + ("首页" if is_cn else "Home"),
            "📖 " + ("学习汉字" if is_cn else "Learn Characters"),
            "📚 " + ("故事时间" if is_cn else "Story Time"),
            "🎮 " + ("趣味测验" if is_cn else "Fun Quiz"),
            "⭐ " + ("我的进度" if is_cn else "My Progress"),
        ],
    )

    st.divider()

    progress = load_progress()
    learned_count = len(progress["learned"])
    total_count = len(CHARACTERS)

    st.markdown(
        f"**{'学习进度' if is_cn else 'Progress'}**  "
        f"{learned_count}/{total_count}"
    )
    st.progress(learned_count / total_count if total_count > 0 else 0)

    st.markdown(f"⭐ **{'星星' if is_cn else 'Stars'}**: {progress['stars']}")

    st.divider()

    st.markdown("### " + ("分类浏览" if is_cn else "Browse by Category"))
    categories = list(set(c["category"] for c in CHARACTERS))
    for cat in categories:
        cat_chars = [c for c in CHARACTERS if c["category"] == cat]
        cat_en = cat_chars[0]["category_en"]
        st.markdown(
            f"**{cat}** *({cat_en})* — "
            + " ".join([f"`{c['char']}`" for c in cat_chars])
        )


# ─── 辅助函数 ───────────────────────────────────────────
def display_character_card(char_data, show_story=True, show_image=True):
    """显示汉字卡片"""
    col1, col2 = st.columns([1, 2])

    with col1:
        # 图片
        if show_image:
            with st.spinner("🎨 " + ("生成图片中..." if is_cn else "Generating image...")):
                img = get_cached_image(char_data["image_prompt"], char_data["char"])
                if img:
                    st.image(img, use_container_width=True)

    with col2:
        # 汉字大字
        st.markdown(
            f'<div class="char-display">{char_data["char"]}</div>',
            unsafe_allow_html=True,
        )
        # 拼音
        st.markdown(
            f'<div class="pinyin-display">{char_data["pinyin"]}</div>',
            unsafe_allow_html=True,
        )
        # 英文
        st.markdown(
            f'<div class="english-display">{char_data["english"]}</div>',
            unsafe_allow_html=True,
        )

        # 发音按钮
        audio_html = get_pronunciation_html(char_data["char"], "zh-CN")
        if audio_html:
            st.markdown(audio_html, unsafe_allow_html=True)

        # 笔顺提示
        st.markdown(
            f"✏️ **{'笔顺' if is_cn else 'Stroke order'}**: {char_data['stroke_hint']}"
        )

        # 分类标签
        st.markdown(
            f'<span class="category-badge" style="background:#FFE0E0;color:#E74C3C;">'
            f'{char_data["category"]} / {char_data["category_en"]}</span>',
            unsafe_allow_html=True,
        )

    # 词组
    st.markdown("---")
    st.markdown(
        f"### 📝 {'相关词组' if is_cn else 'Related Words'}"
    )
    word_cols = st.columns(len(char_data["words"]))
    for i, word in enumerate(char_data["words"]):
        with word_cols[i]:
            st.markdown(
                f'<div class="word-card">'
                f'<div class="char">{word["word"]}</div>'
                f'<div class="pinyin">{word["pinyin"]}</div>'
                f'<div class="english">{word["english"]}</div>'
                f'</div>',
                unsafe_allow_html=True,
            )

    # 故事
    if show_story:
        st.markdown("---")
        st.markdown(
            f"### 📖 {'汉字故事' if is_cn else 'Character Story'}"
        )
        story_text = char_data["story_cn"] if is_cn else char_data["story_en"]
        st.markdown(
            f'<div class="story-card">{story_text}</div>',
            unsafe_allow_html=True,
        )

        if not is_cn:
            with st.expander("📖 中文故事 (Chinese Story)"):
                st.markdown(char_data["story_cn"])

    # 标记已学
    if char_data["char"] not in progress["learned"]:
        if st.button(
            f"✅ {'标记为已学' if is_cn else 'Mark as Learned'}",
            key=f"learn_{char_data['char']}",
        ):
            mark_learned(char_data["char"])
            st.rerun()
    else:
        st.success(f"🌟 {'已学' if is_cn else 'Learned'}!")


# ─── 主区域 ─────────────────────────────────────────────

# 标题
st.markdown(
    '<div class="main-title">🀄 汉字乐园</div>',
    unsafe_allow_html=True,
)
st.markdown(
    f"<p style='text-align:center;font-size:1.2rem;color:#7F8C8D;'>"
    f"{'儿童汉字拼音学习软件' if is_cn else 'Chinese Character & Pinyin Learning for Kids'}"
    f"</p>",
    unsafe_allow_html=True,
)
st.markdown("---")


# ═══════════════════════════════════════════════════════
# 首页
# ═══════════════════════════════════════════════════════
if "🏠" in page:
    st.markdown(
        f"## 🎉 {'欢迎来到汉字乐园！' if is_cn else 'Welcome to Chinese Character Wonderland!'}"
    )

    col1, col2, col3 = st.columns(3)

    with col1:
        st.markdown("### 📖 " + ("学习汉字" if is_cn else "Learn"))
        st.markdown(
            "学习" + ("常见汉字，看图识字，听发音，读故事！" if is_cn else " common characters with pictures, audio, and stories!")
        )

    with col2:
        st.markdown("### 📚 " + ("故事时间" if is_cn else "Stories"))
        st.markdown(
            "阅读" + ("有趣的汉字故事，在故事中学汉字！" if is_cn else " fun character stories and learn while reading!")
        )

    with col3:
        st.markdown("### 🎮 " + ("趣味测验" if is_cn else "Quiz"))
        st.markdown(
            "通过" + ("游戏测验巩固学习成果！" if is_cn else " games to test what you've learned!")
        )

    st.markdown("---")

    # 今日推荐
    st.markdown(
        f"### 🌟 {'今日推荐汉字' if is_cn else 'Today\'s Recommended Characters'}"
    )

    today_chars = random.sample(CHARACTERS, min(3, len(CHARACTERS)))
    cols = st.columns(3)
    for i, char_data in enumerate(today_chars):
        with cols[i]:
            with st.container():
                st.markdown(
                    f'<div style="text-align:center;font-size:5rem;font-weight:900;color:#2C3E50;">'
                    f'{char_data["char"]}</div>',
                    unsafe_allow_html=True,
                )
                st.markdown(
                    f'<div style="text-align:center;font-size:1.5rem;color:#E74C3C;">'
                    f'{char_data["pinyin"]}</div>',
                    unsafe_allow_html=True,
                )
                st.markdown(
                    f'<div style="text-align:center;font-size:1rem;color:#7F8C8D;">'
                    f'{char_data["english"]}</div>',
                    unsafe_allow_html=True,
                )

    st.markdown("---")

    # 学习统计
    st.markdown(
        f"### 📊 {'学习统计' if is_cn else 'Learning Statistics'}"
    )
    stat_col1, stat_col2, stat_col3, stat_col4 = st.columns(4)
    with stat_col1:
        st.metric(
            "📚 " + ("已学汉字" if is_cn else "Learned"),
            f"{learned_count}/{total_count}",
        )
    with stat_col2:
        st.metric("⭐ " + ("星星" if is_cn else "Stars"), progress["stars"])
    with stat_col3:
        quiz_count = len(progress["quiz_scores"])
        st.metric(
            "🎮 " + ("测验次数" if is_cn else "Quizzes"),
            quiz_count,
        )
    with stat_col4:
        avg_score = (
            round(
                sum(s["score"] / s["total"] for s in progress["quiz_scores"])
                / quiz_count
                * 100
            )
            if quiz_count > 0
            else 0
        )
        st.metric(
            "🎯 " + ("平均分" if is_cn else "Avg Score"),
            f"{avg_score}%",
        )


# ═══════════════════════════════════════════════════════
# 学习汉字
# ═══════════════════════════════════════════════════════
elif "📖" in page:
    st.markdown(
        f"## 📖 {'学习汉字' if is_cn else 'Learn Characters'}"
    )

    # 等级选择
    level_names = [l["name"] + " / " + l["name_en"] for l in LEVELS]
    selected_level = st.selectbox(
        ("选择等级" if is_cn else "Select Level"),
        level_names,
    )

    level_idx = level_names.index(selected_level)
    level = LEVELS[level_idx]

    # 获取该等级的汉字
    level_chars = [CHARACTERS[i] for i in level["char_indices"]]

    # 显示模式
    view_mode = st.radio(
        ("显示模式" if is_cn else "View Mode"),
        [
            ("网格视图" if is_cn else "Grid View"),
            ("列表视图" if is_cn else "List View"),
        ],
        horizontal=True,
    )

    if "Grid" in view_mode:
        # 网格视图
        cols_per_row = 3
        for i in range(0, len(level_chars), cols_per_row):
            cols = st.columns(cols_per_row)
            for j, char_data in enumerate(level_chars[i : i + cols_per_row]):
                with cols[j]:
                    with st.container():
                        # 小卡片
                        st.markdown(
                            f'<div style="text-align:center;font-size:4rem;font-weight:900;'
                            f'color:#2C3E50;cursor:pointer;">{char_data["char"]}</div>',
                            unsafe_allow_html=True,
                        )
                        st.markdown(
                            f'<div style="text-align:center;font-size:1.2rem;color:#E74C3C;">'
                            f'{char_data["pinyin"]}</div>',
                            unsafe_allow_html=True,
                        )
                        st.markdown(
                            f'<div style="text-align:center;font-size:0.9rem;color:#7F8C8D;">'
                            f'{char_data["english"]}</div>',
                            unsafe_allow_html=True,
                        )

                        learned_mark = "✅ " if char_data["char"] in progress["learned"] else ""
                        if st.button(
                            f"{learned_mark}{'学这个' if is_cn else 'Learn'} {char_data['char']}",
                            key=f"grid_learn_{char_data['char']}",
                            use_container_width=True,
                        ):
                            st.session_state["selected_char"] = char_data["char"]
                            st.rerun()

        # 如果选中了某个汉字，显示详情
        if "selected_char" in st.session_state:
            st.markdown("---")
            char_data = next(
                c for c in CHARACTERS if c["char"] == st.session_state["selected_char"]
            )
            display_character_card(char_data)
            if st.button(
                "🔙 " + ("返回列表" if is_cn else "Back to List")
            ):
                del st.session_state["selected_char"]
                st.rerun()

    else:
        # 列表视图
        for char_data in level_chars:
            with st.expander(
                f"{char_data['char']} — {char_data['pinyin']} — {char_data['english']}"
                + (" ✅" if char_data["char"] in progress["learned"] else ""),
                expanded=len(level_chars) <= 3,
            ):
                display_character_card(char_data)

    # 底部导航
    st.markdown("---")
    st.markdown(
        f"### 🗂️ {'所有分类' if is_cn else 'All Categories'}"
    )
    categories = list(set(c["category"] for c in CHARACTERS))
    for cat in categories:
        cat_chars = [c for c in CHARACTERS if c["category"] == cat]
        st.markdown(
            f"**{cat}** *({cat_chars[0]['category_en']})*: "
            + " · ".join(
                [f"`{c['char']}` {c['pinyin']}" for c in cat_chars]
            )
        )


# ═══════════════════════════════════════════════════════
# 故事时间
# ═══════════════════════════════════════════════════════
elif "📚" in page:
    st.markdown(
        f"## 📚 {'故事时间' if is_cn else 'Story Time'}"
    )

    for story in STORIES:
        with st.container():
            st.markdown("---")
            st.markdown(
                f"### {story['title']} / *{story['title_en']}*"
            )

            # 故事配图
            with st.spinner("🎨 " + ("生成故事插图..." if is_cn else "Generating story illustration...")):
                img = get_cached_image(story["image_prompt"], story["title"])
                if img:
                    st.image(img, use_container_width=True)

            # 故事内容
            story_text = story["content_cn"] if is_cn else story["content_en"]
            paragraphs = story_text.split("\n\n")
            for p in paragraphs:
                if p.strip():
                    st.markdown(
                        f'<div class="story-card">{p.strip()}</div>',
                        unsafe_allow_html=True,
                    )

            # 故事中的汉字
            st.markdown(
                f"#### 🀄 {'故事中的汉字' if is_cn else 'Characters in this story'}:"
            )
            char_cols = st.columns(len(story["characters"]))
            for i, ch in enumerate(story["characters"]):
                char_data = next(c for c in CHARACTERS if c["char"] == ch)
                with char_cols[i]:
                    st.markdown(
                        f'<div style="text-align:center;">'
                        f'<span style="font-size:2.5rem;font-weight:900;">{ch}</span><br>'
                        f'<span style="color:#E74C3C;">{char_data["pinyin"]}</span><br>'
                        f'<span style="font-size:0.8rem;color:#7F8C8D;">{char_data["english"]}</span>'
                        f'</div>',
                        unsafe_allow_html=True,
                    )

            # 发音
            if st.button(
                f"🔊 {'朗读故事' if is_cn else 'Read Story Aloud'} — {story['title']}",
                key=f"story_audio_{story['title']}",
            ):
                audio_text = story["content_cn"] if is_cn else story["content_en"]
                # 只读前几句（避免太长）
                first_para = story_text.split("\n\n")[0]
                audio_html = get_pronunciation_html(first_para, "zh-CN" if is_cn else "en")
                if audio_html:
                    st.markdown(audio_html, unsafe_allow_html=True)

            if not is_cn:
                with st.expander("📖 中文版 (Chinese Version)"):
                    for p in story["content_cn"].split("\n\n"):
                        if p.strip():
                            st.markdown(p.strip())


# ═══════════════════════════════════════════════════════
# 趣味测验
# ═══════════════════════════════════════════════════════
elif "🎮" in page:
    st.markdown(
        f"## 🎮 {'趣味测验' if is_cn else 'Fun Quiz'}"
    )

    # 测验类型
    quiz_type = st.radio(
        ("测验类型" if is_cn else "Quiz Type"),
        [
            ("看汉字选拼音" if is_cn else "Character → Pinyin"),
            ("看拼音选汉字" if is_cn else "Pinyin → Character"),
            ("看图选汉字" if is_cn else "Picture → Character"),
            ("听音选汉字" if is_cn else "Audio → Character"),
        ],
        horizontal=True,
    )

    # 初始化测验状态
    if "quiz_initialized" not in st.session_state:
        st.session_state.quiz_initialized = False
    if "quiz_questions" not in st.session_state:
        st.session_state.quiz_questions = []
    if "quiz_current" not in st.session_state:
        st.session_state.quiz_current = 0
    if "quiz_score" not in st.session_state:
        st.session_state.quiz_score = 0
    if "quiz_answered" not in st.session_state:
        st.session_state.quiz_answered = False
    if "quiz_feedback" not in st.session_state:
        st.session_state.quiz_feedback = ""

    # 开始测验按钮
    if not st.session_state.quiz_initialized:
        num_questions = st.slider(
            ("题目数量" if is_cn else "Number of Questions"),
            3, 10, 5,
        )
        if st.button(
            "🚀 " + ("开始测验！" if is_cn else "Start Quiz!"),
            use_container_width=True,
        ):
            st.session_state.quiz_questions = random.sample(
                CHARACTERS, min(num_questions, len(CHARACTERS))
            )
            st.session_state.quiz_current = 0
            st.session_state.quiz_score = 0
            st.session_state.quiz_answered = False
            st.session_state.quiz_feedback = ""
            st.session_state.quiz_initialized = True
            st.rerun()

    else:
        # 显示进度
        q_idx = st.session_state.quiz_current
        total_q = len(st.session_state.quiz_questions)

        if q_idx < total_q:
            current_char = st.session_state.quiz_questions[q_idx]

            # 进度条
            st.progress((q_idx) / total_q)
            st.markdown(
                f"**{'题目' if is_cn else 'Question'} {q_idx + 1} / {total_q}**"
            )

            # 生成选项
            options = [current_char]
            while len(options) < 4:
                candidate = random.choice(CHARACTERS)
                if candidate not in options:
                    options.append(candidate)
            random.shuffle(options)

            correct_idx = options.index(current_char)

            st.markdown("---")

            # 根据测验类型显示题目
            if "Character" in quiz_type and "Pinyin" in quiz_type:
                # 看汉字选拼音
                st.markdown(
                    f'<div class="char-display" style="font-size:6rem;">'
                    f'{current_char["char"]}</div>',
                    unsafe_allow_html=True,
                )
                st.markdown(
                    f"### {'选出正确的拼音：' if is_cn else 'Choose the correct pinyin:'}"
                )

                option_labels = [c["pinyin"] for c in options]
                correct_answer = current_char["pinyin"]

            elif "Pinyin" in quiz_type and "Character" in quiz_type:
                # 看拼音选汉字
                st.markdown(
                    f'<div class="pinyin-display" style="font-size:3rem;">'
                    f'{current_char["pinyin"]}</div>',
                    unsafe_allow_html=True,
                )
                st.markdown(
                    f"### {'选出正确的汉字：' if is_cn else 'Choose the correct character:'}"
                )

                option_labels = [c["char"] for c in options]
                correct_answer = current_char["char"]

            elif "Picture" in quiz_type:
                # 看图选汉字
                with st.spinner("🎨 " + ("生成图片..." if is_cn else "Generating image...")):
                    img = get_cached_image(
                        current_char["image_prompt"], current_char["char"]
                    )
                    if img:
                        st.image(img, width=300)
                st.markdown(
                    f"### {'这是什么字？' if is_cn else 'What character is this?'}"
                )

                option_labels = [c["char"] for c in options]
                correct_answer = current_char["char"]

            elif "Audio" in quiz_type:
                # 听音选汉字
                audio_html = get_pronunciation_html(current_char["char"], "zh-CN")
                if audio_html:
                    st.markdown(audio_html, unsafe_allow_html=True)
                st.markdown(
                    f"### {'听到的是什么字？' if is_cn else 'What character did you hear?'}"
                )

                option_labels = [c["char"] for c in options]
                correct_answer = current_char["char"]

            # 选项按钮
            cols = st.columns(4)
            for i, (opt_char, label) in enumerate(zip(options, option_labels)):
                with cols[i]:
                    disabled = st.session_state.quiz_answered
                    if st.button(
                        label,
                        key=f"quiz_opt_{q_idx}_{i}",
                        use_container_width=True,
                        disabled=disabled,
                    ):
                        if i == correct_idx:
                            st.session_state.quiz_score += 1
                            st.session_state.quiz_feedback = (
                                "🎉 " + ("正确！太棒了！" if is_cn else "Correct! Great job!")
                            )
                        else:
                            st.session_state.quiz_feedback = (
                                f"❌ " + (
                                    f"不对哦，正确答案是 {correct_answer}"
                                    if is_cn
                                    else f"Not quite. The answer is {correct_answer}"
                                )
                            )
                        st.session_state.quiz_answered = True
                        st.rerun()

            # 反馈
            if st.session_state.quiz_answered:
                st.markdown(
                    f"### {st.session_state.quiz_feedback}"
                )
                # 显示正确答案详情
                st.markdown(
                    f"**{current_char['char']}** — "
                    f"*{current_char['pinyin']}* — "
                    f"{current_char['english']}"
                )
                audio_html = get_pronunciation_html(current_char["char"], "zh-CN")
                if audio_html:
                    st.markdown(audio_html, unsafe_allow_html=True)

                if st.button(
                    "▶️ " + ("下一题" if is_cn else "Next Question"),
                    use_container_width=True,
                ):
                    st.session_state.quiz_current += 1
                    st.session_state.quiz_answered = False
                    st.session_state.quiz_feedback = ""
                    st.rerun()

        else:
            # 测验结束
            score = st.session_state.quiz_score
            total = total_q

            st.balloons()
            st.markdown(
                f"## 🎉 {'测验完成！' if is_cn else 'Quiz Complete!'}"
            )
            st.markdown(
                f"### {'得分' if is_cn else 'Score'}: {score} / {total}"
            )

            percentage = score / total * 100
            color = (
                "#4ECDC4" if percentage >= 80 else "#FFE66D" if percentage >= 60 else "#FF6B6B"
            )
            st.markdown(
                f'<div style="background:{color};padding:20px;border-radius:15px;text-align:center;">'
                f'<span style="font-size:3rem;font-weight:900;color:white;">{percentage:.0f}%</span>'
                f'</div>',
                unsafe_allow_html=True,
            )

            if percentage == 100:
                st.markdown(
                    "🌟 " + ("满分！你太厉害了！" if is_cn else "Perfect score! You're amazing!")
                )
            elif percentage >= 80:
                st.markdown(
                    "👍 " + ("很棒！继续加油！" if is_cn else "Great job! Keep it up!")
                )
            else:
                st.markdown(
                    "💪 " + ("继续努力，多练习就会更好！" if is_cn else "Keep practicing, you'll get better!")
                )

            add_quiz_score(score, total)

            if st.button(
                "🔄 " + ("再来一次" if is_cn else "Try Again"),
                use_container_width=True,
            ):
                st.session_state.quiz_initialized = False
                st.session_state.quiz_questions = []
                st.session_state.quiz_current = 0
                st.session_state.quiz_score = 0
                st.session_state.quiz_answered = False
                st.session_state.quiz_feedback = ""
                st.rerun()


# ═══════════════════════════════════════════════════════
# 我的进度
# ═══════════════════════════════════════════════════════
elif "⭐" in page:
    st.markdown(
        f"## ⭐ {'我的进度' if is_cn else 'My Progress'}"
    )

    progress = load_progress()

    # 成绩概览
    col1, col2, col3 = st.columns(3)
    with col1:
        st.metric("⭐ " + ("星星" if is_cn else "Stars"), progress["stars"])
    with col2:
        st.metric(
            "📚 " + ("已学汉字" if is_cn else "Characters Learned"),
            f"{len(progress['learned'])}/{len(CHARACTERS)}",
        )
    with col3:
        quiz_count = len(progress["quiz_scores"])
        st.metric(
            "🎮 " + ("测验次数" if is_cn else "Quizzes Taken"),
            quiz_count,
        )

    st.markdown("---")

    # 已学汉字
    st.markdown(
        f"### 📚 {'已学汉字' if is_cn else 'Learned Characters'}"
    )

    if progress["learned"]:
        learned_chars = [
            c for c in CHARACTERS if c["char"] in progress["learned"]
        ]
        cols = st.columns(min(len(learned_chars), 6))
        for i, char_data in enumerate(learned_chars):
            with cols[i % len(cols)]:
                st.markdown(
                    f'<div style="text-align:center;font-size:2.5rem;font-weight:900;'
                    f'color:#2C3E50;">{char_data["char"]}</div>',
                    unsafe_allow_html=True,
                )
                st.markdown(
                    f'<div style="text-align:center;color:#E74C3C;">'
                    f'{char_data["pinyin"]}</div>',
                    unsafe_allow_html=True,
                )
    else:
        st.info(
            "还没有学习任何汉字，快去学习吧！" if is_cn else "No characters learned yet. Go learn some!"
        )

    st.markdown("---")

    # 未学汉字
    st.markdown(
        f"### 📝 {'待学汉字' if is_cn else 'Characters to Learn'}"
    )
    unlearned = [
        c for c in CHARACTERS if c["char"] not in progress["learned"]
    ]
    if unlearned:
        st.markdown(
            " ".join([f"`{c['char']}`" for c in unlearned])
        )
    else:
        st.success(
            "🎉 全部学完了！太厉害了！" if is_cn else "🎉 All learned! You're amazing!"
        )

    st.markdown("---")

    # 测验历史
    if progress["quiz_scores"]:
        st.markdown(
            f"### 📊 {'测验历史' if is_cn else 'Quiz History'}"
        )
        for i, score_data in enumerate(
            progress["quiz_scores"][-10:]
        ):
            pct = score_data["score"] / score_data["total"] * 100
            emoji = "🌟" if pct == 100 else "✅" if pct >= 80 else "📝"
            st.markdown(
                f"{emoji} {'第' if is_cn else '#'}{i+1}{'次' if is_cn else ''}: "
                f"{score_data['score']}/{score_data['total']} ({pct:.0f}%)"
            )

    # 重置按钮
    st.markdown("---")
    if st.button(
        "🗑️ " + ("重置进度" if is_cn else "Reset Progress"),
        type="secondary",
    ):
        if os.path.exists(PROGRESS_FILE):
            os.remove(PROGRESS_FILE)
        st.rerun()


# ─── 页脚 ───────────────────────────────────────────────
st.markdown("---")
st.markdown(
    '<div class="footer">'
    + ("🀄 汉字乐园 - 儿童汉字拼音学习软件 | Made with ❤️ using Streamlit"
       if is_cn
       else "🀄 Chinese Character Wonderland - Learning Made Fun for Kids | Made with ❤️ using Streamlit")
    + '</div>',
    unsafe_allow_html=True,
)
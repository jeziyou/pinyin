"""
汉字乐园 — 儿童汉字拼音学习软件（Streamlit + 内嵌 HTML 应用）
优点：
  · 汉字/故事丰富（89 汉字，8 故事）
  · 图片 = 本地 emoji + 渐变插画 + CSS，无网络依赖
  · 中英双语、发音朗读、趣味测验、学习进度保存（localStorage）
  · HTML 网页版可独立打开 static/index.html，或由本文件通过 streamlit run 启动
"""

import os
import json
import streamlit as st

# ================= 页面配置 =================
st.set_page_config(
    page_title="汉字乐园 | Chinese Character Wonderland",
    page_icon="🏯",
    layout="wide",
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(BASE_DIR, "static")

# ================= 加载静态文件 =================
def load_text(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()

html_css = load_text(os.path.join(STATIC_DIR, "styles.css"))
html_js  = load_text(os.path.join(STATIC_DIR, "app.js"))
data_json_path = os.path.join(STATIC_DIR, "data.json")
data_json_text = load_text(data_json_path)

# ================= 组装完整 HTML =================
# 把 styles.css 和 app.js 内联进 index.html，同时把 data.json 注入为 window.HANZI_DATA
# 这样不需要额外的 HTTP 静态目录；在 Streamlit 组件里即开即用。

# 先读取 index.html 原文，然后把 styles.css / app.js / data.json 都内联进去
# —— 用更简单的字符串替换，避免 re.sub 把 JS 中的 \u 等当作转义处理
index_html_src = load_text(os.path.join(STATIC_DIR, "index.html"))

# 把 styles.css 替换成内联 <style>
css_anchor_start = index_html_src.find('<link rel="stylesheet" href="styles.css">')
if css_anchor_start < 0:
    css_anchor_start = index_html_src.find('href="styles.css"')
if css_anchor_start >= 0:
    # 向前找到最近的 <link 开头
    link_open = index_html_src.rfind("<link", 0, css_anchor_start)
    link_close = index_html_src.find(">", css_anchor_start) + 1
    index_html_src = (
        index_html_src[:link_open] + f"<style>\n{html_css}\n</style>" + index_html_src[link_close:]
    )

# 把 <script src="app.js"></script> 替换成内联 <script>（带 HANZI_DATA）
js_anchor_start = index_html_src.find('src="app.js"')
if js_anchor_start >= 0:
    script_open = index_html_src.rfind("<script", 0, js_anchor_start)
    script_close = index_html_src.find("</script>", js_anchor_start) + len("</script>")
    inline = (
        f"<script>\n"
        f"window.HANZI_DATA = {data_json_text};\n"
        f"{html_js}\n"
        f"</script>"
    )
    index_html_src = index_html_src[:script_open] + inline + index_html_src[script_close:]

# ================= 页面顶部标题条（Streamlit 原生装饰） =================
st.markdown("""
<style>
    /* 隐藏 Streamlit 默认元素，让内嵌 HTML 更像独立应用 */
    #MainMenu {visibility: hidden;}
    header {visibility: hidden;}
    footer {visibility: hidden;}
    .block-container {padding-top: 0 !important; padding-bottom: 0 !important;}
    /* 页面外围背景 */
    html, body, .stApp {background: linear-gradient(135deg, #FFF4E6, #FFE4F0, #E8F4FF);}
    .app-intro {
        text-align:center; margin: 18px 4% 12px; padding: 14px 18px;
        background: rgba(255,255,255,0.85); border-radius: 18px;
        box-shadow: 0 4px 14px rgba(0,0,0,0.06);
    }
    .app-intro h1 {
        font-size: 28px; margin: 0 0 6px; background: linear-gradient(135deg,#FF6B9D,#FFD93D,#4ECDC4);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        font-weight: 900; letter-spacing: 2px;
    }
    .app-intro p { color: #5B5196; font-size: 14px; margin: 0; }
</style>
""", unsafe_allow_html=True)

# 可选的小顶部条
st.markdown("""
<div class="app-intro">
    <h1>🏯 汉字乐园 · Chinese Character Wonderland</h1>
    <p>📚 学汉字 · 📖 听故事 · 🎯 趣味测验 · ⭐ 保存进度 — 中英双语 & 可朗读</p>
</div>
""", unsafe_allow_html=True)

# ================= 内嵌 HTML 应用 =================
# 使用 streamlit.components.v1.html，高 1400 足够容纳所有页面；弹窗用 fixed 定位
try:
    import streamlit.components.v1 as components
except Exception:
    st.error("当前环境中 streamlit.components.v1 不可用。请升级或更换 Streamlit 版本。")
    st.stop()

components.html(
    index_html_src,
    width=None,       # 全宽
    height=1400,      # 足够长以避免内容被裁剪
    scrolling=True,
)

# ================= 底部小提示 =================
st.markdown("""
<div style="text-align:center;color:#8B8BA7;font-size:12px;margin:14px 0 28px">
    💡 提示：点击汉字听发音；进度会保存在浏览器里。也可直接在浏览器打开 <code>static/index.html</code> 查看纯网页版。
</div>
""", unsafe_allow_html=True)

"""
汉字乐园 —— Streamlit 内嵌 HTML 版本
所有资源（CSS、JS、数据）都内联到 HTML 中，确保在 Streamlit 环境中正常运行
"""
import streamlit as st
import os
import base64

st.set_page_config(
    page_title="汉字乐园 | Chinese Character Wonderland",
    page_icon="🀄",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# 读取所有资源文件
static_dir = os.path.join(os.path.dirname(__file__), "static")

# CSS
with open(os.path.join(static_dir, "styles.css"), "rb") as f:
    css_b64 = base64.b64encode(f.read()).decode()

# JS
with open(os.path.join(static_dir, "app.js"), "rb") as f:
    js_b64 = base64.b64encode(f.read()).decode()

# JSON 数据
with open(os.path.join(static_dir, "data.json"), "rb") as f:
    data_b64 = base64.b64encode(f.read()).decode()

# HTML 模板
with open(os.path.join(static_dir, "index.html"), "r", encoding="utf-8") as f:
    html_content = f.read()

# 替换引用为内联数据
html_content = html_content.replace(
    'href="styles.css"',
    f'href="data:text/css;base64,{css_b64}"'
)
html_content = html_content.replace(
    'src="app.js"',
    f'src="data:text/javascript;base64,{js_b64}"'
)
html_content = html_content.replace(
    'window.DATA_JSON = null',
    f'window.DATA_JSON = atob("{data_b64}")'
)

# 嵌入完整应用
st.components.v1.html(html_content, height=950, scrolling=True)

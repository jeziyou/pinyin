"""
图片工具模块：emoji + SVG 占位图（立即显示，无需网络）
可选：按需调用 AI API 并本地缓存
"""

import os
import io
import hashlib
import random
import requests
from PIL import Image, ImageDraw, ImageFont, ImageColor

CACHE_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), ".image_cache")
os.makedirs(CACHE_DIR, exist_ok=True)

CHAR_EMOJI = {
    "日": "☀️", "月": "🌙", "山": "⛰️", "水": "💧", "火": "🔥",
    "人": "👤", "大": "🐘", "小": "🐜", "天": "🌤️", "木": "🌳",
    "口": "👄", "目": "👁️", "手": "✋", "马": "🐴", "牛": "🐮",
    "鱼": "🐟", "鸟": "🐦", "花": "🌺", "草": "🌱",
    "一": "1️⃣", "二": "2️⃣", "三": "3️⃣", "上": "⬆️", "下": "⬇️", "中": "🎯",
}

CATEGORY_COLORS = {
    "自然": ("#FFE4B5", "#FF8C00"),
    "人物": ("#FFD1DC", "#FF69B4"),
    "动物": ("#E0E0FF", "#6A5ACD"),
    "植物": ("#C8F7C5", "#2E8B57"),
    "数字": ("#FFF5BA", "#DAA520"),
    "方位": ("#D1F2EB", "#20B2AA"),
    "身体": ("#F5DCCB", "#CD853F"),
    "形容词": ("#FFE4E1", "#DC143C"),
}

# 找到可用字体路径（优先找支持中文的字体）
FONT_CANDIDATES = [
    "/usr/share/fonts/truetype/noto/NotoSansCJK-Regular.ttc",
    "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc",
    "/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc",
    "/usr/share/fonts/truetype/wqy/wqy-microhei.ttc",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    "/System/Library/Fonts/PingFang.ttc",
    "/System/Library/Fonts/STHeiti Medium.ttc",
    "C:/Windows/Fonts/msyh.ttc",
    "C:/Windows/Fonts/simhei.ttf",
]


def _load_font(size):
    """尝试加载一个可用字体"""
    for path in FONT_CANDIDATES:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default()


def _hex_to_rgb(h):
    return ImageColor.getrgb(h)


def make_placeholder_image(char, category, size=(400, 400)):
    """生成一张高质量的彩色占位图（纯本地，0延迟）"""
    bg_color, fg_color = CATEGORY_COLORS.get(category, ("#E8F5E9", "#2E7D32"))
    emoji = CHAR_EMOJI.get(char, "🀄")

    w, h = size
    img = Image.new("RGB", (w, h), _hex_to_rgb(bg_color))
    draw = ImageDraw.Draw(img)

    # 装饰性圆点
    rng = random.Random(ord(char) * 13 + sum(c.encode()[0] for c in char))
    for _ in range(25):
        x = rng.randint(0, w)
        y = rng.randint(0, h)
        r = rng.randint(8, 28)
        draw.ellipse((x - r, y - r, x + r, y + r), fill=(255, 255, 255))

    # 大圆
    circle_r = min(size) * 0.38
    cx, cy = size[0] // 2, size[1] // 2 - 20
    draw.ellipse(
        (cx - circle_r, cy - circle_r, cx + circle_r, cy + circle_r),
        fill=(255, 255, 255),
        outline=_hex_to_rgb(fg_color),
        width=8,
    )

    # 大字（汉字或 emoji）
    font_big = _load_font(int(circle_r * 1.2))
    try:
        draw.text((cx, cy), char, fill=_hex_to_rgb(fg_color), font=font_big, anchor="mm")
    except Exception:
        draw.text((cx, cy), char, fill=_hex_to_rgb(fg_color), font=font_big)

    # 底部拼音/英文区
    font_small = _load_font(32)
    draw.text((cx, h - 50), char, fill=_hex_to_rgb(fg_color), font=font_small, anchor="mm")

    return img


def get_image_from_api(prompt, cache_key, size="square_hd"):
    """调用 AI API 生成图片，带本地缓存"""
    safe_key = hashlib.md5(cache_key.encode()).hexdigest()
    cache_path = os.path.join(CACHE_DIR, f"{safe_key}.png")
    if os.path.exists(cache_path):
        try:
            return Image.open(cache_path)
        except Exception:
            pass
    try:
        encoded = requests.utils.quote(prompt)
        url = f"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt={encoded}&image_size={size}"
        resp = requests.get(url, timeout=45)
        if resp.status_code == 200 and resp.content:
            img = Image.open(io.BytesIO(resp.content))
            img.save(cache_path)
            return img
    except Exception as e:
        print(f"Image API error: {e}")
    return None

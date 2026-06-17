"""
音频发音工具模块
使用 gTTS 生成汉字发音，支持中英文
"""

import base64
import io
import os
import hashlib
from gtts import gTTS


CACHE_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), ".audio_cache")


def _ensure_cache_dir():
    os.makedirs(CACHE_DIR, exist_ok=True)


def _get_cache_path(text, lang):
    """获取缓存路径"""
    key = hashlib.md5(f"{text}_{lang}".encode()).hexdigest()
    return os.path.join(CACHE_DIR, f"{key}.mp3")


def text_to_speech_base64(text, lang="zh-CN"):
    """
    将文本转换为语音，返回 base64 编码的音频
    支持中文和英文
    """
    _ensure_cache_dir()

    # 映射语言代码
    gtts_lang = "zh-CN" if lang.startswith("zh") else lang

    cache_path = _get_cache_path(text, gtts_lang)

    # 检查缓存
    if os.path.exists(cache_path):
        with open(cache_path, "rb") as f:
            audio_bytes = f.read()
    else:
        try:
            tts = gTTS(text=text, lang=gtts_lang, slow=False)
            fp = io.BytesIO()
            tts.write_to_fp(fp)
            audio_bytes = fp.getvalue()
            # 写入缓存
            with open(cache_path, "wb") as f:
                f.write(audio_bytes)
        except Exception as e:
            print(f"TTS error: {e}")
            return None

    b64 = base64.b64encode(audio_bytes).decode("utf-8")
    return f"data:audio/mp3;base64,{b64}"


def get_pronunciation_html(text, lang="zh-CN"):
    """生成播放发音的 HTML 代码"""
    audio_b64 = text_to_speech_base64(text, lang)
    if audio_b64 is None:
        return ""

    return f"""
    <audio controls style="width: 100%; max-width: 300px; height: 35px;">
        <source src="{audio_b64}" type="audio/mp3">
        Your browser does not support audio.
    </audio>
    """
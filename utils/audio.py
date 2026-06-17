"""
音频发音工具模块
"""

import base64
import io
import os
import hashlib
from gtts import gTTS

CACHE_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), ".audio_cache")
os.makedirs(CACHE_DIR, exist_ok=True)


def text_to_speech_base64(text, lang="zh-CN"):
    key = hashlib.md5(f"{text}_{lang}".encode()).hexdigest()
    cache_path = os.path.join(CACHE_DIR, f"{key}.mp3")
    if os.path.exists(cache_path):
        with open(cache_path, "rb") as f:
            audio_bytes = f.read()
    else:
        try:
            tts = gTTS(text=text, lang=lang if lang != "en" else "en", slow=False)
            fp = io.BytesIO()
            tts.write_to_fp(fp)
            audio_bytes = fp.getvalue()
            with open(cache_path, "wb") as f:
                f.write(audio_bytes)
        except Exception as e:
            print(f"TTS error: {e}")
            return None
    return f"data:audio/mp3;base64,{base64.b64encode(audio_bytes).decode()}"


def get_pronunciation_html(text, lang="zh-CN"):
    audio_b64 = text_to_speech_base64(text, lang)
    if audio_b64 is None:
        return ""
    return f"""
    <audio controls style="width:100%;max-width:360px;height:38px;">
      <source src="{audio_b64}" type="audio/mp3">
    </audio>
    """

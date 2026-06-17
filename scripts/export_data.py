"""把 data/characters.py 中的数据导出为 static/data.json，供前端 HTML 应用直接使用。"""
import json
import os
import sys
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from data.characters import CHARACTERS, STORIES, LEVELS

out_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "static")
os.makedirs(out_dir, exist_ok=True)

out = {
    "characters": CHARACTERS,
    "stories": STORIES,
    "levels": LEVELS,
}

path = os.path.join(out_dir, "data.json")
with open(path, "w", encoding="utf-8") as f:
    json.dump(out, f, ensure_ascii=False, indent=2)

print(f"✅ Written {len(CHARACTERS)} characters, {len(STORIES)} stories -> {path}")

#!/usr/bin/env python3
"""Regenerates assets/media-sizes.js (image width/height, used to prevent layout shift).
Run from the site folder after adding or replacing images:  python3 tools/media-sizes.py"""
import json, os, struct
from pathlib import Path

def size(path):
    with open(path, 'rb') as f:
        data = f.read(64 * 1024)
    if data[:8] == b'\x89PNG\r\n\x1a\n':
        return struct.unpack('>II', data[16:24])
    i = 2
    while i < len(data):
        if data[i] != 0xFF: i += 1; continue
        marker = data[i + 1]
        if marker in (0xC0, 0xC1, 0xC2):
            h, w = struct.unpack('>HH', data[i + 5:i + 9]); return w, h
        i += 2 + struct.unpack('>H', data[i + 2:i + 4])[0]
    return None

root = Path(__file__).resolve().parent.parent
sizes = {}
for p in sorted(list(root.glob('case-studies/**/*.jpg')) + list(root.glob('case-studies/**/*.png')) + list(root.glob('videos/*.jpg'))):
    s = size(p)
    if s: sizes[p.relative_to(root).as_posix()] = list(s)
(root / 'assets' / 'media-sizes.js').write_text('window.MEDIA_SIZES = ' + json.dumps(sizes, separators=(',', ':')) + ';\n')
print(len(sizes), 'images')

"""Zip dist/ for Hostinger with Unix permissions a Linux server can extract:
folders 755 (with the directory flag), files 644. Usage: python scripts/make_zip.py OUT.zip"""
import os, sys, time, zipfile

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "dist")
out = sys.argv[1]
files, dirs = [], set()
for base, ds, fs in os.walk(ROOT):
    rel = os.path.relpath(base, ROOT).replace("\\", "/")
    if rel != ".":
        dirs.add(rel + "/")
    files += [(os.path.join(base, f), (f if rel == "." else f"{rel}/{f}")) for f in fs]
now = time.localtime()[:6]
with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
    for d in sorted(dirs):
        zi = zipfile.ZipInfo(d, date_time=now); zi.create_system = 3
        zi.external_attr = (0o40755 << 16) | 0x10
        z.writestr(zi, "")
    for src, name in sorted(files, key=lambda x: x[1]):
        zi = zipfile.ZipInfo(name, date_time=now); zi.create_system = 3
        zi.external_attr = 0o100644 << 16; zi.compress_type = zipfile.ZIP_DEFLATED
        with open(src, "rb") as fh:
            z.writestr(zi, fh.read())
print(out, len(files), "files", len(dirs), "folders")

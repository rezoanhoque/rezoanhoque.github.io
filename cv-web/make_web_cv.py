r"""Website copy of the master CV with no journal review statuses (owner request, 2026-10-19).
The master CV is untouched. Usage: python make_web_cv.py MASTER.tex OUT.tex"""
import re
import sys

lines = open(sys.argv[1], encoding="utf-8").read().splitlines()
status = re.compile(r"^(R\\&R,|Under review at|Major revision)")
out = []
for ln in lines:
    if status.match(ln.strip()):
        # drop the status line and the line break that led into it
        if out and out[-1].rstrip().endswith("\\\\"):
            out[-1] = out[-1].rstrip()[:-2]
        continue
    out.append(ln)
t = "\n".join(out) + "\n"

# one "Working Papers" section instead of "Papers Under Review" + "Working Papers"
t = t.replace(r"\section{Papers Under Review}", r"\section{Working Papers}", 1)
second = re.search(r"%=+ WORKING PAPERS =+\n\\section\{Working Papers\}\n", t)
if second:
    t = t[: second.start()] + "\\gap\n" + t[second.end():]

# the FMA 2026 meeting has taken place
t = t.replace("Accepted for presentation at the FMA 2026 Annual Meeting.", "Presented at the FMA 2026 Annual Meeting.")
t = t.replace(
    r"\textit{Subsidies as Attention Shocks and Their Impact on Insider Activity} (accepted).",
    r"\textit{Subsidies as Attention Shocks and Their Impact on Insider Activity}.",
)

open(sys.argv[2], "w", encoding="utf-8").write(t)
for w in [r"R\&R", "Under review", "Major revision", r"\section{Working Papers}", "Presented at the FMA", "(accepted)"]:
    print(f"{w}: {t.count(w)}")

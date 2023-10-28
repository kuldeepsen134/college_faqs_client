import re

with open("index.html", "r", encoding="utf-8") as f:
    content = "".join(f.readlines())

stripped = re.sub('<!--?(.*?)-->', '', content,  flags=re.DOTALL)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(stripped)

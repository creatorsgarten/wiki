import { globbySync } from "globby";
import matter from "gray-matter";
import prettier from "prettier";
import { dump } from "js-yaml";
import fs from "fs";

for (const file of globbySync("wiki/**/*.md")) {
  const data = matter.read(file);
  if (JSON.stringify(data.data) === "{}") continue;
  const output = [
    "---",
    prettier
      .format(dump(data.data, { lineWidth: -1 }), { parser: "yaml" })
      .trimEnd(),
    "---",
    data.content.replace(/\r\n/g, "\n"),
  ].join("\n");
  fs.writeFileSync(file, output);
}

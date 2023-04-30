import { globbySync } from 'globby'
import matter from 'gray-matter'
import prettier from 'prettier'
import { dump } from 'js-yaml'
import fs from 'fs'

function transformFrontMatter(data, file) {
  // You can programmatically process the front matter here.
  // This is useful for migrating the structure of the front matter across the site.

  // /* 2023-04-30: Remove the top-level keys of event pages after moving them into a nested object. */
  // if (file.startsWith('wiki/Events/') && data.event) {
  //   delete data.name
  //   delete data.location
  //   delete data.date
  //   delete data.endDate
  //   delete data.site
  //   delete data.hosts
  // }

  return data
}

for (const file of globbySync('wiki/**/*.md')) {
  const data = matter.read(file)
  if (JSON.stringify(data.data) === '{}') continue
  const output = [
    '---',
    prettier
      .format(dump(transformFrontMatter(data.data, file), { lineWidth: -1 }), {
        parser: 'yaml',
      })
      .trimEnd(),
    '---',
    data.content.replace(/\r\n/g, '\n'),
  ].join('\n')
  fs.writeFileSync(file, output)
}

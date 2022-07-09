import glob from 'glob';
import fs from 'fs';
import matter from 'gray-matter';

const pages = {};

for (const file of glob.sync('**/*.md', { cwd: 'wiki' }).sort()) {
  const slug = file.replace(/\.md$/, '');
  const meta = matter(fs.readFileSync(`wiki/${file}`, 'utf8'));
  const name = meta.data.name || undefined;
  pages[slug] = { name };
  console.log('Added', slug, name);
}

const index = { pages };
fs.writeFileSync('index.json', JSON.stringify(index, null, 2));

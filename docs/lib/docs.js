import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

let docsDirectory = join(process.cwd(), 'docs');

export function getDocBySlug(slug, subDirectory = '') {
  const realSlug = slug.replace(/\.md$/, '');

  const fullPath = join(docsDirectory, subDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export function getAllDocs() {
  const slugs = fs.readdirSync(docsDirectory);
  const docs = slugs.filter(f => f.indexOf('.md') > -1).map((slug) => getDocBySlug(slug));

  return docs;
}

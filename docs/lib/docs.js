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

function generateDocFiles() {
  ['array', 'collection', 'date', 'function', 'lang', 'math', 'number', 'object', 'seq', 'string', 'util']
    .forEach((dir) => {
      // const dir = 'collection';
      let directory = join('D:\\Projects\\NPM Packages\\alt-lodash', 'src', dir);

      const files = fs.readdirSync(directory);

      const existingFiles = [
        "index.ts",
        "chunk.ts",
        "concat.ts",
        "compact.ts",
        "difference.ts",
        "join.ts",
        "chunk.ts",
        "last.ts",
        "countBy.ts",
        "debounce.ts"
      ];

      files.forEach(fileName => {
        if (fileName !== "interface" && fileName.indexOf("_") !== 0) {
          const file = join(directory, fileName);
          const fileContents = fs.readFileSync(file, 'utf8');

          if (!(existingFiles.find(f => fileName === f))) {
            const custFileName = fileName.split(".");

            const description = fileContents.match(/^\s*\*\s*(.*)$/m)[1];
            const exampleContent = fileContents.match(/@example\s*([\s\S]*?)(?=\*\s*\/)/)[1].trim().replace(/^\s*\*+\s?/gm, '');

            console.log("fileName: ", fileName);

            //  Params - Start
            const paramsRegex = /@param\s+({.*?})?\s*(\S+)\s+-\s+(.*)/g;
            let paramsMatch;
            const newParams = [];

            while ((paramsMatch = paramsRegex.exec(fileContents)) !== null) {
              const type = paramsMatch[1] || '';
              const name = paramsMatch[2];
              const description = paramsMatch[3];
              newParams.push({ type, name, description });
            };
            //  Params - End


            //  Returns - Start
            const returnsRegex = /@returns\s+({.*?})?\s*(\S+)\s+-\s+(.*)/g;
            let returnsMatch;
            const returnsParams = [];

            while ((returnsMatch = returnsRegex.exec(fileContents)) !== null) {
              const type = returnsMatch[1] || '';
              const name = returnsMatch[2];
              const description = returnsMatch[3];
              returnsParams.push({ type, name, description });
            }
            //  @Returns - End

            fs.exists(`docs/${dir}/${custFileName[0]}.md`, (isExists) => {
              if (!isExists) {
                fs.appendFile(`docs/${dir}/${custFileName[0]}.md`,
                  [
                    "---",
                    `title: ${custFileName[0]}`,
                    "definition: ",
                    `description: ${description}`,
                    "---",
                    "\n",
                    "#### Arguments",
                    "\n",
                    "```bash",
                    newParams.map(m => `${m.type} ${m.name} - ${m.description}`).join("\n"),
                    "```",
                    "\n",
                    "#### Returns",
                    "\n",
                    "```bash",
                    returnsParams.map(m => `${m.name} - ${m.description}`).join("\n"),
                    "```",
                    "\n",
                    "#### Example",
                    "\n",
                    "```ts",
                    exampleContent,
                    "```",
                  ].join("\n")
                  , function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                  });
              }
            })
          }
        }
      });
    });
}

export function getAllDocs() {
  //  generateDocFiles();

  const slugs = fs.readdirSync(docsDirectory);
  const docs = slugs.filter(f => f.indexOf('.md') > -1).map((slug) => getDocBySlug(slug));

  return docs;
}

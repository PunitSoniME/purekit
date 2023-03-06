import Layout from '~/components/Layout';
import { getAllDocs, getDocBySlug } from '~/lib/docs';
import markdownToHtml from '~/lib/markdown';
import routes from '../utils/routes';

let parent = '';
let allDocs = [];

routes.forEach(route => {

  parent = route.id;
  allDocs.push(`${parent}/index`);

  route.options.forEach(option => {
    allDocs.push(`${parent}/${option.label}`);
  })
})

export default function Doc({ meta, content }) {
  return <Layout meta={meta}>{content}</Layout>;
}

const componentHeader = (title) => `<div id=${title} class="invisible h-0">${title}</div>`;  // `<div id=${title} class="border-l-8 bg-indigo-100 border-l-indigo-500 w-full px-6 mb-6 py-4 rounded text-md md:text-lg font-bold scroll-top">${title}</div>`;

export async function getStaticProps() {
  const mainIndexDoc = getDocBySlug('home');
  let content = [await markdownToHtml(mainIndexDoc.content || '')];

  let i = 0;
  for await (let doc of allDocs) {
    const splittedData = doc.split('/');
    const methodDoc = getDocBySlug(splittedData[1], splittedData[0]);
    // content.push(`<div class="px-2 pb-0 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-100 border-b-2 border-slate-100'}">` + (splittedData[1] !== 'index' ? componentHeader(splittedData[1]) : ' ') + await markdownToHtml(methodDoc.content || '') + '</div>');

    content.push(splittedData[1] !== 'index' ? componentHeader(splittedData[1]) : ' ');

    if (methodDoc.meta.definition) {
      content.push(`<div class='rounded-l-md border-violet-200 border-l-8 bg-violet-50 border-l-violet-400 tracking-wide font-semibold p-4 text-violet-700'>${methodDoc.meta.definition}</div>`);
      content.push(await markdownToHtml("> <small class='custom-code'>" + methodDoc.meta.description + "</small>" || ''));
    }

    content.push(await markdownToHtml(methodDoc.content || '') + "<hr/>");
    ++i;
  }

  return {
    props: {
      ...mainIndexDoc,
      content: content.join("")
    }
  };
}

export async function getStaticPaths() {
  const docs = getAllDocs();

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug
        }
      };
    }),
    fallback: 'blocking'
  };
}

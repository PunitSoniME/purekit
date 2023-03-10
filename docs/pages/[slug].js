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
  let content = [];
  content.push("<div class='mx-2 bg-slate-50 rounded-t'>");
  content.push(await markdownToHtml(mainIndexDoc.content || ''));
  content.push("</div>");

  let i = 0;
  for await (let doc of allDocs) {
    const splittedData = doc.split('/');
    const methodDoc = getDocBySlug(splittedData[1], splittedData[0]);
    // content.push(`<div class="px-2 pb-0 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-100 border-b-2 border-slate-100'}">` + (splittedData[1] !== 'index' ? componentHeader(splittedData[1]) : ' ') + await markdownToHtml(methodDoc.content || '') + '</div>');

    if (splittedData[1] !== 'index') {
      content.push(componentHeader(splittedData[1]));
    }

    if (methodDoc.meta.definition) {
      content.push(`<div class="mx-2 bg-white mb-4">`);
      content.push(`<div class='border-violet-200 border-l-8 bg-violet-500 border-l-violet-900 text-white tracking-wide font-semibold p-4'>${methodDoc.meta.definition}</div>`);
      content.push(await markdownToHtml("<small class='pt-4 px-2 md:px-4 font-normal custom-code'>" + methodDoc.meta.description + "</small>" || ''));
    }

    if (splittedData[1] === 'index') {
      content.push("<div class='not-prose'>");
      content.push(`<h2 id=${methodDoc.meta.title} class="inline-block font-bold my-8 pb-1 mx-4 rounded-b-md border-b-4 text-2xl md:text-4xl border-violet-600 text-violet-600">`);
      content.push(await markdownToHtml(methodDoc.meta.description || ''))
      content.push("</h2>");
      content.push("</div>");
    } else {
      content.push(await markdownToHtml(methodDoc.content || ''));
      content.push("</div>");
    }

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

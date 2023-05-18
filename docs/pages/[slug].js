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

const componentHeader = (title) => `<div id=${title} class="invisible h-0">${title}</div>`;  // `<div id=${title} class="border-l-8 bg-violet-100 border-l-violet-500 w-full px-6 mb-6 py-4 rounded text-md md:text-lg font-bold scroll-top">${title}</div>`;

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

    if (splittedData[1] !== 'index') {
      content.push(componentHeader(splittedData[1]));
    }

    content.push('<div class="custom-block">');

    if (methodDoc.meta.definition) {
      content.push(`<div class='definition'>${methodDoc.meta.definition}</div>`);
      content.push(await markdownToHtml("<small class='custom-code'>" + methodDoc.meta.description + "</small>" || ''));
    }

    if (splittedData[1] === 'index') {
      content.push("<div class='not-prose bg-slate-200 capitalize'>");
      content.push(`<h2 id=${methodDoc.meta.title} class="section-title">`);
      content.push(await markdownToHtml(methodDoc.meta.title || ''));
      content.push("</h2>");
      content.push("</div>");
    } else {
      content.push("<div class='content'>");
      content.push(await markdownToHtml(methodDoc.content || ''));
      content.push("</div>");
    }

    content.push("</div>");

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

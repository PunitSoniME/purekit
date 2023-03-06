import { Fragment, useState } from 'react';
import Head from 'next/head';
import { useRouter } from "next/router";
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import routes from '../utils/routes';

export default function Layout({ children, meta: pageMeta }) {
  const router = useRouter();

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [activeMethod, setActiveMethod] = useState(router.asPath);

  const meta = {
    title: 'alt-lodash',
    description:
      'Example using Prism / Markdown with Next.js including switching syntax highlighting themes.',
    cardImage:
      'https://og-image.now.sh/**Prism**%20with%20Next.js.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg',
    ...pageMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          as="script"
        />
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`}
          rel="stylesheet"
        />
      </Head>


      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}

          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">Methods</h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      {/* <h3 className="sr-only">Categories</h3>
                      <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                        {subCategories.map((category) => (
                          <li key={category.name}>
                            <a href={category.href} className="block px-2 py-3">
                              {category.name}
                            </a>
                          </li>
                        ))}
                      </ul> */}

                      {routes.map((section) => (
                        <Disclosure as="div" defaultOpen={true} key={section.id} className="border-t border-gray-200 px-4 py-6">
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">{section.name}</span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                    ) : (
                                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <div key={option.value}>
                                      <div
                                        className="ml-3 text-sm text-gray-600 hover:cursor-pointer hover:underline"
                                        onClick={() => {
                                          location.hash = option.label;
                                        }}
                                      >
                                        {option.label}
                                      </div>
                                    </div>

                                    // <div key={option.value} className="flex items-center">

                                    //   <label
                                    //     htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    //     className="ml-3 min-w-0 flex-1 text-gray-500"
                                    //   >
                                    //     {option.label}
                                    //   </label>
                                    // </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 px-4">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 pt-4">alt-lodash</h1>

              <div className="flex items-center">
                <button type="button" className="-m-2 ml-5 p-2 text-gray-700 hover:text-gray-900 sm:ml-7">
                  <span>Github</span>
                  {/* <Squares2X2Icon className="h-5 w-5" aria-hidden="true" /> */}
                </button>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Methods</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block pl-4">

                  {routes.map((section) => (
                    <Disclosure as="div" defaultOpen={true} key={section.id} className="border-b border-gray-200 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option) => (
                                <div key={option.value}>
                                  <div
                                    className="ml-3 text-sm text-gray-600 hover:cursor-pointer hover:underline"
                                    onClick={() => {
                                      location.hash = option.label;
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>

                {/* Product grid */}
                <div className="lg:col-span-3">
                  {/* Replace with your content */}
                  {/* <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full" /> */}

                  <article
                    className="prose lg:prose-xl max-w-none article-custom-scroll py-2 scroll-smooth"
                    dangerouslySetInnerHTML={{ __html: children }}
                  />

                  {/* /End replace */}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* <nav className='sticky top-0 bg-gray-200 z-50 shadow-lg'>
        <div className="flex justify-between items-center py-5 px-2 md:px-8 mx-2">
          <Link href="/">
            <a className="no-underline font-bold text-2xl">
              <h1>{meta.title}</h1>
            </a>
          </Link>

          <ul className="flex justify-between items-center space-x-4">
            <li>
              <div className="inline-block relative w-32">

                <select
                  onChange={(e) => setTheme(e.target.value)}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="okaidia">Okaidia</option>
                  <option value="tomorrow">Tomorrow</option>
                  <option value="coy">Coy</option>
                  <option value="funky">Funky</option>
                </select>
              </div>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/punitsonime/alt-lodash"
                className="no-underline font-semibold text-gray-700"
              >
                Source
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="skip">
        <div className="custom-grid">
          <div className="sidebar bg-white">
            <ul className='divide-y'>
              {
                routes.map((route, index) => (
                  <li key={`route-${index}`}
                    className={[
                      'px-4 py-2 border-t-slate-300',
                      route.redirect === false ? 'bg-gray-800 text-white font-semibold' :
                        (activeMethod === `/${router.query.slug}#${route.title}` ? 'bg-indigo-100 border-l-indigo-600 border-l-4' : 'bg-gray-100 hover:bg-indigo-100 cursor-pointer')
                    ].join(" ")}
                    onClick={() => {
                      if (route.redirect === true) {
                        location.hash = route.title;
                        setActiveMethod(`/${router.query.slug}#${route.title}`);
                      }
                    }}>{route.title}
                  </li>
                ))
              }
            </ul>
          </div>
          <article
            className="prose lg:prose-xl max-w-none article-custom-scroll px-2 py-2 scroll-smooth"
            dangerouslySetInnerHTML={{ __html: children }}
          />
        </div>
      </div> */}
    </>
  );
}

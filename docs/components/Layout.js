import { Fragment, useState } from 'react';
import Head from 'next/head';
import { useRouter } from "next/router";
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import routes from '../utils/routes';
import SearchComponent from './SearchComponent';

const NoMethodsFound = () => {
  return <div className='block font-semibold text-center py-4 text-md text-gray-600'>
    No method(s) found !
  </div>
}

export default function Layout({ children, meta: pageMeta }) {
  const router = useRouter();
  const [clonedRoutes, setClonedRoutes] = useState({
    filter: '',
    routes: [...routes]
  });

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const meta = {
    title: 'purekit',
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


      <div className="bg-slate-200">
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
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4 py-4">
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
                    <form className="border-t border-gray-200">

                      <SearchComponent
                        value={clonedRoutes.filter}
                        onChange={(value) => {
                          let tempClonedRoutes = [];
                          const valueInLowercase = value.toLowerCase();

                          routes.forEach(f => {
                            const filteredRoutes = f.options.filter(f => f.labelInLowercase.startsWith(valueInLowercase));
                            if (filteredRoutes.length > 0) {
                              tempClonedRoutes.push({ ...f, options: [...filteredRoutes] });
                            }
                          })

                          setClonedRoutes({
                            filter: value,
                            routes: [...tempClonedRoutes]
                          });
                        }} />

                      {
                        clonedRoutes.routes.length > 0 ?
                          clonedRoutes.routes.map((section) => (
                            <Disclosure as="div" defaultOpen={true} key={section.id} className="border-t border-gray-200 px-4 py-6">
                              {({ open }) => (
                                <>
                                  <h3 className="-mx-2 -my-3 flow-root">
                                    <Disclosure.Button className="px-4 flex w-full items-center justify-between bg-white py-3 text-gray-400 hover:text-gray-500">
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
                                    <div className='divide-y'>
                                      {section.options.map((option) => (
                                        <a
                                          key={option.label}
                                          href={`/home#${option.label}`}
                                          className={`block py-3 pl-6 text-sm ${router.asPath === `/home#${option.label}` ? "bg-violet-500 text-white font-semibold" : "text-gray-600 hover:cursor-pointer hover:bg-violet-200"}`}
                                          onClick={(e) => {
                                            e.preventDefault();
                                            router.push(`/home#${option.label}`);
                                            setMobileFiltersOpen(false);
                                          }}
                                        >
                                          {option.label}
                                        </a>
                                      ))}
                                    </div>
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          ))
                          : <NoMethodsFound />
                      }
                    </form>

                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto">
            <div className="flex justify-between border-b border-gray-200 bg-slate-50 pb-6 px-4">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 pt-4">purekit</h1>

              <div className="flex items-center justify-center pt-6">
                <button type="button" className="-m-2 ml-5 p-2 text-gray-700 hover:text-gray-900 sm:ml-7">
                  <a href="https://github.com/punitsonime/purekit" target="_blank" className='font-bold hover:underline'>Github</a>
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
              <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-[250px_1fr]">
                {/* Filters */}
                <form className="hidden lg:block bg-slate-50 custom-sidebar">

                  <SearchComponent
                    value={clonedRoutes.filter}
                    onChange={(value) => {
                      let tempClonedRoutes = [];
                      const valueInLowercase = value.toLowerCase();

                      routes.forEach(f => {
                        const filteredRoutes = f.options.filter(f => f.labelInLowercase.startsWith(valueInLowercase));
                        if (filteredRoutes.length > 0) {
                          tempClonedRoutes.push({ ...f, options: [...filteredRoutes] });
                        }
                      })

                      setClonedRoutes({
                        filter: value,
                        routes: [...tempClonedRoutes]
                      });

                    }} />

                  {
                    clonedRoutes.routes.length > 0 ?
                      clonedRoutes.routes.map((section, index) => (
                        <Disclosure as="div" defaultOpen={true} key={section.id} className={`divide-slate-400/25 border-gray-200 py-6 ${index > 0 ? 'border-t-2' : ''}`}>
                          {({ open }) => (
                            <>
                              <h3 className="-my-3 flow-root">
                                <Disclosure.Button className="px-4 flex w-full items-center justify-between bg-slate-50 py-3 text-sm text-gray-400 hover:text-gray-500">
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
                                <div className='divide-y'>
                                  {section.options.map((option) => (
                                    <a
                                      key={option.label}
                                      href={`/home#${option.label}`}
                                      className={`block py-3 pl-6 text-sm ${router.asPath === `/home#${option.label}` ? "bg-violet-500 text-white font-semibold" : "text-gray-600 hover:cursor-pointer hover:bg-violet-200"}`}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        router.push(`/home#${option.label}`);
                                      }}
                                    >
                                      {option.label}
                                    </a>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))
                      : <NoMethodsFound />
                  }
                </form>

                {/* Product grid */}
                {/* Replace with your content */}
                {/* <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full" /> */}

                <article
                  className="prose lg:prose-xl max-w-none article-custom-scroll py-2 scroll-smooth"
                  dangerouslySetInnerHTML={{ __html: children }}
                />

                {/* /End replace */}
              </div>
            </section>
          </main>
        </div>
      </div>

    </>
  );
}

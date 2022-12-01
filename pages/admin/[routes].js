/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useRouter } from "next/router";
import Dashboard from "../../components/Dashboard";
import { useEffect, useState, Fragment } from "react";
import Projects from "../../components/Projects";
import Articles from "../../components/Articles";
import Tasks from "../../components/Tasks";
import Finance from "../../components/Finance";
import GitHub from "../../components/GitHub";
import { getSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Admin() {
  const [open, setOpen] = useState(false);
  const openSideNav = () => {
    setOpen(!open);
  };
  const components = [
    {
      slug: "dashboard",
      label: "Dashboard",
      component: <Dashboard />,
    },
    {
      slug: "projects",
      label: "Projects",
      component: <Projects />,
    },
    {
      slug: "articles",
      label: "Articles",
      component: <Articles />,
    },
    {
      slug: "tasks",
      label: "Tasks",
      component: <Tasks />,
    },
    {
      slug: "finance",
      label: "Finance",
      component: <Finance />,
    },
    {
      slug: "github",
      label: "GitHub",
      component: <GitHub />,
    },
  ];
  const router = useRouter();
  const currentPath = router.query.routes;
  console.log(currentPath);

  useEffect(() => {
    const foundComponent = components.find((cmp) => cmp.slug === currentPath);
    if (currentPath && !foundComponent) {
      router.push("/404");
    }
  }, [router]);
  const cmp = components.find((cmp) => cmp.slug === currentPath);
  const logOut = () => {
    signOut();
  };
  return (
    <div>
      <Head>
        <title>Admin {cmp && cmp.label} - The Coding Montana</title>
        <meta name="description" content="The Coding Montana - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <aside className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
          <div>
            <div className="mt-8 text-center">
              <div className="m-auto h-10 w-10 border-2 border-primary rounded-full object-cover lg:h-28 lg:w-28">
                <Image
                  src="/images/the-coding-montana.png"
                  layout="responsive"
                  height={1080}
                  width={1080}
                  alt="the-coding-montana"
                />
              </div>
              <h5 className="mt-2 hidden text-lg font-semibold text-gray-600 lg:block">
                Coding Montana
              </h5>
              <span className="hidden text-gray-400 lg:block">Admin</span>
            </div>

            <ul className="mt-8 space-y-2 tracking-wide">
              <li>
                <Link href="/admin/dashboard">
                  <a
                    aria-label="dashboard"
                    className={
                      currentPath === "dashboard"
                        ? "relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                        : "group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                    }
                  >
                    <svg
                      className="-ml-1 h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                        className="fill-current text-gray-600 group-hover:text-primary"
                      ></path>
                      <path
                        d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                        className="fill-current text-gray-600 group-hover:text-primary"
                      ></path>
                      <path
                        d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                        className="fill-current text-gray-600 group-hover:text-primary"
                      ></path>
                    </svg>
                    <span className="-mr-1 font-medium">Dashboard</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/admin/projects">
                  <a
                    className={
                      currentPath === "projects"
                        ? "relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                        : "group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        className="fill-current text-gray-600 group-hover:text-primary"
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                        clipRule="evenodd"
                      />
                      <path
                        className="fill-current text-gray-600 group-hover:text-primary"
                        d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                      />
                    </svg>
                    <span className="group-hover:text-primary">Projects</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/admin/articles">
                  <a
                    className={
                      currentPath === "articles"
                        ? "relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                        : "group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        className="fill-current text-gray-600 group-hover:text-primary"
                        fillRule="evenodd"
                        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                        clipRule="evenodd"
                      />
                      <path
                        className="fill-current text-gray-600 group-hover:text-primary"
                        d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                      />
                    </svg>
                    <span className="group-hover:text-primary">Articles</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/admin/finance">
                  <a
                    className={
                      currentPath === "finance"
                        ? "relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                        : "group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        className="fill-current text-gray-600 group-hover:text-primary"
                        d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                      />
                      <path
                        className="fill-current text-gray-600 group-hover:text-primary"
                        fillRule="evenodd"
                        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="group-hover:text-primary">Finance</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/admin/github">
                  <a
                    className={
                      currentPath === "github"
                        ? "relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                        : "group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 480 512"
                      className="h-5 w-5"
                    >
                      <path
                        className="fill-current text-gray-600 group-hover:text-primary"
                        d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"
                      />
                    </svg>
                    <span className="group-hover:text-primary">GitHub</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4">
            <button
              onClick={logOut}
              className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span className="group-hover:text-gray-700">Logout</span>
            </button>
          </div>
        </aside>
        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
          {/* Mobile menu */}
          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setOpen}
            >
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
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                    <div className="flex px-4 pt-5 pb-2">
                      <button
                        type="button"
                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="space-y-6 py-6 px-4">
                      <div className="mt-8 text-center">
                        <div className="m-auto h-24 w-24 border-2 border-primary rounded-full object-cover lg:h-28 lg:w-28">
                          <Image
                            src="/images/the-coding-montana.png"
                            layout="responsive"
                            height={1080}
                            width={1080}
                            alt="the-coding-montana"
                          />
                        </div>
                        <h5 className="mt-2 text-lg font-semibold text-gray-600 lg:block">
                          Coding Montana
                        </h5>
                        <span className="text-gray-400 lg:block">Admin</span>
                      </div>
                      <ul className="mt-8 space-y-2 tracking-wide">
                        <li>
                          <Link href="/admin/dashboard">
                            <a
                              aria-label="dashboard"
                              className={
                                currentPath === "dashboard"
                                  ? "relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                                  : "group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                              }
                            >
                              <svg
                                className="-ml-1 h-6 w-6"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                                  className="fill-current text-gray-600 group-hover:text-primary"
                                ></path>
                                <path
                                  d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                                  className="fill-current text-gray-600 group-hover:text-primary"
                                ></path>
                                <path
                                  d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                                  className="fill-current text-gray-600 group-hover:text-primary"
                                ></path>
                              </svg>
                              <span className="-mr-1 font-medium">
                                Dashboard
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/admin/projects">
                            <a
                              className={
                                currentPath === "projects"
                                  ? "relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                                  : "group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  className="fill-current text-gray-600 group-hover:text-primary"
                                  fillRule="evenodd"
                                  d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                                  clipRule="evenodd"
                                />
                                <path
                                  className="fill-current text-gray-600 group-hover:text-primary"
                                  d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                                />
                              </svg>
                              <span className="group-hover:text-primary">
                                Projects
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/admin/articles">
                            <a
                              className={
                                currentPath === "articles"
                                  ? "relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                                  : "group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  className="fill-current text-gray-600 group-hover:text-primary"
                                  fillRule="evenodd"
                                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                                  clipRule="evenodd"
                                />
                                <path
                                  className="fill-current text-gray-600 group-hover:text-primary"
                                  d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                                />
                              </svg>
                              <span className="group-hover:text-primary">
                                Articles
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/admin/finance">
                            <a
                              className={
                                currentPath === "finance"
                                  ? "relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                                  : "group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  className="fill-current text-gray-600 group-hover:text-primary"
                                  d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                                />
                                <path
                                  className="fill-current text-gray-600 group-hover:text-primary"
                                  fillRule="evenodd"
                                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="group-hover:text-primary">
                                Finance
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/admin/github">
                            <a
                              className={
                                currentPath === "github"
                                  ? "relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                                  : "group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 480 512"
                                className="h-5 w-5"
                              >
                                <path
                                  className="fill-current text-gray-600 group-hover:text-primary"
                                  d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"
                                />
                              </svg>
                              <span className="group-hover:text-primary">
                                GitHub
                              </span>
                            </a>
                          </Link>
                        </li>
                      </ul>
                      <div className="-mx-6 absolute flex items-center justify-between bottom-0 px-6 pt-4">
                        <button
                          onClick={logOut}
                          className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                          <span className="group-hover:text-gray-700">
                            Logout
                          </span>
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
          <div className="sticky top-0 h-16 border-b bg-white lg:py-2.5">
            <div className="flex items-center justify-between space-x-4 px-6 2xl:container">
              <h5
                hidden
                className="text-2xl capitalize font-medium text-gray-600 lg:block"
              >
                {cmp && cmp.component}
              </h5>
              <button
                className="-mr-2 h-16 w-12 border-r lg:hidden"
                onClick={openSideNav}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-auto h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div className="flex space-x-4">
                <button
                  aria-label="chat"
                  className="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </button>
                <button
                  aria-label="notification"
                  className="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto h-5 w-5 text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="px-6 pt-6 2xl:container">
            <h1 className="my-2">👋Welcome Coding Montana ✌️😎</h1>
            {cmp && cmp.component}
          </div>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (!session)
    return {
      redirect: {
        destination: "/admin/auth/signin",
      },
    };
  return {
    props: {
      session,
    },
  };
};

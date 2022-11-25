/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useRouter } from "next/router";
import AdminHeader from "../../components/AdminHeader";
import Dashboard from "../../components/Dashboard";
import { useEffect, useState } from "react";
import Projects from "../../components/Projects";
import Articles from "../../components/Articles";
import Tasks from "../../components/Tasks";
import { getSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function Admin() {
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
                        className="dark:fill-slate-600 fill-current text-cyan-400"
                      ></path>
                      <path
                        d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                        className="fill-current text-cyan-200 group-hover:text-cyan-300"
                      ></path>
                      <path
                        d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                        className="fill-current group-hover:text-sky-300"
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
                        className="fill-current text-gray-300 group-hover:text-cyan-300"
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                        clipRule="evenodd"
                      />
                      <path
                        className="fill-current text-gray-600 group-hover:text-cyan-600"
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
                        className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                        fillRule="evenodd"
                        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                        clipRule="evenodd"
                      />
                      <path
                        className="fill-current text-gray-300 group-hover:text-cyan-300"
                        d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                      />
                    </svg>
                    <span className="group-hover:text-primary">Articles</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/admin/Finance">
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
                      className="fill-current text-gray-300 group-hover:text-cyan-300"
                      d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                    />
                    <path
                      className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                      fillRule="evenodd"
                      d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="group-hover:text-primary">Finance</span>
                </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4">
            <button className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
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
          <div className="sticky top-0 h-16 border-b bg-white dark:bg-gray-800 lg:py-2.5">
            <div className="flex items-center justify-between space-x-4 px-6 2xl:container">
              <h5
                hidden
                className="text-2xl font-medium text-gray-600 lg:block"
              >
                Dashboard
              </h5>
              <button className="-mr-2 h-16 w-12 border-r lg:hidden dark:border-gray-700">
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
                <div hidden className="md:block">
                  <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                    <span className="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3">
                      <svg
                        xmlns="http://ww50w3.org/2000/svg"
                        className="w-4 fill-current"
                        viewBox="0 0 35.997 36.004"
                      >
                        <path
                          id="Icon_awesome-search"
                          data-name="search"
                          d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                        ></path>
                      </svg>
                    </span>
                    <input
                      type="search"
                      name="leadingIcon"
                      id="leadingIcon"
                      placeholder="Search here"
                      className="outline-none w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 transition focus:border-cyan-300"
                    />
                  </div>
                </div>
                <button
                  aria-label="search"
                  className="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 md:hidden"
                >
                  <svg
                    xmlns="http://ww50w3.org/2000/svg"
                    className="mx-auto w-4 fill-current text-gray-600"
                    viewBox="0 0 35.997 36.004"
                  >
                    <path
                      id="Icon_awesome-search"
                      data-name="search"
                      d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                    ></path>
                  </svg>
                </button>
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
            <div className="flex h-[80vh] items-center justify-center rounded-xl border-2 border-dashed border-gray-300">
              <div>{cmp && cmp.component}</div>
            </div>
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

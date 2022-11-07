/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useRouter } from "next/router";
import AdminHeader from "../../components/AdminHeader";
import Dashboard from "../../components/Dashboard";
import { useEffect, useState } from "react";
import Projects from "../../components/Projects";
import Articles from "../../components/Articles";
import Tasks from "../../components/Tasks";

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

  useEffect(() => {
    const foundComponent = components.find((cmp) => cmp.slug === currentPath);
    if (currentPath && !foundComponent) {
      router.push("/404");
    }
  }, [router]);
  const cmp = components.find((cmp) => cmp.slug === currentPath)
  return (
    <div>
      <Head>
        <title>Admin {cmp && cmp.label} - The Coding Montana</title>
        <meta name="description" content="The Coding Montana - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols-9">
        <AdminHeader />
        <div>{cmp && cmp.component}</div>
      </main>
    </div>
  );
}
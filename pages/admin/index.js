import Head from "next/head";
import AdminHeader from "../../components/AdminHeader";

export default function index() {
  return (
    <div>
      <Head>
        <title>Admin Area - The Coding Montana</title>
        <meta name="description" content="The Coding Montana - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols-9">
        <AdminHeader />
      </main>
    </div>
  )
}

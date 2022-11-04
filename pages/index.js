import Head from "next/head";
import Image from "next/image";
import Links from "../components/Links";

export default function Home() {
  return (
    <main>
      <Head>
        <title>The Coding Montana</title>
        <meta name="description" content="Homepage - The Coding Montana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="p-3 sm:mx-auto md:my-4 xl:my-0 md:grid md:grid-cols-2 sm:my-0 overflow-hidden">
        <div>
          <Image
            src="/images/the-coding-montana.png"
            layout="responsive"
            height={1080}
            width={1080}
            alt="the-coding-montana"
          />
        </div>
        <Links />
      </section>
    </main>
  )
}

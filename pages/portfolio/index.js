import Head from "next/head";
import About from "../../components/About";
import Contacts from "../../components/Contacts";
import Expertise from "../../components/Expertise";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import { ToastContainer } from 'react-toastify';

export default function Portfolio() {
  return (
    <main>
      <Head>
        <title>Portfolio - The Coding Montana</title>
        <meta name="description" content="The Coding Montana - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer />
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}

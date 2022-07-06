import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import About from "../components/About";
import AnotherGallery from "../components/AnotherGallery";
import Slider from "../components/Slider";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { useAppSelector } from "../context/hooks/context.hook";
import Modal from "../modal/Modal";

const Home: NextPage = () => {
  const { open, element } = useAppSelector((state) => state.modal);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Alexandre Malet's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <Navbar />
        <Header />
        <Gallery />
        <About />
        <AnotherGallery />
        <Slider />
        <Skills />
        <Contact />
      </div>
      <Footer />
      {open ? <Modal child={element} /> : <></>}
    </div>
  );
};

export default Home;

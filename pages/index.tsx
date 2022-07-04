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

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Alexandre Malet's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Gallery />
      <About />
      <AnotherGallery />
      <Slider />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;

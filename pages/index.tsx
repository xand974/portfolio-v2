import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import About from "../components/About";
import AnotherGallery from "../components/AnotherGallery";
import Slider from "../components/Slider";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { useAppSelector } from "../hooks/context.hook";
import Modal from "../modal/Modal";
import { useState, useRef, useEffect } from "react";
import Loading from "../components/Loading";
import { useLocoScroll } from "../hooks/locomotive.hook";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const { open, element } = useAppSelector((state) => state.modal);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(2);
  const intervalRef = useRef<NodeJS.Timer>();

  // const clear = () => {
  //   clearInterval(intervalRef.current);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   intervalRef.current = setInterval(() => {
  //     setTimer((prev) => prev - 1);
  //   }, 1000);
  // }, []);

  // useEffect(() => {
  //   if (timer === 0) clear();
  //   return () => {};
  // }, [timer]);

  // if (loading) return <Loading />;

  return (
    <div className={styles.container}>
      <Head>
        <title>Alexandre Malet</title>
        <meta name="description" content="Alexandre Malet's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Navbar />
        <Header />
        <Gallery />
        <About />
        <AnotherGallery />
        <Slider />
        <Skills />
        <Contact />
        <Footer />
      </Layout>
      {open ? <Modal child={element} /> : <></>}
    </div>
  );
};

export default Home;

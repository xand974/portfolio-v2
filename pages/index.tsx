import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { useAppSelector } from "@/hooks/context.hook";
import Modal from "@/services/modal/Modal";
import { useState, useRef, useEffect } from "react";
import Loading from "@/components/shared/Loading";
import Layout from "@/components/shared/Layout";
import Grid from "@/components/intro/Grid";
import Overview from "@/components/intro/Overview";

const Home: NextPage = () => {
  const { open, element } = useAppSelector((state) => state.modal);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(2);
  const intervalRef = useRef<NodeJS.Timer>();

  const clear = () => {
    clearInterval(intervalRef.current);
    setLoading(false);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) clear();
    return () => {};
  }, [timer]);

  if (loading) return <Loading />;

  return (
    <div className={styles.container}>
      <Head>
        <title>Alexandre Malet</title>
        <meta name="description" content="Alexandre Malet's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout direction="horizontal">
        <div
          className="main"
          data-scroll-container
          data-scroll-direction="horizontal"
        >
          <Grid />
        </div>
        <Overview />
      </Layout>
      {open ? <Modal child={element} /> : <></>}
    </div>
  );
};

export default Home;

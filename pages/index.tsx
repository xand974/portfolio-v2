import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { useState, useRef, useEffect } from "react";
import Loading from "@/components/@shared/Loading";
import Layout from "@/components/@shared/Layout";
import Grid from "@/components/intro/Grid";
import Overview from "@/components/intro/Overview";
import { useAppSelector } from "../hooks/context.hook";

const Home: NextPage = () => {
  const { loading: appLoading } = useAppSelector((state) => state.app);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(4);
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
      <Layout direction="horizontal" enableMobile={true}>
        <div
          className={styles.main}
          data-scroll-container
          data-scroll-direction="horizontal"
        >
          <Grid />
        </div>
      </Layout>
      <Overview />
    </div>
  );
};

export default Home;

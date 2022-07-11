import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { useState, useRef, useEffect } from "react";
import Loading from "@/components/shared/Loading";
import Layout from "@/components/shared/Layout";
import Link from "next/link";

const Home: NextPage = () => {
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
      <Layout>
        <Link href="/project/123">GO TO PROJECTS</Link>
      </Layout>
    </div>
  );
};

export default Home;

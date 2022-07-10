import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { useAppSelector } from "../hooks/context.hook";
import Modal from "../modal/Modal";
import { useState, useRef, useEffect } from "react";
import Loading from "../components/Loading";
import Layout from "../components/Layout";
import Link from "next/link";

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
      <Layout>
        <Link href="/project/123">GO TO PROJECTS</Link>
      </Layout>
      {open ? <Modal child={element} /> : <></>}
    </div>
  );
};

export default Home;

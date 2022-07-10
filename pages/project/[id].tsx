import React from "react";
import About from "../../components/About";
import AnotherGallery from "../../components/AnotherGallery";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Skills from "../../components/Skills";
import Slider from "../../components/Slider";

export default function Project() {
  return (
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
  );
}

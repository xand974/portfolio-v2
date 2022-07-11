import About from "@/components/project/About";
import AnotherGallery from "@/components/project/AnotherGallery";
import Contact from "@/components/shared/Contact";
import Footer from "@/components/project/Footer";
import Gallery from "@/components/project/Gallery";
import Header from "@/components/project/Header";
import Layout from "@/components/shared/Layout";
import Navbar from "@/components/project/Navbar";
import Skills from "@/components/project/Skills";
import Slider from "@/components/project/Slider";

export default function Project() {
  return (
    <Layout direction="vertical">
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

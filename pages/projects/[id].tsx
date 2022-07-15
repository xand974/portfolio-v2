import About from "@/components/single-project/About";
import AnotherGallery from "@/components/single-project/AnotherGallery";
import Contact from "@/components/@shared/Contact";
import Footer from "@/components/single-project/Footer";
import Gallery from "@/components/single-project/Gallery";
import Header from "@/components/single-project/Header";
import Layout from "@/components/@shared/Layout";
import Navbar from "@/components/@shared/Navbar";
import Skills from "@/components/single-project/Skills";
import Slider from "@/components/single-project/Slider";

export default function Project() {
  return (
    <Layout direction="vertical" enableMobile={true}>
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

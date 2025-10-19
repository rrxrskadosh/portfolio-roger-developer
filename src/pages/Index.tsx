import Header from "../components/layout/Header";
import Hero from "../components/hero/Hero";
import AboutMe from "../components/about/About";
import LatestWork from "../components/work/LatestWork";
import Footer from "../components/layout/Footer";
import Experience from "../components/experience/Experience";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutMe />
      <LatestWork />
      <Experience />
      <Footer />
    </div>
  );
};

export default Index;

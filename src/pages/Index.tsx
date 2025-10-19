import Header from "../components/layout/Header";
import Hero from "../components/hero/Hero";
import AboutMe from "../components/about/About";
import LatestWork from "../components/work/LatestWork";
import Footer from "../components/layout/Footer";
import Experience from "../components/experience/Experience";
import FullstackDev from "../components/skills/FullstackDev";
import Skills from "../components/skills/Skills";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutMe />
      <LatestWork />
      <Experience />
      <Skills />
      <FullstackDev />
      <Footer />
    </div>
  );
};

export default Index;

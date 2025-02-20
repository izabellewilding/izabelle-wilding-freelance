import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Logos from "./components/Logos";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className=" px-14">
        <Hero />
        <Skills />
        <Logos />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

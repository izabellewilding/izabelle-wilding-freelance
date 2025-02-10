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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-200">
      <Header />
      <main>
        <Hero />
        {/* <Logos /> */}
        <Skills />
        <About />

        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

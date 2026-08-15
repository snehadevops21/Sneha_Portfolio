import ArtisticBackground from "./components/ArtisticBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SelectedWork from "./components/SelectedWork";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="top">

      <ArtisticBackground />

      <Navbar />

      <main>
        <Hero />
        <About />
        <SelectedWork />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;

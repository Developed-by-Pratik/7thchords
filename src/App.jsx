import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App h-[100vh] scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Contact />
      <Footer />
    </div>  
  );
}

export default App;
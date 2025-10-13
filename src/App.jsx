import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App h-[100vh] min-w-[375px] bg-black">
      <Navbar />
      <Carousel />
      <About />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

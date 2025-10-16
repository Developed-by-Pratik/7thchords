import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Courses from "./components/Courses";
import Learning from "./components/Learning";
import Schedule from "./components/Schedule";
import Instructors from "./components/Instructors";
import Carousel from "./components/Carousel";
import Stories from "./components/Stories";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div className="App h-[100vh] min-w-[375px] bg-black">
      <Navbar />
      <Main />
      <About />
      <Courses />
      <Learning />
      <Schedule />
      <Instructors />
      <Carousel />
      <Stories />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;

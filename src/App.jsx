import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Courses from "./components/Courses";
import Learning from "./components/Learning";
import Carousel from "./components/Carousel";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div className="App h-[100vh] min-w-[375px] bg-black">
      <Navbar />
      <Main />
      <About />
      <Courses />
      <Learning />
      <Carousel />
      <Registration />
      <Footer />
      <Router>
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

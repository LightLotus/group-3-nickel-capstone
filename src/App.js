import "bootstrap/dist/css/bootstrap.min.css";
import Navlink from "./components/Navbar";
import Adoption from "./pages/Adoption";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import OurProducts from "./pages/OurProducts";
import OurStory from "./pages/OurStory";
import TrainingClasses from "./pages/TrainingClasses";
import Manners from "./pages/Manners";
import PrivateLessons from "./pages/PrivateLessons";
import PuppyKindergarten from "./pages/PuppyKindergarten";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navlink />
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/trainingclasses" element={<TrainingClasses />} />
          <Route path="/manners" element={<Manners />} />
          <Route path="/puppykindergarten" element={<PuppyKindergarten />} />
          <Route path="/privatelessons" element={<PrivateLessons />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/ourproducts" element={<OurProducts />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

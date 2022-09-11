import "bootstrap/dist/css/bootstrap.min.css";
import Navlink from "./components/Navbar";
import Footer from "./components/Footer";
import Adoption from "./pages/Adoption";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import OurProducts from "./pages/OurProducts";
import OurStory from "./pages/OurStory";
import TrainingClasses from "./pages/TrainingClasses";
import Manners from "./pages/Manners";
import PrivateLessons from "./pages/PrivateLessons";
import PuppyKindergarten from "./pages/PuppyKindergarten";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import Checkout from "./pages/Checkout";
import AdoptionPetDetails from "./pages/AdoptionPetDetails";
import MannersAdmin from "./components/MannersAdmin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditMannerSched from "./components/EditMannerSched";
import MannerEnroll from "./pages/MannerEnroll";

function App() {
  return (
    <Router>
      <Navlink />
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/trainingclasses" element={<TrainingClasses />} />
        <Route path="/manners" element={<Manners />} />
        <Route path="/puppykindergarten" element={<PuppyKindergarten />} />
        <Route path="/privatelessons" element={<PrivateLessons />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/adoptionpetdetails" element={<AdoptionPetDetails />} />
        <Route path="/ourproducts" element={<OurProducts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/mannersadmin" element={<MannersAdmin />} />
        <Route
          path="/mannersadmin/edit-mannersched/:id"
          element={<EditMannerSched />}
        />
        <Route path="manners/mannerenroll/:id" element={<MannerEnroll />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

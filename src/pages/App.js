import "bootstrap/dist/css/bootstrap.min.css";
import Navlink from "../components/Navbar";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/Footer";
import Adoption from "./Adoption";
import Contact from "./Contact";
import FAQ from "./FAQ";
import OurProducts from "./OurProducts";
import OurStory from "./OurStory";
import TrainingClasses from "./TrainingClasses";
import Manners from "./Manners";
import PrivateLessons from "./PrivateLessons";
import PuppyKindergarten from "./PuppyKindergarten";
import Cart from "./Cart";
import Login from "./Login";
import Register from "./Register";
import Homepage from "./Homepage";
import Checkout from "./Checkout";
import AdoptionPetDetails from "./AdoptionPetDetails";
import MannersAdmin from "../components/MannersAdmin";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import EditMannerSched from "../components/EditMannerSched";
import MannerEnroll from "./MannerEnroll";
import ViewMannersEnrollees from "../components/ViewMannersEnrollees";
import EditMannersEnrollees from "./EditMannersEnrollees";
import Adoptionadmin from "./Adoptionadmin";
import AddAdoption from "./AddAdoption";
import Editadminadoption from "./Editadminadoption";
import Viewadoptapplicant from "./Viewadoptapplicant";
import PuppyEnroll from "./PuppyEnroll";
import React, { Component } from "react";
import MainAdmin from "./MainAdmin";
import PuppyAdmin from "./PuppyAdmin";
import EditPuppySched from "../components/EditPuppySched";
import ViewPuppyEnrollees from "../components/ViewPuppyEnrollees";
import EditPuppyEnrollees from "./EditPuppyEnrollees";
import AdminLogin from "./Admin/AdminLogin";
import Dashboard from "./Dashboard";
import Index from "./index";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <Route path="/admin_login" element={<AdminLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/mannersadmin" element={<MannersAdmin />} />
        <Route path="/index" element={<Index />} />
        <Route
          path="/mannersadmin/edit-mannersched/:id"
          element={<EditMannerSched />}
        />
        <Route path="/manners/mannerenroll/:id" element={<MannerEnroll />} />
        <Route
          path="/mannersadmin/view-enrollees/:id"
          element={<ViewMannersEnrollees />}
        />
        <Route path="/edit-enrollees/:id" element={<EditMannersEnrollees />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adoptionadmin" element={<Adoptionadmin />} />
        <Route path="/adoptionadminadd" element={<AddAdoption />} />
        <Route path="/editadminadoption/:id" element={<Editadminadoption />} />
        <Route path="/adoption-details/:id" element={<AdoptionPetDetails />} />
        <Route
          path="/viewadoptionapplicant/:id"
          element={<Viewadoptapplicant />}
        />
        <Route path="/puppykindergarten/:id" element={<PuppyEnroll />} />
        <Route path="/mainadmin" element={<MainAdmin />} />
        <Route path="/puppyadmin" element={<PuppyAdmin />} />
        <Route
          path="/puppyadmin/edit-puppysched/:id"
          element={<EditPuppySched />}
        />
        <Route
          path="/puppyadmin/view-enrollees/:id"
          element={<ViewPuppyEnrollees />}
        />
        <Route
          path="/edit-puppyenrollees/:id"
          element={<EditPuppyEnrollees />}
        />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route
            path="/dashboard/ownerprofiledashboard"
            element={<OwnerProfileDashboard />}
          />
          <Route
            path="/dashboard/petclassesdashboard"
            element={<PetClassesDashboard />}
          />
          <Route
            path="/dashboard/adoptiondashboard"
            element={<AdoptionDashboard />}
          />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

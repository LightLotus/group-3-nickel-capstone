import "bootstrap/dist/css/bootstrap.min.css";
import Navlink from "./components/Navbar";
import NavbarAdmin from "./components/NavbarAdmin";
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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import EditMannerSched from "./components/EditMannerSched";
import MannerEnroll from "./pages/MannerEnroll";
import ViewMannersEnrollees from "./components/ViewMannersEnrollees";
import EditMannersEnrollees from "./pages/EditMannersEnrollees";
import Adoptionadmin from "./pages/Adoptionadmin";
import AddAdoption from "./pages/AddAdoption";
import Editadminadoption from "./pages/Editadminadoption";
import Viewadoptapplicant from "./pages/Viewadoptapplicant";
import PuppyEnroll from "./pages/PuppyEnroll";
import React, { Component } from "react";
import MainAdmin from "./pages/MainAdmin";
import PuppyAdmin from "./pages/PuppyAdmin";
import EditPuppySched from "./components/EditPuppySched";
import ViewPuppyEnrollees from "./components/ViewPuppyEnrollees";
import EditPuppyEnrollees from "./pages/EditPuppyEnrollees";
import AdminLogin from "./pages/Admin/AdminLogin";
import Dashboard from "./pages/Dashboard";

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

import { Routes, Route, useLocation } from "react-router-dom";
import NavbarFirst from "./components/navbar/NavbarFirst";
import NavbarSecond from "./components/navbar/NavbarSecond";
import Home from "./pages/Home";
import About from "./pages/About";
import Shipping from "./pages/Shipping";
import Return from "./pages/Return";
import Garant from "./pages/Garant";
import Contact from "./pages/Contact";
import BlogPage from "./pages/BlogPage";
import Admin from "./auth/Admin";
import Footer from "./components/footer/Footer";
import CreateProduct from "./components/createProducts/CreateProduct";
import EditProduct from "./components/editProducts/EditProduct";
import CreateCategory from "./components/createCategory/CreateCategory";
import EditCategory from "./components/editCategory/EditCategory";
import Wishlist from "./pages/Wishlist";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <NavbarFirst />}
      {!isAdminRoute && <NavbarSecond />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/return" element={<Return />} />
        <Route path="/garant" element={<Garant />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;

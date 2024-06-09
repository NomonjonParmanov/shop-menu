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
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Detail from "./pages/Detail";
import AllProducts from "./components/allProducts/AllProducts";
import NotFound from "./components/notFound/NotFound";
import Login from "./pages/Login";
import Auth from "./auth/Auth";

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
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Login />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin/*" element={<Admin />} />
        </Route>
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;

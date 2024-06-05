import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavbarSecond from "./components/navbar/NavbarSecond";
import NavbarFirst from "./components/navbar/NavbarFirst";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <NavbarFirst />
      <NavbarSecond />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

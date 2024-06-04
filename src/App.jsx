import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavbarSecond from "./components/navbar/NavbarSecond";
import NavbarFirst from "./components/navbar/NavbarFirst";

function App() {
  return (
    <>
      <NavbarFirst />
      <NavbarSecond />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

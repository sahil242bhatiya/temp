import { Route, Routes } from "react-router-dom";
// import "./debug.css";
import Home from "./components/Home/Home.component.jsx";
import DefaultNavbar from "./core/navbar/DefaultNavbar/DefaultNavbar.component.jsx";
import HomePage from "./pages/home/HomePage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultNavbar />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

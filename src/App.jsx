import { Route, Routes } from "react-router-dom";
// import "./debug.css";
import Home from "./components/pages/home/home.component.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

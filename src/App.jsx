import { Route, Routes } from "react-router-dom";
// import "./debug.css";
import "./styles/global.styles.scss";
import DefaultNavbar from "./core/navbar/DefaultNavbar/DefaultNavbar.component.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultNavbar />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/auth" element={<DefaultNavbar />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

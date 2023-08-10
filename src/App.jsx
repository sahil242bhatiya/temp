import { Route, Routes } from "react-router-dom";
// import "./debug.css";
import "./styles/global.styles.scss";
import HomePage from "./pages/Home/HomePage.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";
import DefaultLayout from "./core/layout/DefaultLayout/DefaultLayout.component.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/auth" element={<DefaultLayout />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

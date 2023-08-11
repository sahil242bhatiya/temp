import { Route, Routes } from "react-router-dom";
// import "./debug.css";
import "./styles/global.styles.scss";
import HomePage from "./pages/Home/HomePage.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";
import DefaultLayout from "./core/layout/DefaultLayout/DefaultLayout.component.jsx";
import { routeLinks } from "./utils/routeLinks.js";

function App() {
  return (
    <>
      <Routes>
        <Route path={routeLinks.home.index} element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path={routeLinks.auth.index} element={<DefaultLayout />}>
          <Route path={routeLinks.auth.login} element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

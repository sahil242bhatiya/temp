import { Outlet } from "react-router-dom";
import { ReactComponent as BrandLogo } from "../../../assets/react.svg";

const defaultNavbar = () => {
  return (
    <>
      <nav>
        Brand Name
        <BrandLogo />
      </nav>
      <Outlet />
    </>
  );
};

export default defaultNavbar;

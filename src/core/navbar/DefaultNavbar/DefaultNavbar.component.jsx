import { Link } from "react-router-dom";
import { ReactComponent as BrandLogo } from "../../../assets/react.svg";

import "./DefaultNavbar.styles.scss";

const defaultNavbar = () => {
  return (
    <>
      <nav className="default-navbar">
        <div className="brand__logo">
          <div className="brand__icon">
            <BrandLogo />
          </div>
          <div className="brand__name">Brand Name</div>
        </div>
        <div className="nav__links">
          <Link to={"/"}>Home</Link>
          <Link className="btn-primary" to={"/auth/login"}>
            Signin
          </Link>
        </div>
      </nav>
    </>
  );
};

export default defaultNavbar;

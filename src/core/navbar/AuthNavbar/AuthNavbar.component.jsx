import { Link, Outlet } from "react-router-dom";

import "../DefaultNavbar/DefaultNavbar.styles.scss";

const AuthNavbar = () => {
  return (
    <>
      <nav ref={parentRef} className="default-navbar">
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
      <Outlet />
    </>
  );
};

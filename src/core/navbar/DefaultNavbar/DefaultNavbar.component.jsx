import { useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as BrandLogo } from "../../../assets/react.svg";

import "./DefaultNavbar.styles.scss";
import autoAnimate from "@formkit/auto-animate";

const defaultNavbar = () => {
  const parentRef = useRef(null);
  const innerBodyRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);
  useEffect(() => {
    if (innerBodyRef.current) {
      autoAnimate(innerBodyRef.current);
    }
  }, [innerBodyRef]);

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
      <div className="app-container" ref={innerBodyRef}>
        <Outlet />
      </div>
    </>
  );
};

export default defaultNavbar;

import DefaultNavbarComponent from "../../navbar/DefaultNavbar/DefaultNavbar.component.jsx";
import DefaultFooterComponent from "../../footer/DefaultFooter.component.jsx";
import { Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

import "./DefaultLayout.styles.scss";

const DefaultLayout = () => {
  const innerBodyRef = useRef(null);

  useEffect(() => {
    if (innerBodyRef.current) {
      autoAnimate(innerBodyRef.current);
    }
  }, [innerBodyRef]);

  return (
    <>
      <DefaultNavbarComponent />
      <div className="app-container" ref={innerBodyRef}>
        <Outlet />
      </div>
      <DefaultFooterComponent />
    </>
  );
};

export default DefaultLayout;

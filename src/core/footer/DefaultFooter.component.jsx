import "./DefaultFooter.styles.scss";
import { Link } from "react-router-dom";

const DefaultFooter = () => {
  return (
    <footer>
      <p>
        Made With ❤️ By{" "}
        <Link to="https://sahil242.netlify.app/" target="_blank">
          Sahil Bhatiya
        </Link>
      </p>
    </footer>
  );
};

export default DefaultFooter;

import { ReactComponent as LoginArt } from "../../../assets/svg/loginArt.svg";
import "./Login.styles.scss";
import { loginGoogleUser } from "./Login.functions.js";

const login = () => {
  return (
    <div className="login-container">
      <div className="content__container">
        <div className="svg__container">
          <LoginArt />
        </div>
        <div className="form__container">
          <h3>Sign In With Google</h3>
          <button onClick={loginGoogleUser} className="btn btn-primary">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default login;

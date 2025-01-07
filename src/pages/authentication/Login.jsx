import AuthContainer from "./AuthContainer";
import img from "../../assets/others/authentication2.png";
import { useContextValue } from "../../hooks/useContextValue";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialSignin from "./SocialSignin";
import Swal from "sweetalert2";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";

const Login = () => {
  const { signInUser, setUser } = useContextValue();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrMsg(null);

    const email = e.target.email.value;
    const password = e.target.password.value;
    // const captcha = e.target.captcha.value;

    // TODO: enable the captcha functionality

    // if (!validateCaptcha(captcha)) {
    //   setErrMsg("Captcha didn't match");
    //   return;
    // }

    try {
      const { user } = await signInUser(email, password);
      setUser(user);
      Swal.fire({
        title: "Login Successful!",
        icon: "success",
        showConfirmButton: false,
        position: "center",
        timer: 2000,
      });
      e.target.reset();
      navigate(state?.goTo || "/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AuthContainer>
      <div className="flex flex-col md:flex-row items-center justify-between py-10 px-5">
        <div className="flex-1">
          <img className="w-full" src={img} />
        </div>
        <div className="flex-1">
          <form onSubmit={onSubmit}>
            <label className="inputParent">
              <input
                className="inputBox mb-5"
                type="email"
                name="email"
                required
              />
              <span>Email</span>
            </label>
            <label className="inputParent">
              <input
                className="inputBox"
                type="text"
                name="password"
                required
              />
              <span>Password</span>
            </label>

            <label id="captcha" className="block mt-5">
              <LoadCanvasTemplate />
              <input
                type="text"
                required
                name="captcha"
                className="inputBox mt-2 w-full"
                placeholder="Type the text above"
              />
              {errMsg && <p className="text-error mt-1">{errMsg}</p>}
            </label>

            <label>
              <input
                className="btn bg-primaryColor hover:bg-primaryColor/80 text-white w-full cursor-pointer mt-5"
                type="submit"
                value="Login"
              />
            </label>
          </form>

          <label className="inline-block mt-5">
            <span className="text-primaryColor">
              {"Don't have an account? Please "}
              <Link className="text-info" to="/signup">
                Signup
              </Link>
            </span>
          </label>

          <div>
            <SocialSignin text="Or sign in with" />
          </div>
        </div>
      </div>
    </AuthContainer>
  );
};

export default Login;

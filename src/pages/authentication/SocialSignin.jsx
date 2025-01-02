import PropTypes from "prop-types";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useContextValue } from "../../hooks/useContextValue";
import Swal from "sweetalert2";

const SocialSignin = ({ text = "" }) => {
  const { setUser, googleSignIn } = useContextValue();

  const handleGoogleSignIn = async () => {
    try {
      const googleUser = await googleSignIn();
      setUser(googleUser.user);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <div>
      <p className="text-center mt-4">{text}</p>
      <div className="flex items-center justify-center mt-3 gap-x-6">
        <button className="btn btn-sm btn-circle btn-ghost border-darkTwo">
          <FaFacebook />
        </button>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-sm btn-circle btn-ghost border-darkTwo"
        >
          <FaGoogle />
        </button>
        <button className="btn btn-sm btn-circle btn-ghost border-darkTwo">
          <FaGithub />
        </button>
      </div>
    </div>
  );
};

SocialSignin.propTypes = {
  text: PropTypes.string,
};

export default SocialSignin;

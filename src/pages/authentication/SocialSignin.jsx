import PropTypes from "prop-types";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useContextValue } from "../../hooks/useContextValue";
import Swal from "sweetalert2";
import useCreateUser from "../../hooks/useCreateUser";
import Loading from "../../components/loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";

const SocialSignin = ({ text = "" }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { setUser, googleSignIn } = useContextValue();
  const [handleCreateUser, isPending] = useCreateUser();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn().then((result) => {
        const user = result.user;
        console.log(user);
        handleCreateUser({
          email: user?.email,
          name: user?.displayName ? user.displayName : "",
          image: user?.photoURL ? user?.photoURL : "",
        });
        setUser(user);
        navigate(state?.goTo || "/");
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  if (isPending) return <Loading />;

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

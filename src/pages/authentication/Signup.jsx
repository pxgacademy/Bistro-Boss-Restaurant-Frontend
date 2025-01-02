import AuthContainer from "./AuthContainer";
import img from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import SocialSignin from "./SocialSignin";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContextValue } from "../../hooks/useContextValue";
import Swal from "sweetalert2";

const Signup = () => {
  const { createUser, updateUser, setUser } = useContextValue();
  const navigate = useNavigate()
  const [userImg, setUserImg] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEye, setIsEye] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setErrMsg(null);
    if (!userImg) {
      setErrMsg("Please select an image");
      return;
    }

    try {
      const IMG_API = import.meta.env.VITE_IMG_API;
      const formData = new FormData();
      formData.append("image", userImg);

      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${IMG_API}`,
        formData
      );
      data.image = res?.data?.data?.display_url;
      data.imageThumb = res?.data?.data?.thumb?.url;

      const { user } = await createUser(data?.email, data?.password);
      setUser(user);
      updateUser({ displayName: data?.name, photoURL: data?.image });
      Swal.fire({
        title: "User Created Successfully!",
        icon: "success",
        showConfirmButton: false,
        position: "center",
        timer: 2000,
      });
      reset();
      setUserImg(null)
      setSelectedImage(null);
      navigate('/')
    } catch (error) {
      console.log(error.message);
      return;
    }

    console.log(data);
    // console.log(userImg);
  };

  // console.log(watch("example"));

  const handleImageChange = (event) => {
    setErrMsg(null);
    setUserImg(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setSelectedImage(URL.createObjectURL(img));
    }
  };

  const handlePasswordType = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsEye(!isEye);
  };

  return (
    <AuthContainer>
      <div className="flex flex-col md:flex-row-reverse items-center justify-between py-10 px-5">
        <div className="flex-1">
          <img className="w-full" src={img} />
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="inputParent mb-5">
              <input
                className="inputBox capitalize"
                type="text"
                required
                {...register("name", { required: true })}
              />
              <span>Full Name</span>
              {errors.name && <p className="text-error">Name is required</p>}
            </label>

            <label className="inputParent">
              <input
                onChange={(e) => handleImageChange(e)}
                id="uploadFile"
                className="hidden"
                type="file"
                // {...register("photo", { required: true })}
              />
              <label
                htmlFor="uploadFile"
                className="inputBox mb-5 cursor-pointer flex items-center gap-x-2"
              >
                <span className="bg-primaryColor px-3 py-1 text-white rounded-md">
                  Upload Image
                </span>
                <div className="flex flex-col grow">
                  <span>{userImg && `Name: ${userImg?.name}`}</span>
                  <span>{userImg && `Size: ${userImg?.size} bytes`}</span>
                </div>
                <img className="w-12 rounded-md" src={selectedImage} />
                {errMsg && <p className="text-error">{errMsg}</p>}
              </label>
            </label>

            <label className="inputParent mb-5">
              <input
                className="inputBox"
                type="email"
                required
                {...register("email", { required: true })}
              />
              <span>Email</span>
              {errors.email && <p className="text-error">Email is required</p>}
            </label>

            <label className="inputParent">
              <input
                className="inputBox"
                type={isEye ? "text" : "password"}
                required
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?=.*[0-9])/,
                })}
              />
              <span>Password</span>
              <button
                onClick={(e) => handlePasswordType(e)}
                className="absolute right-4 mt-5 transition-all duration-300"
              >
                {isEye ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && (
                <div className="text-error">
                  {errors.password?.type === "required" && (
                    <p>Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p>Password must be more than 6 characters</p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p>Password must be less than 20 characters</p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p>
                      Password must be at least one uppercase, one lowercase,
                      one symbol, and one number.
                    </p>
                  )}
                </div>
              )}
            </label>

            <label>
              <input
                className="btn bg-primaryColor hover:bg-primaryColor/80 text-white w-full cursor-pointer mt-5"
                type="submit"
                value="Signup"
              />
            </label>
          </form>

          <label className="inline-block mt-5">
            <span className="text-primaryColor">
              Already have an account? Please{" "}
              <Link className="text-info" to="/login">
                Login
              </Link>
            </span>
          </label>

          <div>
            <SocialSignin text="Or sign up with" />
          </div>
        </div>
      </div>
    </AuthContainer>
  );
};

export default Signup;

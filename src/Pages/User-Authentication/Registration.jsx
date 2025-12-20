import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "/favicon.png";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const passwordValue = watch("password");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleRegister = (data) => {
    const profileImg = data.photo[0];
    console.log("data", data);

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result);

        const formData = new FormData();
        formData.append("image", profileImg);

        const imageApiUrl = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host
        }`;

        axiosSecure.post(imageApiUrl, formData).then((res) => {
          const photoURL = res.data.data.url;

          const userInfo = {
            email: data.email,
            displayName: data.name,
            photoURL: photoURL,
            address: data.address,
          };

          axiosSecure.post("/users", userInfo);

          updateUserProfile({
            displayName: data.name,
            photoURL: photoURL,
          })
            .then(() => navigate(location?.state || "/"))
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-11/12 mx-auto md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10 my-6">
      <title>Rannafy | User Registration </title>
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-12 items-center py-14">
        <div>
          <div className="bg-white p-12 md:p-16 flex flex-col justify-center h-2/3 md:border-r-2 md:border-orange-600">
            {/* logo  */}
            <div className="mb-10 mx-auto">
              <img src={logo} alt="logo" className="h-48 w-48" />
            </div>

            <h1 className="text-5xl text-center md:text-left font-bold leading-tight mb-6">
              Join With
              <br />
              <span className="text-orange-600 text-7xl">RannaFy</span>
            </h1>

            <p className="text-xl md:text-2xl md:text-left text-center opacity-95 leading-relaxed">
              Discover thousands of delicious recipes, save your favorites, and
              share your own culinary creations.
            </p>
          </div>
        </div>

        <div className="w-8/12 mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-primary">
            Create Rannafy Account
          </h2>
          <form onSubmit={handleSubmit(handleRegister)}>
            {/* Name */}
            <label className="block text-sm font-semibold text-gray-700 ml-2">
              Name
            </label>
            <input
              {...register("name", { required: true })}
              className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
              placeholder="Enter your Name"
            />
            {errors.name && <p className="text-red-500">Name is required</p>}

            {/* Photo */}
            <label className="block text-sm font-semibold text-gray-700 ml-2 mt-3">
              Upload Profile
            </label>

            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input rounded-full w-full mt-1"
            />
            {errors.photo && <p className="text-red-500">Photo required</p>}

            {/* Email */}
            <label className="block text-sm font-semibold text-gray-700 mt-3 ml-2">
              Email Address
            </label>
            <input
              {...register("email", { required: true })}
              className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
              placeholder="Enter your Email"
            />
            {errors.email && <p className="text-red-500">Email required</p>}

            {/* Address */}
            <label className="block text-sm font-semibold text-gray-700 mt-3 ml-2">
              Present Address
            </label>
            <input
              {...register("address", { required: true })}
              className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
              placeholder="Your present address"
            />
            {errors.address && <p className="text-red-500">Address required</p>}

            {/* Password */}
            <label className="block text-sm font-semibold text-gray-700 mt-3 ml-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/,
                })}
                className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
                placeholder="Enter your Password"
              />
              <span
                className="absolute right-4 bottom-3.5 cursor-pointer text-gray-600"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be at least 6 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">Use strong password like AaBb2@</p>
            )}

            {/* Confirm Password */}
            <label className="block text-sm font-semibold text-gray-700 mt-3 ml-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPass ? "text" : "password"}
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === passwordValue || "Passwords do not match!",
                })}
                className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
                placeholder="Confirm Password"
              />

              <span
                className="absolute right-4 bottom-3.5 cursor-pointer text-gray-600"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
              >
                {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}

            <button
              type="submit"
              className="w-full rounded-full bg-orange-500 mt-3 text-white py-3 px-2 hover:bg-orange-600 transition-colors cursor-pointer"
            >
              Register
            </button>
          </form>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link
              state={location.state}
              to={"/login"}
              className="text-primary underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "/favicon.png";
import axios from "axios";
import { toast } from "react-toastify";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const passwordValue = watch("password");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ FORM SUBMIT
  const handleRegister = async (data) => {
    try {
      const profileImg = data.photo[0];

      const result = await registerUser(data.email, data.password);

      const formData = new FormData();
      formData.append("image", profileImg);

      const imageApiUrl = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_image_host
      }`;

      const imgRes = await axios.post(imageApiUrl, formData);
      const photoURL = imgRes.data.data.url;

      const userInfo = {
        email: data.email,
        displayName: data.name,
        photoURL,
        address: data.address,
      };

      await axios.post("https://rannafy-server.vercel.app/users", userInfo);

      await updateUserProfile({
        displayName: data.name,
        photoURL,
      });

      toast.success("Registration successful!");
      navigate(location?.state || "/");
    } catch (error) {
      // 🔴 Firebase weak password → inline error
      if (error.code === "auth/weak-password") {
        setError("password", {
          type: "manual",
          message: "Password is too weak. Use at least 6 characters.",
        });
        return;
      }

      // 🔴 Invalid email → inline
      if (error.code === "auth/invalid-email") {
        setError("email", {
          type: "manual",
          message: "Please enter a valid email address",
        });
        return;
      }

      // 🔴 Email already exists → inline
      if (error.code === "auth/email-already-in-use") {
        setError("email", {
          type: "manual",
          message: "This email is already registered",
        });
        return;
      }

      // 🔥 Other unexpected errors → toast
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-11/12 mx-auto text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10 my-6">
      <title>Rannafy | User Registration</title>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-14">
        {/* LEFT */}
        <div className="bg-white p-4 lg:p-12 md:p-16 flex flex-col justify-center lg:border-r-2 border-orange-600">
          <div className="mb-10 mx-auto">
            <img src={logo} alt="logo" className="h-48 w-48" />
          </div>

          <h1 className="text-5xl text-center md:text-left font-bold mb-6">
            Join With <br />
            <span className="text-orange-600 text-7xl">RannaFy</span>
          </h1>

          <p className="text-xl text-center md:text-left">
            Discover thousands of delicious recipes and share your creations.
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-11/12 md:w-8/12 mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Create Account</h2>

          <form onSubmit={handleSubmit(handleRegister)}>
            {/* NAME */}
            <label className="ml-2">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className={`w-full border rounded-full px-4 py-2 mt-1 outline-none ${
                errors.name ? "border-red-500" : "border-gray-400"
              }`}
              placeholder="Enter your name"
            />

            {/* PHOTO */}
            <label className="ml-2 mt-3 block">Profile Photo</label>
            <input
              type="file"
              {...register("photo", { required: "Photo is required" })}
              className={`file-input w-full rounded-full mt-1 ${
                errors.photo ? "border-red-500" : ""
              }`}
            />

            {/* EMAIL */}
            <label className="ml-2 mt-3 block">Email</label>

            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              })}
              className={`w-full border rounded-full px-4 py-2 mt-1 outline-none ${
                errors.email ? "border-red-500" : "border-gray-400"
              }`}
              placeholder="Enter email"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1 ml-2">
                {errors.email.message}
              </p>
            )}

            {/* ADDRESS */}
            <label className="ml-2 mt-3 block">Address</label>
            <input
              {...register("address", { required: "Address is required" })}
              className={`w-full border rounded-full px-4 py-2 mt-1 outline-none ${
                errors.address ? "border-red-500" : "border-gray-400"
              }`}
              placeholder="Present address"
            />

            {/* PASSWORD */}
            <label className="ml-2 mt-3 block">Password</label>
            <div className="relative">
              <input
                placeholder="Password"
                type={showPass ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/,
                    message:
                      "Must include uppercase, lowercase & special character",
                  },
                })}
                className={`w-full border rounded-full px-4 py-2 mt-1 outline-none ${
                  errors.password ? "border-red-500" : "border-gray-400"
                }`}
              />

              <span
                className="absolute right-4 top-3 cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 ml-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <label className="ml-2 mt-3 block">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPass ? "text" : "password"}
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Confirm password required",
                  validate: (value) =>
                    value === passwordValue || "Passwords do not match",
                })}
                className={`w-full border rounded-full px-4 py-2 mt-1 outline-none ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-400"
                }`}
              />
              <span
                className="absolute right-4 top-3 cursor-pointer"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
              >
                {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 ml-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 mt-4 cursor-pointer">
              Register
            </button>
          </form>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="underline text-orange-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;

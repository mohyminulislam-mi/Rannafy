import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import logo from "/favicon.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const { singInUser } = useAuth();

  const handleLogin = async (data) => {
    try {
      await singInUser(data.email, data.password);
      toast.success("Welcome back!");
      navigate(location?.state || "/");
    } catch (error) {
      //  Email + password mismatch
      if (
        error.code === "auth/invalid-credential" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        toast.error("Email or password does not match");
        return;
      }

      //  Invalid email (Firebase level)
      if (error.code === "auth/invalid-email") {
        setError("email", {
          type: "manual",
          message: "Please enter a valid email address",
        });
        return;
      }

      //  Any other error
      toast.error("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen lg:p-6 p-4 text-sm">
      <title>Rannafy | User Login</title>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
        {/* LEFT */}
        <div className="lg:p-12 p-6 flex flex-col justify-center md:border-r-2 border-orange-600">
          <div className="mb-10 mx-auto">
            <img src={logo} alt="logo" className="h-48 w-48" />
          </div>

          <h1 className="text-5xl font-bold mb-6">
            Welcome Back to <br />
            <span className="text-orange-600">RannaFy</span>
          </h1>

          <p className="text-xl">
            Discover thousands of delicious recipes and share your creations.
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-11/12 lg:w-8/12 mx-auto py-10">
          <h2 className="text-3xl font-semibold mb-6">Login</h2>

          <form onSubmit={handleSubmit(handleLogin)}>
            {/* EMAIL */}
            <label className="ml-2 mt-3 block">Email Address</label>
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
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 ml-2">
                {errors.email.message}
              </p>
            )}

            {/* PASSWORD */}
            <label className="ml-2 mt-3 block">Password</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                })}
                className={`w-full border rounded-full px-4 py-2 mt-1 outline-none ${
                  errors.password ? "border-red-500" : "border-gray-400"
                }`}
                placeholder="Enter password"
              />
              <span
                className="absolute right-4 top-3 cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1 ml-2">
                {errors.password.message}
              </p>
            )}

            <div className="text-right py-4">
              <Link to="/forget-password" className="underline text-primary">
                Forgot Password?
              </Link>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 cursor-pointer">
              Log in
            </button>
          </form>

          <p className="text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/registration" className="underline text-orange-600">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

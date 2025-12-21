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
  } = useForm();
  const { singInUser } = useAuth();

  const handleLogin = (data) => {
    singInUser(data.email, data.password)
      .then((result) => {
        toast.success("Welcome back!");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen lg:p-6 p-4 text-left text-sm">
      <title>Rannafy | User Login</title>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2  gap-6 lg:gap-12 items-center rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
        {/* logo and texts */}
        <div className="lg:p-12 p-6 flex flex-col justify-center h-2/3 md:border-r-2 md:border-orange-600">
          {/* logo  */}
          <div className="mb-3 lg:mb-10 mx-auto">
            <img src={logo} alt="logo" className="h-48 w-48" />
          </div>

          <h1 className="text-3xl lg:text-5xl text-center md:text-left font-bold leading-tight mb-6">
            Welcome Back to,
            <br />
            <span className="text-orange-600">RannaFy</span>
          </h1>

          <p className="text-xl lg:text-2xl md:text-left text-center opacity-95 leading-relaxed">
            Discover thousands of delicious recipes, save your favorites, and
            share your own culinary creations.
          </p>
        </div>
        <div className="w-11/12 lg:w-8/12 mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-primary">
            Login RannaFy
          </h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            {/* Email */}
            <label className="block text-sm font-semibold text-gray-700 mt-3 ml-2">
              Email Address
            </label>
            <input
              id="email"
              {...register("email", { required: true })}
              className="w-full bg-transparent border mt-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
              type="email"
              placeholder="Enter your email"
              required
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">email is required</p>
            )}
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
            <div className="text-right py-4">
              <Link to={"/forget-password"} className="text-primary underline">
                Forgot Password
              </Link>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-orange-500 mt-3 text-white py-3 px-2 hover:bg-orange-600 transition-colors cursor-pointer"
            >
              Log in
            </button>
          </form>
          <p className="text-center mt-4 mb-4">
            Don’t have an account?{" "}
            <Link
              state={location.state}
              to={"/registration"}
              className="text-primary underline"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

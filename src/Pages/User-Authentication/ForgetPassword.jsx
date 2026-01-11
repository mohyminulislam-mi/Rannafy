import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const ForgetPassword = () => {
  const { forgetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;

    try {
      await forgetPassword(email);

      Swal.fire({
        icon: "success",
        title: "Email Sent",
        text: "Check your inbox to reset your password",
        confirmButtonColor: "#f97316",
      });

      navigate("/login");
    } catch (err) {
      // 🔴 Firebase error handling
      if (err.code === "auth/user-not-found") {
        setError("This email is not registered");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address");
      } else {
        setError("Something went wrong. Try again later");
      }
    }
  };

  return (
    <div className="my-14">
      <div className="card bg-base-100 mx-auto w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <div className="text-center">
            <h1 className="text-3xl font-medium">Forgot Password</h1>
            <p className="mt-2">Enter your registered email</p>
          </div>

          <form onSubmit={handleForgetPassword}>
            <label className="block text-sm font-semibold mt-4">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              className="input input-bordered w-full mt-1"
              placeholder="Enter registered email"
              required
            />

            {/* 🔴 Inline error */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <button className="btn bg-orange-500 text-white mt-4 w-full">
              Send Reset Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

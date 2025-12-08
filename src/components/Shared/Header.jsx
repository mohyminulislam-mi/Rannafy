import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { IoExitOutline, IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { PiPlantBold } from "react-icons/pi";
import { toast } from "react-toastify";

const Header = () => {
  const { user, singOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSingOut = () => {
    singOutUser()
      .then(() => {
        toast.success("Logout successful");
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-1 ${
              isActive ? "text-orange-500 font-semibold" : ""
            }`
          }
        >
          <IoHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            `flex items-center gap-1 ${
              isActive ? "text-orange-500 font-semibold" : ""
            }`
          }
        >
          <PiPlantBold /> Recipes
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-11/12 mx-auto navbar px-0 bg-base-100 ">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box shadow mt-3 w-52 p-2"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-orange-500">RannaFy</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src={user?.photoURL || "https://i.ibb.co/8xM1d0B/avatar.png"}
                />
              </div>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box shadow mt-3 w-52 p-2 z-50"
            >
              <li>
                <Link
                  to="/my-profile"
                  className="font-bold flex items-center gap-1 justify-center hover:bg-orange-50"
                >
                  <CgProfile /> Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={handleSingOut}
                  className="mt-2 bg-orange-500 text-white font-semibold py-2 rounded flex items-center justify-center gap-1"
                >
                  <IoExitOutline /> Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="space-x-2">
            <Link
              to="/login"
              className="bg-orange-500 text-white px-4 py-2 rounded font-semibold"
            >
              Login
            </Link>
            <Link
              to="/registration"
              className="border border-orange-500 text-orange-500 px-4 py-2 rounded font-semibold"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

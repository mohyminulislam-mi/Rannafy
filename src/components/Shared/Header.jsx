import { useState, useRef, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, LogOut, LayoutDashboard, UserCircle } from "lucide-react";
import Logo from "./Logo";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const userDropdownRef = useRef(null);

  const handleSingOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `${user.displayName}. If you're logging out, you can't access!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f54a00",
      cancelButtonColor: "#ff0000",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            navigate("/login");
          })
          .catch((error) => console.log(error));
        Swal.fire({
          title: "Logout successful",
          text: "Thanks for staying with RannaFy!",
          icon: "success",
        });
      }
    });
  };

  // Public menu
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Meals", path: "/meals" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    ...(user ? [{ name: "Dashboard", path: "/dashboard" }] : []),
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-5">
          {menuItems.map((item) => {
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center transition-colors font-medium ${
                  isActive(item.path)
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right  */}
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block relative" ref={userDropdownRef}>
            {user ? (
              <>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="p-2 text-gray-700 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    alt="User Avatar"
                    src={
                      user?.photoURL || "https://i.ibb.co/8xM1d0B/avatar.png"
                    }
                  />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200">
                    <Link
                      to="/dashboard"
                      className="flex items-center w-full cursor-pointer px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors"
                    >
                      <UserCircle className="w-5 h-5 mr-3" />
                      Profile
                    </Link>
                    <button
                      onClick={handleSingOut}
                      className="w-full flex items-center px-4 py-2 hover:bg-orange-50 text-orange-500 transition-colors"
                    >
                      <LogOut className="w-5 h-5 mr-3" />
                      Logout
                    </button>
                  </div>
                )}
              </>
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

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-200">
          <nav className="flex flex-col space-y-3">
            {menuItems.map((item) => {
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors font-medium ${
                    isActive(item.path)
                      ? "bg-orange-50 text-orange-500"
                      : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* User items in mobile */}
            {user ? (
              <div className="border-t border-gray-200 pt-3 mt-3">
                <Link
                  to="/dashboard"
                  className="flex items-center w-full cursor-pointer px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors"
                >
                  <UserCircle className="w-5 h-5 mr-3" />
                  Profile
                </Link>
                <button
                  onClick={handleSingOut}
                  className="flex items-center w-full cursor-pointer px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="mt-6 flex flex-col gap-3 text-center">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-orange-500 text-white px-4 py-2 rounded font-semibold w-full"
                >
                  {" "}
                  Login{" "}
                </Link>
                <Link
                  to="/registration"
                  onClick={() => setMobileMenuOpen(false)}
                  className="border border-orange-500 text-orange-500 px-4 py-2 rounded font-semibold"
                >
                  Signup
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;

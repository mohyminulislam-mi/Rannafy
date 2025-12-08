import { ChefHat, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 md:w-11/12 mx-auto md:rounded-t-4xl">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand and Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <ChefHat className="w-10 h-10 text-orange-500" />
              <span className="text-3xl font-bold text-white">
                Flavor Vault
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your daily dose of delicious recipes made by real home cooks —
              just like you.
            </p>
            <p className="text-orange-500 font-semibold mt-4">
              Cook. Share. Enjoy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-orange-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/recipes"
                  className="hover:text-orange-500 transition"
                >
                  All Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="/addRecipes"
                  className="hover:text-orange-500 transition"
                >
                  Add Recipe
                </Link>
              </li>
              <li>
                <Link
                  href="/manageRecipes"
                  className="hover:text-orange-500 transition"
                >
                  My Recipes
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Community</h3>
            <ul className="space-y-3">
              <li className="hover:text-orange-500 transition">About Us</li>
              <li className="hover:text-orange-500 transition">Contact</li>
              <li className="hover:text-orange-500 transition">
                Privacy Policy
              </li>
              <li className="hover:text-orange-500 transition">
                Terms of Service
              </li>
            </ul>
          </div>

          {/* Newsletter and social icons */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              Stay Connected
            </h3>
            <p className="text-gray-400 mb-4">
              Get weekly recipe inspiration in your inbox
            </p>

            <div className="flex gap-3 mb-8">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-5 py-3 rounded-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 w-2/4 md:w-full"
              />
              <button className="bg-orange-600 hover:bg-orange-500 text-white p-3 rounded-full transition">
                <Mail size={20} />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5">
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2025 RannaFy. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Developed By{" "}
            <a
              href="https://www.linkedin.com/in/mohyminulislam"
              className="text-orange-500"
            >
              Mohyminul Islam
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

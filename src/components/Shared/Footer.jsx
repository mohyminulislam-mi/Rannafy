import { Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router";
import Logo from "../Shared/Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 md:w-11/12 mx-auto md:rounded-t-4xl">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand and Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your daily dose of delicious recipes made by real home cooks —
              just like you.
            </p>
            <p className="text-primary font-semibold mt-4">
              Cook. Share. Enjoy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Working Hours</h3>
            <ul className="space-y-3">
              <li className="hover:text-primary transition">
                <span className="text-primary font-bold">Open: </span> Friday -
                Saturday
              </li>
              <li className="hover:text-primary transition">
                <span className="text-primary font-bold">Close: </span> No Close
              </li>
              <li className="text-primary font-bold">Service 24/7</li>
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
                className="flex-1 px-5 py-3 rounded-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary w-2/4 md:w-full"
              />
              <button className="bg-primary hover:bg-primary text-white p-3 rounded-full transition cursor-pointer">
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
          <p>
            &copy; 2025 <span className="text-primary"> RannaFy.</span> All
            rights reserved.
          </p>
          <p className="mt-4 md:mt-0">
            Developed By{" "}
            <a
              href="https://www.linkedin.com/in/mohyminulislam/"
              className="text-primary"
              target="blank"
            >
              Mohyminul Islam
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

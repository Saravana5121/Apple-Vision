import logo from "../assets/logo1.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className="h-10 w-8 mr-2" />
            <span className="text-xl tracking-tight">Apple Vision</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 item-center">
            <a href="#" className="px-3 py-2 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-sky-500 to-sky-800 px-3 py-2 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col mt-4 space-y-4">
              <a href="#" className="px-3 py-2 text-center border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-sky-500 to-sky-800 px-3 py-2 rounded-md text-center"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

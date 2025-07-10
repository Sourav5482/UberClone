import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [menuOpen, setmenuOpen] = useState(false);

  const navigation = [
    { name: "Ride", href: "#" },
    { name: "Drive", href: "#" },
    { name: "Buisseness", href: "#" },
    { name: "About", href: "#" },
  ];

  return (
   <div className="overflow-x-hidden">
     <nav className="bg-black w-[100vw] text-white">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-7 h-16 flex items-center justify-between">
        {/* Logo and Desktop Nav */}
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold mr-10 sm:mr-2">
            Uber
          </a>

          <div className="hidden lg:flex space-x-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:bg-[#2e2d2d] p-2.5 rounded-3xl font-semibold"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Right Links */}
        <div className="hidden lg:flex items-center space-x-2">
          <a
            href="#"
            className="hover:bg-[#2e2d2d] py-2 px-4 rounded-3xl font-semibold"
          >
            EN
          </a>
          <a
            href="#"
            className="hover:bg-[#2e2d2d] py-2 px-4 rounded-3xl font-semibold"
          >
            Help
          </a>
          <a
            href="#"
            className="hover:bg-[#2e2d2d] py-2 px-4 rounded-3xl font-semibold"
          >
            Log in
          </a>
          <a
            href="#"
            className="bg-white text-black hover:bg-[#E2E2E2] py-2 px-4 rounded-3xl font-semibold"
          >
            Signup
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden">
          <button onClick={() => setmenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 py-3 space-y-2 bg-black">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block hover:bg-[#2e2d2d] py-2 px-4 rounded-3xl font-semibold"
            >
              {item.name}
            </a>
          ))}

          <hr className="my-2 border-gray-700" />

          <a
            href="#"
            className="block hover:bg-[#2e2d2d] py-2 px-4 rounded-3xl font-semibold"
          >
            EN
          </a>
          <a
            href="#"
            className="block hover:bg-[#2e2d2d] py-2 px-4 rounded-3xl font-semibold"
          >
            Help
          </a>
          <a
            href="#"
            className="block hover:bg-[#2e2d2d] py-2 px-4 rounded-3xl font-semibold"
          >
            Log in
          </a>
          <a
            href="#"
            className="block bg-white text-black hover:bg-[#E2E2E2] py-2 px-4 rounded-3xl font-semibold"
          >
            Signup
          </a>
        </div>
      )}
    </nav>
   </div>
  );
}

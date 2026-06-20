import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

import navLinks from "@/data/1.navLinks";
// import { Button } from "../ui/button";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header className="border-b dark:border-slate-800">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

        {/* Logo */}

        <div className="flex items-center gap-2">
          <img
            src="/src/image/logo-symbol.svg"
            alt="Logo"
            className="h-8 w-8"
          />

          <p className="text-xl font-bold">
            Your Logo
          </p>
        </div>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-10">

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                font-medium
                transition
                hover:text-orange-500
              "
            >
              {link.label}
            </a>
          ))}

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          {/* Dark Mode */}

          <button
            onClick={() => setIsDark(!isDark)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              transition
              hover:bg-slate-100
              dark:hover:bg-slate-800
            "
          >
            {isDark ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* Desktop CTA */}

           <button
            className="
              hidden
              md:flex
              rounded-full
              bg-orange-500
              px-8
              hover:bg-orange-600
            "
          >
            Let's Talk
          </button>

          {/* Mobile Menu */}

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}

      {isOpen && (
        <div
          className="
            md:hidden
            px-6
            pb-6
          "
        >
          <div className="flex flex-col gap-4">

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
              >
                {link.label}
              </a>
            ))}

            <button
              className="
                mt-2
                rounded-full
                bg-orange-500
              "
            >
              Let's Talk
            </button>

          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;
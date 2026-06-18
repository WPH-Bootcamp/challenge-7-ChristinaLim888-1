import navLinks from "@/data/1.navLinks";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

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

        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-medium transition hover:text-orange-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button
          className="rounded-full bg-orange-500 px-8 py-6 hover:bg-orange-600"
        >
          Let's Talk
        </Button>

      </nav>
    </header>
  );
};

export default Navbar;
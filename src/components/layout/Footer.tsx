import navLinks from "@/data/1.navLinks";
import socialLinks from "@/data/footer";
import logo from "@/assets/image/logo-symbol.svg";
import Container from "../constants/container";

const Footer = () => {
  return (
    <footer className="">
      <Container>
        <div className="mx-auto max-w-7xl rounded-3xl border bg-slate-50 px-8 py-10">
          {/* Top */}

          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            <h2 className="text-4xl font-bold uppercase leading-tight">
              LET'S DISCUSS <br />
              YOUR IDEAS
            </h2>

            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className="h-8 w-8" />
              <span className="text-2xl font-bold">Your Logo</span>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-gray-200" />

          {/* Bottom */}
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* Links */}
            <div className=" flex flex-wrap gap-8">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition hover:text-orange-500">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a key={index} href={social.href} className="flex h-12 w-12 items-center justify-center rounded-full border transition hover:bg-orange-500 hover:text-white">
                    <img src={Icon} alt="" className="h-8 w-8" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

import heroContent from "@/data/2.heroContent";
import { useState } from "react";
import Container from "../common/container";
import { Button } from "../ui/button";
import phone from "@/assets/image/light.png"

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="mx-auto flex max-w-7xl items-center justify-between px-8 py-20 ">
      <Container>
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold leading-tight">
            {heroContent.title}
            <br />

            <span className="text-orange-500">{heroContent.highlight}</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">{heroContent.description}</p>

          <Button className="mt-10 rounded-full bg-orange-500 px-8 py-6 hover:bg-orange-600" onClick={() => setIsOpen(true)}>
            {heroContent.buttonText}
          </Button>
        </div>

        {isOpen && (
          <div className="w-full bg-black text-white h-full absolute top-0 bottom-0 left-0 right-0">
            <h1>Pop up muncul</h1>
          </div>
        )}

        <div className="w-1/2">
          <img src={phone} alt="Hero Image" className="w-full" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;

import heroContent from "@/data/2.heroContent";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Container from "../constants/container";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isDark = document.documentElement.classList.contains("dark");

  return (
    <section className="px-8 py-20">
      <Container>
        <div className="flex items-center justify-between gap-10">
          <div className="max-w-xl">
            <h1 className="text-6xl font-bold leading-tight">
              {heroContent.title}

              <br />

              <span className="text-orange-500">
                {heroContent.highlight}
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              {heroContent.description}
            </p>

            <Button
              className="mt-10 rounded-full bg-orange-500 px-8 py-6 hover:bg-orange-600"
              onClick={() => setIsOpen(true)}
            >
              {heroContent.buttonText}
            </Button>
          </div>

          <div className="w-1/2">
            <img
              src={
                isDark
                  ? heroContent.image.dark
                  : heroContent.image.light
              }
              alt={heroContent.title}
              className="w-full"
            />
          </div>
        </div>

        {isOpen && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/90 text-white">
            <h1>Pop up muncul</h1>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Hero;
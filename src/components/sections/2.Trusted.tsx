import {brands} from "@/data/3.brands";
import Container from "../common/container";

const Trusted = () => {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-2xl font-semibold text-black">
            Trusted by Global Innovators & Leading Trusted
          </h2>

          {/* Gradient kiri */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-10
              h-full
              w-32
              bg-gradient-to-r
              from-white
              to-transparent
            "
          />

          {/* Gradient kanan */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-10
              h-full
              w-32
              bg-gradient-to-l
              from-white
              to-transparent
            "
          />

          <div className="flex overflow-hidden border border-blue-600">
            <div
              className="
                flex 
                items-center
                animate-marquee
                gap-10
              "
            >
              {[...brands, ...brands].map((brand, index) => (
                <img
                  key={`${brand.name}-${index}`}
                  src={brand.logo}
                  alt={brand.name}
                  style={{height: `${brand.height}px`}}
                  className="
                    w-auto border border-red-600
                    shrink-0
                    grayscale
                    opacity-70
                    transition-all
                    duration-300
                    hover:grayscale-0
                    hover:opacity-100
                  "
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Trusted;
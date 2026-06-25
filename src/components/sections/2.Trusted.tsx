import { brands } from "@/data/3.brands";
import { sectionContent } from "@/data/sectionContent";
import Container from "../constants/container";
import SectionHeader from "../constants/SectionHeader";

const Trusted = () => {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <SectionHeader 
        title={sectionContent.trusted.title} 
        subtitle={sectionContent.trusted.subtitle} 
        titleAlign="center" 
        subtitleAlign="center" />

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

        <div className="flex">
          <div
            className="
              flex
              max-w-full
              animate-marquee
              items-center
              gap-10
              overflow-x-auto
              scrollbar-none
            "
          >
            {[...brands, ...brands].map((brand, index) => (
              <img
                key={`${brand.name}-${index}`}
                src={brand.logo}
                alt={brand.name}
                style={{
                  height: `${brand.height}px`,
                }}
                className="
                  w-auto
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
      </Container>
    </section>
  );
};

export default Trusted;

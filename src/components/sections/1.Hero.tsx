import heroContent from "@/data/2.heroContent";
// import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="mx-auto flex max-w-7xl items-center justify-between px-8 py-20">
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold leading-tight">
          {heroContent.title}
          <br />

          <span className="text-orange-500">{heroContent.highlight}</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600">{heroContent.description}</p>

        <button className="mt-10 rounded-full bg-orange-500 px-8 py-6 hover:bg-orange-600">{heroContent.buttonText}</button>
      </div>

      <div className="w-1/2">
        <img src={heroContent.image} alt="Hero Image" className="w-full" />
      </div>
    </section>
  );
};

export default Hero;

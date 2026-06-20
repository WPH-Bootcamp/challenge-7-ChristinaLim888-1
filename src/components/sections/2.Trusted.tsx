import brands from "@/data/3.brands";

const Brands = () => {
  return (
    <section className="py-16">

      <div className="mx-auto max-w-7xl px-8">

        <h2 className="mb-10 text-center text-lg font-semibold text-gray-500">
          Trusted by Global Innovators & Leading Brands
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-12">

          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.logo}
              alt={brand.name}
              className="h-8 object-contain grayscale hover:grayscale-0 transition"
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Brands;
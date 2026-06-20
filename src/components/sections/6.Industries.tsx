import { useState } from "react";
import industries from "@/data/7.industries";

const Industries = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold">Built for Your Industry</h2>

        <p className="mt-4 text-gray-500">We've helped companies across industries launch smarter, faster, and more securely.</p>

        <div
          className="
          mt-16
          grid
          gap-10
          lg:grid-cols-[250px_1fr]
        "
        >
          {/* Menu */}

          <div className="space-y-8">
            {industries.map((industry, index) => (
              <button
                key={industry.title}
                onClick={() => setActive(index)}
                className={`
                  block
                  border-l-4
                  pl-4
                  text-left
                  text-2xl
                  font-semibold

                  ${active === index ? "border-orange-500 text-orange-500" : "border-gray-300"}
                `}
              >
                {industry.title}
              </button>
            ))}
          </div>

          {/* Content */}

          <div>
            <p className="text-lg text-gray-500">{industries[active].description}</p>

            <img
              src={industries[active].image}
              alt=""
              className="
                mt-8
                h-[400px]
                w-full
                rounded-3xl
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;

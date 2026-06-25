import { useState } from "react";
import industriesData from "@/data/7.industries";
import Container from "../constants/container";
import SectionHeader from "../constants/SectionHeader";

const Industries = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="">
      <Container>
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Built for Your Industry" subtitle="We've helped companies across industries launch smarter, faster, and more securely." align="left" />
          <div className="mt-16 grid gap-10 lg:grid-cols-[250px_1fr]">
            {/* Menu */}

            <div className="space-y-8">
              {industriesData.map((industry, index) => (
                <button
                  key={industry.title}
                  onClick={() => setActive(index)}
                  className={`block border-l-4 pl-4 text-left text-2xl font-semibold
                  ${active === index ? "border-orange-500 text-orange-500" : "border-gray-300"}`}
                >
                  {industry.title}
                </button>
              ))}
            </div>

            {/* Content */}

            <div>
              <p className="text-lg ">{industriesData[active].description}</p>

              <img
                src={industriesData[active].image}
                alt=""
                className="
                mt-8 h-[400px] w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Industries;

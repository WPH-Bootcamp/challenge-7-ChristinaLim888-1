import processSteps from "@/data/5.Process";
import { ChevronUp } from "lucide-react";

const Process = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Our Process</h2>

          <p className="mt-4 text-gray-500">Clear steps. Smart execution. Results you can count on.</p>
        </div>

        <div className="relative mt-20">
          {/* garis tengah desktop */}

          <div
            className="
            absolute
            left-1/2
            top-0
            hidden
            h-full
            w-[2px]
            -translate-x-1/2
            bg-gray-200
            lg:block
          "
          />

          <div className="space-y-10">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`
                  flex items-center
                  ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}
                `}
              >
                {/* Card */}

                <div className="w-full lg:w-1/2">
                  <div
                    className="
                    rounded-2xl
                    border
                    bg-white
                    p-6
                    shadow-sm
                  "
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold">{step.title}</h3>

                        <p className="mt-3 text-gray-500">{step.description}</p>
                      </div>

                      <ChevronUp size={20} />
                    </div>
                  </div>
                </div>

                {/* Number */}

                <div
                  className="
                  hidden
                  lg:flex
                  w-20
                  justify-center
                "
                >
                  <div
                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-orange-500
                    font-bold
                    text-white
                  "
                  >
                    {step.id}
                  </div>
                </div>

                <div className="hidden lg:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

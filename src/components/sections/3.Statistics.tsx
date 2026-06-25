import stats from "@/data/4.stats";
import Container from "../constants/container";
import SectionHeader from "../constants/SectionHeader";
// import { SectionContent } from "@/components/";

const Statistics = () => {
  return (
    <section>
      <Container>
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="End-to-End IT Solutions That Drive Results" subtitle="From strategy to execution, we deliver solutions that grow your business." align="center" />

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="
                  flex
                  aspect-square
                  items-center
                  justify-center
                  rounded-full
                  bg-neutral-50
                  text-center border border-neutral-200
                "
              >
                <div>
                  <h3 className="text-5xl font-bold text-orange-500">{item.value}</h3>

                  <p className="mt-4 text-lg">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Statistics;

import portfolios from "@/data/8.portofolios";
import Container from "../constants/container";
import SectionHeader from "../constants/SectionHeader";

const Portfolio = () => {
  return (
    <section className="">
      <Container>
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <SectionHeader title="From Vision to Launch! Projects We're Proud Of" subtitle="Take a closer look at our recent work powering startups, enterprises, and everything in between." align="center" />
          </div>

          <div
            className="
          mt-16
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
        "
          >
            {portfolios.map((portfolio) => (
              <article key={portfolio.title} className="group">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={portfolio.image}
                    alt={portfolio.title}
                    className="
                  transition
                  duration-500
                  group-hover:scale-105
                "
                  />
                </div>

                <p
                  className="
                mt-6
                text-orange-500
                font-medium
              "
                >
                  {portfolio.category}
                </p>

                <h3 className="mt-2 text-3xl font-semibold">{portfolio.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;

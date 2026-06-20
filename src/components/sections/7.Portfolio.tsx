import portfolios from "@/data/8.portofolios";

const Portfolio = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">From Vision to Launch! Projects We're Proud Of</h2>

          <p className="mt-4 text-gray-500">Take a closer look at our recent work.</p>
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
    </section>
  );
};

export default Portfolio;

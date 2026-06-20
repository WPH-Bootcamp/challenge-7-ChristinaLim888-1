import stats from "@/data/4.stats";

const Statistics = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold">End-to-End IT Solutions That Drive Results</h2>

          <p className="mt-4 text-gray-500">From strategy to execution, we deliver solutions that grow your business.</p>
        </div>

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
                bg-slate-900
                text-center
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
    </section>
  );
};

export default Statistics;

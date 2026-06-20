import services from "@/data/6.services";

import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Smart IT Solutions That Grow With You</h2>

          <p className="mt-4 text-gray-500">Tailored tech to boost efficiency, security, and results.</p>
        </div>

        <div
          className="
          mt-16
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-3
        "
        >
          {services.map((service) => (
            <Card
              key={service.title}
              className="
              rounded-2xl
              transition
              hover:-translate-y-1
            "
            >
              <CardContent className="p-6">
                <img src={service.icon} alt={service.title} className="h-16" />

                <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>

                <p className="mt-4 text-gray-500">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

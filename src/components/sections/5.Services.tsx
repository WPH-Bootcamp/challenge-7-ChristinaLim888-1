import services from "@/data/6.services";

import { Card, CardContent } from "@/components/ui/card";
import Container from "../constants/container";
import SectionHeader from "../constants/SectionHeader";

const Services = () => {
  return (
    <section className="">
      <Container>
        <div className="mx-auto max-w-7xl ">
          <SectionHeader title="Smart IT Solutions That Grow With You" subtitle="Tailored tech to boost efficiency, security, and results." align="center" />

          <div
            className=" grid gap-6
          md:grid-cols-2 
          lg:grid-cols-3
        "
          >
            {services.map((service) => (
              <Card
                key={service.title}
                className="
              rounded-2xl mt-6 relative border border-[#dedcdc] bg-[#fafafa]
              transition overflow-visible 
              hover:-translate-y-1 duration-300
            "
              >
                <CardContent className="px-6">
                  <img src={service.pic} alt={service.title} className="h-18 w-18 absolute left-15 -translate-x-1/2 top-[-25px] object-contain" />

                  <h3 className="mt-10 text-2xl font-semibold">{service.title}</h3>

                  <p className="mt-2 mb-2 text-[15px] text-gray-500 leading-7">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;

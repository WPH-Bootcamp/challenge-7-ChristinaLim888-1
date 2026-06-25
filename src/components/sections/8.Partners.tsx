// import { useState } from "react";
import Container from "../constants/container";
import SectionHeader from "../constants/SectionHeader";
import PartnerCard from "./partnerCard";
import { partnersData } from "@/data/9.partnersData";

export default function PartnerSection() {
  // const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="">
      <Container>
        <div className="relative left-1/2 w-screen -translate-x-1/2 ">
          <SectionHeader title="What Partners Say About Working With Us" subtitle="Trusted voices. Real experiences. Proven results." align="center" />
          <div className="flex gap-4 relative mx-auto ">
            {partnersData.map((partner) => (
              <PartnerCard key={partner.name} {...partner} />
            ))}
          </div>

          {/* Dots */}
          {/* <div className="mt-20 flex justify-center gap-3">
            {partnersData.map((partner, index) => (
              <PartnerCard key={partner.name} {...partner} active={index === activeIndex} />
            ))}
          </div> */}
        </div>
      </Container>
    </section>
  );
}

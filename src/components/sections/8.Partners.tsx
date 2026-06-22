import Container from "../common/container";
import SectionHeader from "../common/sectionHeader";
import PartnerCard from "./partnerCard";
import { partnersData } from "@/data/partnersData";

export default function PartnerSection() {
  return (
    <section className="">
      <Container>
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
          title="What Partners Say About Working With Us"
          subtitle=""
          align="center"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partnersData.map((partner) => (
              <PartnerCard key={partner.name} {...partner} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

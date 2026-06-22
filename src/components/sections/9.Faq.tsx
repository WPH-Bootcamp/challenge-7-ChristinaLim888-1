import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { faqData } from "@/data/faqData";
import Container from "../common/container";
import SectionHeader from "../common/sectionHeader";

export default function FaqSection() {
  return (
    <section className="">
      <Container>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader title="Need Help? Start Here." subtitle="Everything you need to know — all in one place." align="center" />
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_330px]">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>

                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="rounded-3xl bg-orange-600 p-6 text-white">
              <h3 className="text-4xl font-bold">Let's talk it through</h3>

              <p className="mt-4">book a free consultation with our team.</p>

              <img src="/images/meeting.jpg" alt="meeting" className="mt-6 rounded-2xl" />

              <button
                className="
              mt-6
              w-full
              rounded-full
              bg-black
              py-4
            "
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

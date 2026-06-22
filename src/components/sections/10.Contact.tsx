import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import { services } from "@/data/services";
import Container from "../common/container";
import SectionHeader from "../common/sectionHeader";

export default function ContactSection() {
  return (
    <section className="">
      <Container>
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <SectionHeader
            title="Ready to Start? Let's Talk."
            subtitle="Tell us what you need."
            align="center"
            />
          </div>

          <form className="mt-12 space-y-6">
            <Input placeholder="Enter your name" />

            <Input placeholder="Enter your email" />

            <Textarea placeholder="Enter your message" className="min-h-[180px]" />

            <div className="grid gap-4 md:grid-cols-2">
              {services.map((service) => (
                <label key={service} className="flex items-center gap-3">
                  <Checkbox />

                  <span>{service}</span>
                </label>
              ))}
            </div>

            <Button
              className="
            w-full
            rounded-full
            py-7
          "
            >
              Send
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}

// data/heroContent.ts

import type { HeroData } from "@/types/4.hero";
import light from "@/assets/image/light.png"
import dark from "@/assets/image/dark.svg"

const heroContent: HeroData = {
  title: "Your Tech Partner for",
  highlight: "Smarter Growth",
  description:
    "We deliver tailored IT solutions to help you scale with speed and confidence.",
  buttonText: "Let's Talk",
  buttonLink: "/contact",
  image: {light, dark},
};

export default heroContent;
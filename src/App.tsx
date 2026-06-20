/**
 * Main App Component
 *
 * TODO untuk mentee:
 * 1. Import Home page component (setelah dibuat)
 * 2. Render Home component di sini
 * 3. Atau setup routing jika membuat multiple pages
 *
 * Current: Placeholder untuk testing Tailwind setup
 */

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/1.Hero";
import Brands from "@/components/sections/2.Trusted";
import Statistics from "@/components/sections/3.Statistics";
import Process from "@/components/sections/4.Process";
import Services from "@/components/sections/5.Services";
import Industry from "@/components/sections/6.Industries";
import Portfolio from "@/components/sections/7.Portfolio";
import Testimonials from "@/components/sections/8.Testimonials";
import Faq from "@/components/sections/9.Faq";
import Contact from "@/components/sections/10.Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      {/* <Statistics /> */}
      {/* <Process /> */}
      {/* <Services /> */}
      {/* <Industry /> */}
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      {/* <Faq /> */}
      {/* <Contact /> */}

      <Footer />
    </>
  );
}

export default App;
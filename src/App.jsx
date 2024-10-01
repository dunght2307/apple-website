import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
import Features from "./components/Features";

import * as Sentry from "@sentry/react";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Ribbon from "./components/Ribbon";

const App = () => {
  return (
    <main className="bg-black font-inter">
      <Navbar />
      <Ribbon />
      <Hero />
      <Highlights />
      <Model />
      {/* <Features />
      <HowItWorks /> */}
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);

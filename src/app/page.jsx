import React from "react";
import Hero from "@/components/hero/page";
import Stats from "@/components/stats/page";
import Projects from "./projects/page";
import About from "@/components/about/page";
import Contact from "./contact/page";
const page = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Projects/>
      <About/>
      <Contact/>
    </div>
  );
};

export default page;

"use client";

import Gostrols from "./components/Home/Gostrols/Gostrols";
import StandUppers from "./components/Home/StandUppers/StandUppers";
import Programs from "./components/Home/Programs/Programs";
import Audios from "./components/Home/Audios/Audios";
import Gallery from "./components/Home/Gallery/Gallery";
import Retro from "./components/Home/Retro/Retro";
import Hero from "./components/Hero/Hero";
import Locations from "./components/Home/Locations/Locations";
import News from "./components/Home/News/News";
import Partners from "./components/Home/Partners/Partners";

export default function Home() {

  return (
    <main className="main">
      <Hero />
      <StandUppers />
      <Programs />
      <Gostrols />
      <Locations />
      <Retro />
      <Gallery />
      <Audios />
      <News />
      <Partners />
    </main>
  );
}

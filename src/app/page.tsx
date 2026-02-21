import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Research } from '@/components/sections/Research';
import { Leadership } from '@/components/sections/Leadership';
import { Achievements } from '@/components/sections/Achievements';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Research />
      <Leadership />
      <Achievements />
      <Education />
      <Contact />
    </>
  );
}

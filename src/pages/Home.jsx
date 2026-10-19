import { MainTemplate } from '../components/templates/MainTemplate';
import { HeroProfile } from '../components/organisms/HeroProfile';
import { Experience } from '../components/organisms/Experience';
import { Education } from '../components/organisms/Education';
import { Projects } from '../components/organisms/Projects';
import { Contact } from '../components/organisms/Contact';

export const Home = () => {
  return (
    <MainTemplate>
      <HeroProfile />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </MainTemplate>
  );
};
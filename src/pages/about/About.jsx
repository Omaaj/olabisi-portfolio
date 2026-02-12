import "./About.scss";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import HowIWork from "./HowIWork";
import Seperator from "../../reusableComponent/seperator/Seperator";

export default function About() {
  return (
    <main className="mx-auto customTablet1:container">
      <section className="px-4 py-10 customMiniTablet:px-10">
        <AboutMe />
        <Seperator />
        <Skills />
        <Seperator />
        <HowIWork />
      </section>
    </main>
  );
}

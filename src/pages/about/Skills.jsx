import Note from "../../reusableComponent/note/Note";
import Subtitle from "../../reusableComponent/subtitle/Subtitle";
import { skillDetails } from "./aboutDetails";

const Skills = () => {
  return (
    <section className="skills">
      <Subtitle first="What I" second="Work With" />
      <p className="mt-2 text-customGray-800">
        I use tools that are common in production environments and choose them
        based on the problem at hand.
      </p>
      <div className="mt-3">
        <h1 className="my-4 text-xl font-bold uppercase text-customOrange-100">
          Skills
        </h1>
        <div className="space-y-5 ">
          {skillDetails.map((skill) => (
            <div key={skill.title} className="space-y-1 ">
              <h2 className="text-lg font-bold tracking-wide">{skill.title}</h2>
              <h3 className="tracking-wider font-extralight">{skill.skills}</h3>
              <p className="text-[15px] max-w-[1100px]">{skill.info}</p>
            </div>
          ))}
        </div>
        <Note content="rounded-full h-[90px] customMiniTablet:h-[50px] w-1 bg-[#585858]">
          I’m comfortable picking up new tools when needed, but I always
          prioritize fundamentals, readability, and long-term maintainability.
        </Note>
      </div>
    </section>
  );
};

export default Skills;

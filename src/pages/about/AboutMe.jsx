import Note from "../../reusableComponent/note/Note";
import Subtitle from "../../reusableComponent/subtitle/Subtitle";
import { aboutMeDetails } from "./aboutDetails";

const AboutMe = () => {
  return (
    <section className="about">
      <Subtitle first="About" second="Me" />
      <div className="mt-2 max-w-[1000px] text-customGray-800 font-medium space-y-4  customMiniTablet:[&>p]:text-justify">
        {aboutMeDetails.map((abt) => (
          <p key={abt}> {abt}</p>
        ))}
        <Note content="rounded-full h-[140px] customMiniTablet:h-[70px] w-1.5 bg-[#585858]">
          I write code that reads like plain language. That way, engineers can
          collaborate faster, and non-technical teammates can still understand
          what the system is doing. Clarity, reliability, and intention guide
          every decision I make.
        </Note>
      </div>
    </section>
  );
};

export default AboutMe;

import Note from "../../reusableComponent/note/Note";
import Subtitle from "../../reusableComponent/subtitle/Subtitle";
import { howIWorkDetails } from "./aboutDetails";

const HowIWork = () => {
  return (
    <section>
      <Subtitle first="How I" second="Work" />
      <div className="mt-2 max-w-[1000px] text-customGray-800 font-medium space-y-4  customMiniTablet:[&>p]:text-justify">
        {howIWorkDetails.map((abt) => (
          <p key={abt}> {abt}</p>
        ))}
        <Note content="rounded-full h-[120px] customMiniTablet:h-[50px] w-1.5 bg-[#585858]">
          If you’re looking for a frontend engineer who understands more than
          just interfaces, someone who can be trusted with real features in a
          real product. I’m ready to contribute.
        </Note>
      </div>
    </section>
  );
};

export default HowIWork;

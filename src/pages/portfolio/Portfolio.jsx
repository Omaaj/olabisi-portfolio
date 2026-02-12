import Seperator from "../../reusableComponent/seperator/Seperator";
import "./Portfolio.scss";
import Production from "./production/Production";
import Professional from "./professional/Professional";
import SystemDesign from "./systemDesign/SystemDesign";

export default function Portfolio() {
  return (
    <main className="px-4 py-7 customXlg:pl-6 customXlg:pr-24">
      <h2 className="mb-5 text-4xl font-bold customMiniTablet:text-center text-customOrange-100">
        <span>Portfolio</span>
      </h2>
      <section className="mx-auto customTablet1:container pb-2">
        <Production />
        <Seperator />
        <Professional />
        <Seperator />
        <SystemDesign />
      </section>
    </main>
  );
}

import Subtitle from "../../../reusableComponent/subtitle/Subtitle";
import MainPage from "../../../components/assets/portfolio/systems/sys1.png";
import { systemDetails } from "../portfollioDetails";
import ProductionCard from "../production/ProductionCard";

const SystemDesign = () => {
  return (
    <section>
      <Subtitle first="System Design &" second="Concept Applications" />
      <div className="space-y-4 customMiniTablet:space-y-0 customMiniTablet:flex mt-5 gap-4 relative">
        <div className="flex-[2]">
          <img
            src={MainPage}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="flex-[1.7] relative">
          {systemDetails.map((prod) => (
            <ProductionCard key={prod.id} prod={prod} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemDesign;

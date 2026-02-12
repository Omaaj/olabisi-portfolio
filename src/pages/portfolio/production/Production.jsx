import Subtitle from "../../../reusableComponent/subtitle/Subtitle";
import { productionWorkDetails } from "../portfollioDetails";
import ProductionCard from "./ProductionCard";

const Production = () => {
  return (
    <section>
      <Subtitle first="Production" second="Work" />
      <div className="relative grid-cols-2 gap-5 mt-5 space-y-6 customMiniTablet:grid customXlg:grid-cols-3 customMiniTablet:space-y-0">
        {productionWorkDetails.map((prod) => (
          <ProductionCard key={prod.id} prod={prod} />
        ))}
      </div>
    </section>
  );
};

export default Production;

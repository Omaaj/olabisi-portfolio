import { useParams } from "react-router-dom";
import { productionWorkDetails, systemDetails } from "../../portfollioDetails";
import FirstSection from "./section/FirstSection";
import SecondSection from "./section/SecondSection";
import BlurBackground from "../../../../reusableComponent/blurBackground/BlurBackground";
import Modal from "../../../../reusableComponent/modal/Modal";
import ProductionModalCard from "./ProductionModalCard";
import { useState } from "react";
import useOutsideClick from "../../../../hooks/useOutsideClick";
import useSelectedIndexItem from "../../../../hooks/useSelectedIndexItem";

const ProductionDetails = () => {
  const { productionId } = useParams();

  const allProductions = [...productionWorkDetails, ...systemDetails];

  const findProductionDetails = allProductions.find(
    (produ) => produ.title === productionId,
  );

  const [openModalImage, setOpenModalImage] = useState(false);
  const { mainClickRef } = useOutsideClick(setOpenModalImage);
  const productImages = findProductionDetails.images;
  const { handleSelectedIndex, selectedIndex, setSelectedIndex } =
    useSelectedIndexItem(productImages);
  const selectedImages = productImages[selectedIndex];

  const handleNextPage = () => {
    setSelectedIndex((prevMove) =>
      prevMove === productImages.length - 1 ? 0 : prevMove + 1,
    );
  };

  const handlePrevImage = () => {
    setSelectedIndex((prevMove) =>
      prevMove === 0 ? productImages.length - 1 : prevMove - 1,
    );
  };

  return (
    <>
      <main className="customMiniTablet:pl-8 px-4  customMiniTablet:pr-24 customXlg:pr-32 py-5 space-y-10  customTablet1:container mx-auto">
        <FirstSection
          findProductionDetails={findProductionDetails}
          productImages={productImages}
          handleSelectedIndex={handleSelectedIndex}
          selectedIndex={selectedIndex}
          setOpenModalImage={setOpenModalImage}
          selectedImages={selectedImages}
        />
        <SecondSection findProductionDetails={findProductionDetails} />
      </main>
      {openModalImage && (
        <BlurBackground>
          <div ref={mainClickRef}>
            <Modal
              isOpen={openModalImage}
              contentClass1="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 w-full customTablet1:w-max  px-10"
            >
              <ProductionModalCard
                selectedItems={selectedImages}
                handleNextPage={handleNextPage}
                handlePrevImage={handlePrevImage}
              />
            </Modal>
          </div>
        </BlurBackground>
      )}
    </>
  );
};

export default ProductionDetails;

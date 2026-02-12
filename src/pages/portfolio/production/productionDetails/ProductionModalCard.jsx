import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const ProductionModalCard = ({
  selectedItems,
  handleNextPage,
  handlePrevImage,
}) => {
  return (
    <section className="flex justify-center items-center relative px-10  select-none ">
      <div className=" w-full max-w-[900px] ">
        <img
          src={selectedItems.img}
          alt=""
          className="w-full h-full rounded object-cover"
        />
      </div>
      <div className="absolute flex justify-between w-full items-center cursor-pointer">
        <p
          onClick={handlePrevImage}
          className="text-white bg-customGray-400 w-8 h-8 rounded-full flex text-lg justify-center items-center hover:bg-customRed-200 transist"
        >
          <FaChevronLeft />
        </p>
        <p
          onClick={handleNextPage}
          className="text-white bg-customGray-400 w-8 h-8 rounded-full flex text-lg justify-center items-center hover:bg-customRed-200 transist"
        >
          <FaChevronRight />
        </p>
      </div>
    </section>
  );
};

export default ProductionModalCard;

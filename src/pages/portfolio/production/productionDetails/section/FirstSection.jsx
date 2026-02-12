import clsx from "clsx";
import ScrollBar from "../../../../../reusableComponent/scrollBar/ScrollBar";
import { roleDetails } from "../../../portfollioDetails";
import { Link } from "react-router-dom";

const FirstSection = ({
  findProductionDetails,
  productImages,
  handleSelectedIndex,
  selectedIndex,
  setOpenModalImage,
  selectedImages,
}) => {
  const liveActive = () => (
    <div className="flex items-center gap-1.5 mb-2  text-customGray-800">
      <span className="font-medium text-green-600">Live</span>
      <div className="flex items-center gap-2">
        <span className="relative flex w-3 h-3">
          <span className="absolute inline-flex w-full h-full bg-green-500 rounded-full opacity-75 animate-ping"></span>
          <span className="relative inline-flex w-3 h-3 bg-green-500 rounded-full"></span>
        </span>
      </div>{" "}
      in active use by real users
    </div>
  );

  const getRoleDetails = roleDetails(findProductionDetails, liveActive());

  return (
    <>
      <section className="customXlg:flex gap-5 text-customGray-800 customXlg:space-y-0 space-y-5">
        <div className="customMiniTablet:flex gap-3 max-h-[500px]">
          <ScrollBar maxHeight="350px">
            <div className="space-y-2">
              {productImages.map((prod, index) => (
                <div
                  className="max-w-24 cursor-pointer"
                  onClick={() => handleSelectedIndex(prod.id)}
                  key={prod.id}
                >
                  <img
                    src={prod.img}
                    alt=""
                    className={clsx(
                      "w-full h-full rounded object-cover ",
                      selectedIndex === index &&
                        "border-2 p-0.5 border-customRed-200",
                    )}
                  />
                </div>
              ))}
            </div>
          </ScrollBar>
          <div
            className="overflow-x-auto scrollbar-custom block customMiniTablet:hidden mt-2.5 mb-4"
            style={{ width: "calc(100vw - 100px)" }}
          >
            <div className="flex space-x-3 ">
              {productImages.map((prod, index) => (
                <div
                  className="flex-shrink-0 w-20 cursor-pointer"
                  onClick={() => handleSelectedIndex(prod.id)}
                  key={prod.id}
                >
                  <img
                    src={prod.img}
                    alt=""
                    className={clsx(
                      "w-full h-full rounded object-cover ",
                      selectedIndex === index &&
                        "border-2 p-0.5 border-customRed-200",
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
          <div
            className="w-full  customXlg:w-[500px] cursor-pointer"
            onClick={() => {
              if (window.innerWidth > 600) {
                setOpenModalImage(true);
              }
            }}
          >
            <img
              src={selectedImages.img}
              alt=""
              className="w-full h-full rounded object-cover"
            />
          </div>
        </div>
        <div>
          <div className="mb-3">
            <h1 className="text-customYellow-100 text-3xl font-bold mb-0.5">
              {findProductionDetails.title}
            </h1>
            <p className="text-lg">{findProductionDetails.pageSubtitle}</p>
          </div>
          <p>{findProductionDetails.pageInfo}</p>
          <div className="mt-4 space-y-2">
            {getRoleDetails.map((rol, i) => (
              <div className="flex gap-2" key={i}>
                <h3 className="font-bold text-customGray-400">{rol.title}</h3>
                <p>{rol.value}</p>
              </div>
            ))}
          </div>
          <div className="flex w-full gap-3 mt-4">
            <button className="font-bold tracking-wider text-customGreen-300  ">
              <Link to={findProductionDetails.urlLink} target="_blank">
                View Live
              </Link>
            </button>
            {/* <p className="w-[1px] bg-customGray-800"></p>
            <button className="font-bold tracking-wider text-customRed-200  ">
              <Link>Source Code</Link>
            </button> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSection;

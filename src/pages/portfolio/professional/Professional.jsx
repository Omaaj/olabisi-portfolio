import { FaChevronDown } from "react-icons/fa";
import Subtitle from "../../../reusableComponent/subtitle/Subtitle";
import { professionalDetails } from "../portfollioDetails";
import { BsDashLg } from "react-icons/bs";
import useSingleAccordion from "../../../hooks/useSingleAccordion";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Professional = () => {
  const { selectedId, handleSelectedId } = useSingleAccordion();

  return (
    <section>
      <Subtitle first="Professional" second=" Experience" />
      <div className="space-y-3">
        {professionalDetails.map((profe) => {
          const {
            challenges,
            contribution,
            impact,
            info,
            stack,
            url,
            id,
            title,
            company,
            companyBrand,
            year,
          } = profe;
          return (
            <div
              className="w-full border-b border-b-customGray-800 py-4 pr-3"
              key={id}
            >
              <div
                className="flex justify-between items-center  cursor-pointer"
                onClick={() => handleSelectedId(id)}
              >
                <div className=" space-y-1 customTablet1:space-y-0 customTablet1:flex gap-2 items-center">
                  <h2 className="text-lg font-bold uppercase">{company}</h2>
                  <p className="hidden customTablet1:block">
                    <BsDashLg size={30} />
                  </p>
                  <p className=" customTablet1:border-r-2 border-r-customGray-800 customTablet1:pr-2">
                    {companyBrand}
                  </p>
                  <p>{title}</p>
                  <span className="text-sm text-customGray-400">({year})</span>
                </div>
                <motion.p
                  animate={{ rotate: selectedId === id ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg text-customGray-800"
                >
                  <FaChevronDown />
                </motion.p>
              </div>
              <AnimatePresence>
                {selectedId === id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="customTablet1:pr-10"
                  >
                    <p>
                      <Link
                        to={url}
                        className="text-customRed-200 underline font-bold flex items-center gap-1 w-max mt-1"
                      >
                        {company}
                      </Link>
                    </p>
                    <p className="my-3 text-white">{info}</p>
                    <div className="space-y-6 my-2 text-white">
                      <div className="">
                        <h2 className="font-bold">Key Contributions</h2>
                        <ul className="text-[15px] pl-3 list-disc space-y-2 mt-2 font-light">
                          {contribution.map((con) => (
                            <li key={con}>{con}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h2 className="font-bold mb-1">Technologies Used</h2>
                        <p>{stack}</p>
                      </div>
                      <div>
                        <h2 className="font-bold">Challenges & Growth</h2>
                        <ul className="text-[15px] pl-3 list-disc space-y-2 mt-2 font-light">
                          {challenges.map((con) => (
                            <li key={con}>{con}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h2 className="font-bold">Impact</h2>
                        <ul className="text-[15px] pl-3 list-disc space-y-2 mt-2 font-light">
                          {impact.map((con) => (
                            <li key={con}>{con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Professional;

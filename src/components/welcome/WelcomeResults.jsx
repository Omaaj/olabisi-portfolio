import WelcomeResultsCard from "./WelcomeResultsCard";
import { useContext } from "react";
import { WelcomeContext } from "../../context/welcome/WelcomeContext";
import useLazyLoading from "../../hooks/useLazyLoading";
import clsx from "clsx";
import ContactResults from "./contactResults/ContactResults";

const WelcomeResults = () => {
  const { allWelcome, loading } = useContext(WelcomeContext);
  const { showLoading } = useLazyLoading(loading);

  return (
    <>
      <div className="px-3 py-8 customMiniTablet:py-8 customMiniTablet:px-24">
        <h2 className="mb-10 text-lg customMiniTablet:text-center customMiniTablet:text-2xl">
          COUNTRIES PORTFOLIO VISITED
        </h2>
        <div
          className={clsx(
            "overflow-y-auto scrollbar-custom customMiniTablet:block",
          )}
          style={{ height: `calc(100vh - 150px)` }}
        >
          <div className="space-y-6 ">
            {showLoading ? (
              <p>Loading...</p>
            ) : allWelcome && allWelcome?.length > 0 ? (
              allWelcome
                ?.slice()
                .sort((a, b) => b.timeStamp.localeCompare(a.timeStamp))
                .map((wel) => <WelcomeResultsCard key={wel.id} welc={wel} />)
            ) : (
              <p>No Location Yet</p>
            )}
          </div>
        </div>
      </div>
      <ContactResults />
    </>
  );
};

export default WelcomeResults;

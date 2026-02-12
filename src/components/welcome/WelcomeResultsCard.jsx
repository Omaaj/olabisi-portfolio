import WelcomeDate from "./WelcomeDate";

const WelcomeResultsCard = ({ welc }) => {
  const { city, country, quantity, region, timeStamp } = welc;

  return (
    <div className="flex justify-center w-full">
      <div className="p-6 shadow-xl rounded-3xl bg-customGray-900 customMiniTablet:w-[500px] w-full">
        <div className="text-customGray-800">
          <h2 className="mb-2 text-lg font-bold text-center customMiniTablet:text-xl text-customGray-600">
            {country}
          </h2>
          <div className="flex justify-between gap-6 customMiniTablet:justify-center customMiniTablet:gap-32">
            <div className="space-y-3">
              <div className="flex gap-2 [&>h3]:font-bold [&>h3]:text-customGray-400 [&>p]:font-light">
                <h3>City : </h3>
                <p>{city}</p>
              </div>
              <div className="flex gap-2 [&>h3]:font-bold [&>h3]:text-customGray-400 [&>p]:font-light">
                <h3>Region : </h3>
                <p>{region}</p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 [&>h3]:font-bold [&>h3]:text-customGray-400 [&>p]:font-light">
                <h3>Visited :</h3>
                <p>{quantity > 1 ? `${quantity} times` : `${quantity} time`}</p>
              </div>
              <WelcomeDate timeStamps={timeStamp} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeResultsCard;

import Note from "../../../../../reusableComponent/note/Note";
import Seperator from "../../../../../reusableComponent/seperator/Seperator";
import Subtitle from "../../../../../reusableComponent/subtitle/Subtitle";

const SecondSection = ({ findProductionDetails }) => {
  const {
    purpose,
    purposeDetails,
    responsibilitie,
    features,
    challenges,
    debugging,
    demostrate,
    listPurpose,
    adminFeatures,
    globalFeatures,
    platform,
  } = findProductionDetails;

  return (
    <section className="text-white">
      <div>
        <Subtitle first="Project" second="Overview" />
        <p className="mt-1">{purpose}</p>
        {listPurpose && (
          <>
            <p className="my-3">{listPurpose.role}</p>
            <ul className="mt-2 space-y-4 list-disc pl-4">
              {listPurpose.children.map((pur) => (
                <li key={pur}>{pur}</li>
              ))}
            </ul>
            <p className="my-3">{listPurpose.conclusion}</p>
          </>
        )}
        {purposeDetails && (
          <div className="mt-2">
            <h2 className="font-bold text-customGray-600 text-lg">
              {purposeDetails.purposeTitle}
            </h2>
            <h3>{purposeDetails.purposeMain}</h3>
            <ul className="mt-2 space-y-4 list-disc pl-4">
              {purposeDetails.children.map((pur) => (
                <li key={pur.title}>
                  <h3 className="font-bold text-customGray-600 mb-0.5">
                    {pur.title}
                  </h3>
                  <p>{pur.info}</p>
                  {pur.children && (
                    <ul className="mt-2 space-y-4 list-disc pl-4">
                      {pur.children.map((pur) => (
                        <li key={pur}>{pur}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Note content="rounded-full h-24 customMiniTablet:h-14 w-1.5 bg-[#585858]">
              {purposeDetails.mainGoal}
            </Note>
          </div>
        )}
      </div>
      {platform && (
        <>
          <Seperator />
          <Subtitle first="Platform" second="structure" />
          <ul className="space-y-7 mt-3 list-decimal pl-4">
            {platform.map((plat) => (
              <li key={plat.title} className="">
                <h2 className="font-bold text-customGray-600 text-lg list-decimal">
                  {plat.title}
                </h2>
                <p>{plat.subtitle}</p>
                {plat.children && (
                  <ul className="mt-2 space-y-2 list-disc pl-4">
                    {plat.children.map((pur) => (
                      <li key={pur}>{pur}</li>
                    ))}
                  </ul>
                )}
                {plat.parent && (
                  <ul
                    className="space-y-6 mt-2
                  "
                  >
                    {plat.parent.map((pla) => (
                      <li key={pla.mainTitle}>
                        <h2 className="font-bold">{pla.mainTitle}</h2>
                        <p>{pla.subTitle}</p>
                        <ul className="mt-2 space-y-2 list-disc pl-4">
                          {pla.children.map((pur) => (
                            <li key={pur}>{pur}</li>
                          ))}
                        </ul>
                        <h4 className="my-2">{pla.conclusion}</h4>
                        <p>{pla.subConclusion}</p>
                      </li>
                    ))}
                  </ul>
                )}
                <p className="mt-2">{plat.conclusion}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      {responsibilitie && (
        <>
          <Seperator />
          <div>
            <Subtitle first="My Role &" second="Responsibilities" />
            <p className="mt-1">{responsibilitie.myRole}</p>
            <div className="mt-2">
              <h2 className="font-bold text-customGray-600 text-lg">
                {responsibilitie.respos}
              </h2>
              <ul className="mt-2 space-y-4 list-disc pl-4">
                {responsibilitie.children.map((pur) => (
                  <li key={pur}>{pur}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
      <Seperator />
      <div>
        <Subtitle first="Core user" second="features" />
        {features && (
          <div className="mt-2">
            <ul className="mt-2 space-y-4 list-disc pl-4">
              {features.map((pur) => (
                <li key={pur}>{pur}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {adminFeatures && (
        <>
          <Seperator />
          <div>
            <Subtitle first="Admin" second="features" />
            {adminFeatures && (
              <div className="mt-2">
                <ul className="mt-2 space-y-4 list-disc pl-4">
                  {adminFeatures.map((pur) => (
                    <li key={pur}>{pur}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      )}
      {globalFeatures && (
        <>
          <Seperator />
          <div>
            <Subtitle first="Global state" second="management" />
            <p className="mt-1">{globalFeatures.myRole}</p>
            <div className="my-2">
              <ul className="mt-2 space-y-4 list-disc pl-4">
                {globalFeatures.children.map((pur) => (
                  <li key={pur}>{pur}</li>
                ))}
              </ul>
            </div>
          </div>
          <p>{globalFeatures.conclusion}</p>
        </>
      )}
      {challenges && (
        <>
          <Seperator />

          <div>
            <Subtitle first="Challenges &" second="Solutions" />
            {challenges && (
              <div className="mt-2">
                <ul className="mt-2 space-y-4 list-disc pl-4">
                  {challenges.map((pur) => (
                    <li key={pur.header}>
                      <h3 className="font-bold text-customGray-600 mb-0.5">
                        {pur.header}
                      </h3>
                      <p className="">{pur.problem}</p>
                      <h2 className="font-bold text-customGray-600 mt-3 mb-0.5">
                        Solutions
                      </h2>
                      <p>{pur.solution}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      )}
      {debugging && (
        <>
          <Seperator />
          <div>
            <Subtitle first="Debugging &" second="Testing Approach" />
            <div className="mt-2">
              <ul className="mt-2 space-y-4 list-disc pl-4">
                {debugging.children.map((pur) => (
                  <li key={pur.header}>
                    <h3 className="font-bold text-customGray-600 mb-0.5">
                      {pur.header}
                    </h3>
                    <p className="">{pur.solution}</p>
                    {pur.children && (
                      <ul className="mt-2 space-y-2 list-disc pl-4">
                        {pur.children.map((pur) => (
                          <li key={pur}>{pur}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              {debugging.conclusion && (
                <Note content="rounded-full h-24 customMiniTablet:h-14 w-1.5 bg-[#585858]">
                  {debugging.conclusion}
                </Note>
              )}
            </div>
          </div>
        </>
      )}
      {demostrate && (
        <>
          <Seperator />
          <div>
            <Subtitle first="What This" second="Project Demonstrates" />
            <p className="mt-1">{demostrate.conclusion}</p>
            <div className="mt-2">
              <ul className="mt-2 space-y-4 list-disc pl-4">
                {demostrate.children.map((pur) => (
                  <li key={pur}>{pur}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default SecondSection;

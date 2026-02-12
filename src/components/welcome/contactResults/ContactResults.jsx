import { useContext } from "react";
import { ContactInboxContext } from "../../../context/contactInbox/ContactInboxContext";
import ScrollBar from "../../../reusableComponent/scrollBar/ScrollBar";
import ContactResultsCards from "./ContactResultsCards";
import clsx from "clsx";

const ContactResults = () => {
  const { data, loading: contactLoading } = useContext(ContactInboxContext);

  return (
    <>
      <div className="w-full pb-3 mt-5 overflow-x-auto scrollbar-custom">
        <div
          className={clsx(
            "overflow-y-auto scrollbar-custom customMiniTablet:block",
          )}
          style={{ height: `calc(100vh - 477px)` }}
        >
          <div className="flex gap-5 mb-3 text-xs text-customGray-200 text-opacity-70">
            <h2 className="w-[161px] shrink-0">Name</h2>
            <h2 className="w-[172px] shrink-0 text-end">Email</h2>
            <h2 className="w-[146px] shrink-0 text-end">Subject</h2>
            <h2 className="w-[153px] shrink-0 text-end">MEssage</h2>
          </div>
          <div className="space-y-1 w-max">
            {data && data.length > 0 ? (
              data
                ?.slice()
                ?.sort((a, b) => b.timeStamp.localeCompare(a.timeStamp))
                ?.map((coin) => (
                  <ContactResultsCards key={coin.id} coin={coin} />
                ))
            ) : (
              <p>No Message</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactResults;

const ContactResultsCards1 = ({ coin }) => {
  return (
    <div>
      <div className="flex items-center w-full gap-5 py-3 cursor-pointer hover:bg-customGray-200 hover:bg-opacity-5">
        <div className="flex gap-2 items-center w-[161px] shrink-0">
          <p>{coin.name}</p>
        </div>
        <div className="w-[172px] shrink-0 text-end">
          <h3 className="">{coin.email}</h3>
        </div>
        <h2 className="w-[146px] shrink-0 text-end">
          {coin.subject ? coin.subject : "No Subject"}
        </h2>
        <h2 className="w-[153px] shrink-0 text-end">{coin.message}</h2>
      </div>
    </div>
  );
};

export default ContactResultsCards1;

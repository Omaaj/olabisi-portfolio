import { formatDistanceToNow, parseISO } from "date-fns";

const WelcomeDate = ({ timeStamps }) => {
  let timer = "";

  if (timeStamps) {
    const dateFormat = parseISO(timeStamps);
    const formateDate = formatDistanceToNow(dateFormat);

    timer = `${formateDate} ago`;
  }

  return <p className="mt-3 text-sm text-red-300 text-end">{timer}</p>;
};

export default WelcomeDate;

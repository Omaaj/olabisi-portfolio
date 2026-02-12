import clsx from "clsx";
import { Link } from "react-router-dom";

const ProductionCard = ({ prod }) => {
  const {
    title,
    subtitle,
    info,
    techStack,
    year,
    urlLink,
    images,
    role,
    category,
  } = prod;

  return (
    <div
      className={clsx(
        category
          ? "relative h-full"
          : "relative p-4 shadow-2xl bg-customGray-900 rounded-3xl",
      )}
    >
      {!category && (
        <div className="w-full mb-4">
          <img
            src={images[0].img}
            alt=""
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      )}
      <div className="">
        <h1 className="mb-1 text-lg font-bold tracking-wider uppercase text-customYellow-100">
          {title}
        </h1>
        <h2 className="mb-2 font-semibold">{subtitle}</h2>
        <p className="mb-2 text-sm text-white">
          Role : <span>{role}</span>
        </p>
        {!category && (
          <div className="flex items-center gap-1.5 mb-2 text-sm text-customGray-800">
            <span className="font-medium text-green-600">Live</span>
            <div className="flex items-center gap-2">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full bg-green-500 rounded-full opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 bg-green-500 rounded-full"></span>
              </span>
            </div>{" "}
            in active use - <span className="italic">{year}</span>
          </div>
        )}
        {category && <p className="italic mb-2">{year}</p>}
        <p className="mb-3 leading-[23px] text-white">{info}</p>
        <p className="text-sm font-semibold tracking-wider pb-14">
          Stack: <span className="italic">{techStack}</span>
        </p>
        <div
          className={clsx(
            "absolute flex w-full gap-2 ",
            category ? "bottom-0 " : "pr-7 bottom-4",
          )}
        >
          <button className="w-full py-2 text-sm font-bold tracking-wider rounded-lg bg-customGreen-300 text-customGray-900 ">
            <Link to={urlLink} target="_blank">
              View Live
            </Link>
          </button>
          <button className="w-full py-2 text-sm font-bold tracking-wider rounded-lg bg-customRed-200 text-customGray-900">
            <Link to={`/portfolio/${title}`}>View Case Study</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductionCard;

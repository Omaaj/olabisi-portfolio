import { useDispatch, useSelector } from "react-redux";
import LogoImg from "../assets/welcome/omaaj.png";
import {
  getNationality,
  selectedNationality,
} from "../../redux/features/nationality/nationalitySlice";
import { useEffect } from "react";
import {
  addAndSaveWelcome,
  selectedWelcomeError,
  selectedWelcomeLoading,
} from "../../redux/features/welcome/welcomeSlice";
import clsx from "clsx";
import Note from "../../reusableComponent/note/Note";
import { ClipLoader } from "react-spinners";

const Welcome = ({ setWelcomePage }) => {
  const nationalitys = useSelector(selectedNationality);
  const loading = useSelector(selectedWelcomeLoading);
  const error = useSelector(selectedWelcomeError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNationality());
  }, [dispatch]);

  const handleWelcomes = async () => {
    try {
      await dispatch(addAndSaveWelcome({ welcomeid: nationalitys })).unwrap();
      setWelcomePage(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen px-4 pt-6 text-white bg-customGray-100 customMiniTablet:pt-8 customMiniTablet:px-16">
      <div className="mx-auto customMiniTablet:container">
        <header className="flex gap-1 mb-10">
          <div className="w-12">
            <img src={LogoImg} alt="" className="object-cover w-full" />
          </div>
          <h1 className="text-xl text-white">OmaaJTech</h1>
        </header>
        <section>
          <h2 className="text-white w-full customMiniTablet:text-[17px] flex flex-col space-y-1">
            <span className="font-bold text-customYellow-100">
              Hi, I’m a Frontend Engineer
            </span>{" "}
            <span>
              I build and ship production web applications used by real users.
            </span>
          </h2>
          <h1 className="text-white text-xl customMiniTablet:text-3xl font-extralight customMiniTablet:max-w-[850px] mt-8 leading-[1.4] customMiniTablet:leading-[1.4]">
            I design and develop complete, functional web products with real
            users in mind from{" "}
            <span className="text-customYellow-100 ">authentication</span> and{" "}
            <span className="text-customYellow-100">dashboards to</span>{" "}
            <span className="text-customYellow-100">transactions</span>,{" "}
            <span className="text-customYellow-100">APIs,</span> and{" "}
            <span className="text-customYellow-100">state management</span>.
          </h1>
          <Note content="rounded-full h-24 customMiniTablet:h-14 w-1.5 bg-[#585858]">
            I focus on writing code that reads like English, so both engineers
            and non-technical teammates can understand what the system is doing.
          </Note>
        </section>
        <p className="mt-6 text-red-600">{error}</p>
        <button
          className={clsx(
            "py-3 mt-12 text-sm font-bold tracking-wider text-white  w-60 rounded-2xl hover:bg-opacity-60 transist flex gap-2 items-center justify-center",
            loading
              ? "bg-opacity-40 bg-customYellow-100"
              : "bg-customYellow-100",
          )}
          onClick={handleWelcomes}
        >
          {loading ? "Loading..." : "See Production Work"}
          {loading && <ClipLoader size={20} color="#fff" />}
        </button>
      </div>
    </div>
  );
};

export default Welcome;

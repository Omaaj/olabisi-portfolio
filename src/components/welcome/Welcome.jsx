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
          <h1 className="text-xl text-white">Ajani</h1>
        </header>
        <section>
          <h2 className="text-white w-full customMiniTablet:text-[17px] flex flex-col space-y-1">
            <span className="font-bold text-customYellow-100">
              Hi, I’m a Frontend Engineer
            </span>{" "}
            <span>
              I build and ship production-grade web applications that power real
              business operations.
            </span>
          </h2>
          <h1 className="text-white text-xl customMiniTablet:text-3xl font-extralight customMiniTablet:max-w-[850px] mt-8 leading-[1.4] customMiniTablet:leading-[1.4]">
            From{" "}
            <span className="text-customYellow-100 ">
              secure authentication
            </span>{" "}
            and{" "}
            <span className="text-customYellow-100">transactional flows</span>{" "}
            to{" "}
            <span className="text-customYellow-100">
              data-driven dashboards
            </span>{" "}
            and{" "}
            <span className="text-customYellow-100">
              scalable state architecture.
            </span>{" "}
            I design systems built for reliability, performance, and growth.
          </h1>
          <Note content="rounded-full h-24 customMiniTablet:h-14 w-1.5 bg-[#585858]">
            I write clear, maintainable code designed for collaboration, so
            engineers and stakeholders understand not just what the system does,
            but how it works.
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

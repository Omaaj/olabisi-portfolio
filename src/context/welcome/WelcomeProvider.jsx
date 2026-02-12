import useSnapshot from "../../hooks/useSnapshot";
import { WelcomeContext } from "./WelcomeContext";

const WelcomeProvider = ({ children }) => {
  const { loading, data } = useSnapshot("welcome");

  return (
    <>
      <WelcomeContext.Provider value={{ allWelcome: data, loading }}>
        {children}
      </WelcomeContext.Provider>
    </>
  );
};

export default WelcomeProvider;

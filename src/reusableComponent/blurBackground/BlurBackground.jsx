import clsx from "clsx";

const BlurBackground = ({ children }) => {
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 z-[1000] w-full min-h-screen bg-black bg-opacity-10 backdrop-blur-sm",
      )}
    >
      {children}
    </div>
  );
};

export default BlurBackground;

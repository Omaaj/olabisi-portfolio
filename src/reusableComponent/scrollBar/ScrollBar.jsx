import clsx from "clsx";

const ScrollBar = ({ children, maxHeight }) => {
  return (
    <div
      className={clsx(
        "hidden overflow-y-auto scrollbar-custom customMiniTablet:block",
      )}
      style={{ height: `calc(100vh - ${maxHeight})` }}
    >
      {children}
    </div>
  );
};

export default ScrollBar;

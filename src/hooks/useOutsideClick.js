import { useEffect, useRef } from "react";

const useOutsideClick = (initialValue) => {
  const mainClickRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (mainClickRef.current && !mainClickRef.current.contains(e.target)) {
        initialValue(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [initialValue]);

  return { mainClickRef };
};

export default useOutsideClick;

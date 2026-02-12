import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [saveValue, setSaveValue] = useState(() => {
    try {
      const save = localStorage.getItem(key);
      return save ? JSON.parse(save) : initialValue;
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(saveValue));
  }, [key, saveValue]);

  return { saveValue, setSaveValue };
};

export default useLocalStorage;

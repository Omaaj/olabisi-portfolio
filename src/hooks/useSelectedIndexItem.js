import { useState } from "react";

const useSelectedIndexItem = (initialValue) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelectedIndex = (id) => {
    const idx = initialValue.findIndex((ini) => ini.id === id);

    setSelectedIndex(idx);
  };

  return { selectedIndex, handleSelectedIndex, setSelectedIndex };
};

export default useSelectedIndexItem;

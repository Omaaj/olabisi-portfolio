import { useState } from "react";

const useSelectedItems = (initialValue) => {
  const [selectedItems, setSelectedItems] = useState(null);

  const handleSelectedItems = (id) => {
    const singleItems = initialValue.find((ini) => ini.id === id);

    setSelectedItems(singleItems);
  };

  return { selectedItems, handleSelectedItems };
};

export default useSelectedItems;

import { useState } from "react";

const useSingleAccordion = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectedId = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  return { selectedId, handleSelectedId };
};

export default useSingleAccordion;

import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useSnapshot = (collectionName) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, collectionName);

    const unSubscribe = onSnapshot(
      collectionRef,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setData(data);
        setLoading(false);
      },
      (error) => {
        console.log(error);
        setLoading(false);
      },
    );

    return () => unSubscribe();
  }, [collectionName]);

  return {
    loading,
    data,
  };
};

export default useSnapshot;

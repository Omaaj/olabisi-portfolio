import { useEffect, useState } from "react";

const useLazyLoading = (loading) => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setShowLoading(false), 200);

      return () => clearTimeout(timer);
    } else {
      setShowLoading(true);
    }
  }, [loading]);

  return { showLoading };
};

export default useLazyLoading;

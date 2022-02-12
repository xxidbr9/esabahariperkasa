import React, { useRef, useState, useEffect } from "react";

const useLoadHandler = () => {
  const rawLoadRef = useRef([]).current;
  const [loading, setLoading] = useState(true);
  const [loadNumber, setLoadNumber] = useState(0);
  const [percentage, setPercentage] = React.useState(0);
  const [noNull, setNoNull] = useState([]);

  const onLoad = () => {
    setLoadNumber(loadNumber + 1);
  };

  const ref = elRef => {
    rawLoadRef.push(elRef);
  };

  useEffect(() => {
    setNoNull([...new Set(rawLoadRef)].filter(e => e != null));
  }, [rawLoadRef]);

  useEffect(() => {
    if (!!noNull.length && loadNumber === noNull.length) {
      setLoading(false);
    }
  }, [loadNumber, noNull.length]);
  
  useEffect(() => {
    if (noNull.length > 0) {
      const n = noNull.length;
      const count = ((loadNumber / n) * 100) | 0;
      setPercentage(count);
    }
  }, [loadNumber, noNull.length]);
  
  return { loading, onLoad, ref, percentage };
};

export default useLoadHandler;
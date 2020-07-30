import { useRef, useState, useEffect } from "react";

export const useOutsideAlerter = initialValue => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(initialValue);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) setVisible(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { visible, setVisible, ref };
};

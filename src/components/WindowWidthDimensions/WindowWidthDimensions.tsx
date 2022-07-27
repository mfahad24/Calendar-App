import { useState, useEffect } from "react";

export default function getWidthDimensionsOfTheWindow() {
  const [widthDimensions, setWidthDimensions] = useState<Number>(
    window.innerWidth
  );

  useEffect(() => {
    function handleResize() {
      setWidthDimensions(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return widthDimensions;
}

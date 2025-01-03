import { useEffect, useState } from "react";

export const Circle = ({ state }) => {
  const randomColor = `#${(((1 << 24) * Math.random()) | 0).toString(16)}`;
  const [color, setColor] = useState(randomColor);

  useEffect(() => {
    if (state >= 1) {
      setColor(randomColor);
      requestAnimationFrame(() => {
        console.log("colors are changed"); //requestAnimation for Logging after complete DOM manipulation
      });
    }
  }, [state]);

  return (
    <>
      <div
        className="circle"
        style={{ backgroundColor: randomColor }}
        id="circle"
      ></div>
    </>
  );
};

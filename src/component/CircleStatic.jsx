import { memo } from "react";

export const CircleStatic = memo(() => {
  const randomColor = `#${(((1 << 24) * Math.random()) | 0).toString(16)}`;

  return (
    <>
      <div
        className="circle"
        style={{ backgroundColor: randomColor }}
        id="circle"
      ></div>
    </>
  );
});

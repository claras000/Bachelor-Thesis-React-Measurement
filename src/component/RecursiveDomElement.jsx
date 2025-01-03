import { Circle } from "./Circle";
import { CircleStatic } from "./CircleStatic";

const RecursiveDomElement = ({ depth, current = 1, state }) => {
  if (current > depth) {
    return <div>Ende der Rekursion erreicht bei Tiefe {depth}</div>;
  }

  return (
    <div className={"borderTop"}>
      <p>Aktuelle Tiefe: {current}</p>
      {current % 2 === 0 ? (
        <CircleStatic></CircleStatic>
      ) : (
        <Circle state={state}></Circle>
      )}

      <RecursiveDomElement depth={depth} current={current + 1} />
    </div>
  );
};

export default RecursiveDomElement;

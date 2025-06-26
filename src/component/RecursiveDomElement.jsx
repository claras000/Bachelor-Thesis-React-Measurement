import {DynamicCircle} from "./DynamicCircle.jsx";
import {Circle} from "./Circle.jsx";

/**
 * rekursiv Element
 * @param depth of the circles.
 * @param current element which contains one circle.
 * @param state when state increments the circle style will be.
 * @returns {JSX.Element}
 * @constructor
 */
const RecursiveDomElement = ({depth, current = 1, state}) => {
    if (current > depth) {
        return <div>Ende der Rekursion erreicht bei Tiefe {depth}</div>;
    }

    return (
        <div className={"borderTop"}>
            <p>Aktuelle Tiefe: {current}</p>
            {current % 2 === 0 ? (
                <Circle></Circle>
            ) : (
                <DynamicCircle state={state}></DynamicCircle>
            )}

            <RecursiveDomElement depth={depth} current={current + 1}/>
        </div>
    );
};

export default RecursiveDomElement;

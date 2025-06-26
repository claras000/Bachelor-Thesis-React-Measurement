import {memo} from "react";

/**
 * static Circle Element
 *
 * @type {React.NamedExoticComponent<object>} memorized Component only renders, when Props are changed
 */
export const Circle = memo(() => {
    const randomColor = `#${(((1 << 24) * Math.random()) | 0).toString(16)}`;

    return (
        <>
            <div
                className="circle"
                style={{backgroundColor: randomColor}}
                id="circle"
            ></div>
        </>
    );
});

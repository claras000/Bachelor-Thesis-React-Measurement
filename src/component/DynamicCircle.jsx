import {useEffect, useState} from "react";

/**
 * dynamic  Circle Element which changes on click
 *
 * @param state when state increments the circle style will be.
 * @returns {JSX.Element} circle.
 */
export const DynamicCircle = ({state}) => {
    const randomColor = `#${(((1 << 24) * Math.random()) | 0).toString(16)}`;
    const randomRadius = `${Math.floor(Math.random() * 51)}%`;
    const [color, setColor] = useState(randomColor);
    const [radius, setRadius] = useState(randomRadius);

    useEffect(() => {
        let animationFrameId;

        if (state >= 1) {
            setColor(randomColor);
            setRadius(randomRadius);

            animationFrameId = requestAnimationFrame(() => {
                console.log("colors are changed");
            });
        }

        return () => {
            // Rückruf zum Abbrechen von Animationen, wenn der Effekt neu gestartet wird
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [state]);


    return (
        <>
            <div
                className="circle"
                style={{backgroundColor: randomColor, borderRadius: randomRadius}}
                id="circle"
            ></div>
        </>
    );
};

import { useRef, useState } from "react";
import { Card } from "@core/components/card/card";

export const Counter: React.FC = () => {
    let numRenders = 0;
    const numRenderRef = useRef(0);

    // En ausencia de estado
    // los cambios no se reflejan en la vista
    // let count = 0
    // const handleClick = (): void => {

    //     count = count + 1
    //     console.log(count)
    // }

    console.log("Ejecutando counter");

    const [count, setCount] = useState<number>(0);
    const handleClick = (): void => {
        console.log("Estado previo", count);
        console.log("Cambiando el estado");

        numRenders++;
        console.log("Renders", numRenders);

        numRenderRef.current++;
        console.log("Renders (Ref)", numRenderRef.current);

        // set recibe nuevo valor de estado
        // setCount(count + 1)

        // set recibe un callback y  calcula el nuevo valor
        setCount((prev) => prev + 1);
    };

    return (
        <Card title="Contador">
            <button onClick={handleClick}>
                <span>count is </span>
                <output>{count}</output>
            </button>
            <p>Numero de renders {numRenderRef.current}</p>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </Card>
    );
};

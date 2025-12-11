import { Card } from "@core/components/card/card";
import { useEffect, useState } from "react";

export const BasicTimer: React.FC = () => {
    const [timer, setTimer] = useState(0);

    const handleReset = (): void => {
        setTimer(0)
    }

    useEffect(() => {
        console.log('Use effect')
        const intervalId = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 300);

        return (): void => {
            clearInterval(intervalId)
        };
    }, []);

    return (
        <Card title="Timer">
            <p>{timer}</p>
            <button onClick={handleReset}>Reset</button>
        </Card>
    );
};

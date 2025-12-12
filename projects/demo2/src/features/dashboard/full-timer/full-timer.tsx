import { Card } from "@core/components/card/card";
import { useEffect, useState } from "react";

export const FullTimer: React.FC = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false)

    const handleStart = (isRunning: boolean): void => {
        setIsRunning(isRunning)
    }

    const handleStop = (): void => {
        setTimer(0)
        setIsRunning(false)
    }

    useEffect(() => {

        if (!isRunning) {
            return
        }

        const intervalId = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 300);

        return (): void => {
            if(intervalId) {
                clearInterval(intervalId)
            }
        };
    }, [isRunning]);

    return (
        <Card title="Timer">
            <p>{timer}</p>
            <button onClick={() => handleStart(true)}>Star</button>
            <button onClick={() => handleStart(false)}>Pause</button>
            <button onClick={handleStop}>Stop</button>
        </Card>
    );
};

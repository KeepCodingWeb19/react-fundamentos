import { useState } from "react";
import { Card } from "@core/components/card/card";

type Props = {
    onTotal: () => void;
};

export const CounterChild: React.FC<Props> = ({ onTotal }) => {
    const [count, setCount] = useState<number>(0);
    const handleClick = (): void => {
        setCount((prev) => prev + 1);
        onTotal()
    };

    return (
        <Card title="Contador">
            <button onClick={handleClick}>
                <span>count is </span>
                <output>{count}</output>
            </button>
        </Card>
    );
};

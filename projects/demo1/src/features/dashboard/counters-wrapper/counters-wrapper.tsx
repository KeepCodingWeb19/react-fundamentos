import { Card } from "@core/components/card/card";
import React, { useState } from "react";
import { CounterChild } from "../counter-child/counter-child";

export const CountersWrapper: React.FC = () => {
    const [total, setTotal] = useState(0);
    
    const handleTotal = (): void => {
        setTotal(prev => prev  +1 )
    }

    return (
        <Card title="Contadores">
            <p>Total: {total}</p>
            <CounterChild onTotal={handleTotal}/>
            <CounterChild onTotal={handleTotal}/>
        </Card>
    );
};

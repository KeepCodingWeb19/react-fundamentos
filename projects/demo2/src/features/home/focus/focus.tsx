import { Card } from "@core/components/card/card";
import React, { useRef } from "react";

export const Focus: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = (): void => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <Card title="Focus">
            <input type="text" ref={inputRef} />
            <button onClick={handleFocus}>Focus</button>
        </Card>
    );
};

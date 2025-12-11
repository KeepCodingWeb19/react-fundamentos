import { Card } from "@core/components/card/card";
import React, { useState } from "react";

export const Names: React.FC = () => {
    const [names, setNames] = useState<string[]>([]);
    console.log('Creando Names')

const handleClick = (): void =>  {
    const data = ['Pepe', 'Juan', 'Luisa']
    setNames(data)
}

    return (
        <Card>
            {names.map((name) => (
                <p key={name}>{name}</p>
            ))}
            <button onClick={handleClick}>Cargar nombres</button>
        </Card>
    );
};

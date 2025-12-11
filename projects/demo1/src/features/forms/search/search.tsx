import { Card } from "@core/components/card/card";
import { useState } from "react";

export const Search: React.FC = () => {
    // Formulario controlado de React

    const [searchValue, setSearchValue] = useState("");

    const handlerSearch: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const { value } = event.target;
        setSearchValue(value);
    };

    const handleReset = (): void => {
        setSearchValue("");
    };

    return (
        <Card title="Search Form">
            <form onReset={handleReset}>
                <input
                    type="text"
                    placeholder="Escribe tu búsqueda"
                    value={searchValue}
                    onChange={handlerSearch}
                />
                <button type="reset">Limpiar</button>
            </form>
            <p>
                Tu búsqueda <output>{searchValue}</output>
            </p>
        </Card>
    );
};

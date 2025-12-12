import { Card } from "@core/components/card/card";
import { useRef, useState } from "react";

export const Search: React.FC = () => {
    // Formulario controlado de React

    const [searchValue, setSearchValue] = useState("");

    const searchRef = useRef<HTMLInputElement>(null)

    const handlerSearch: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const { value } = event.target;
        setSearchValue(value);
        
    };

    const handleReset = (): void => {
        setSearchValue("");
        searchRef.current?.focus()
    };

    return (
        <Card title="Search Form">
            <form onReset={handleReset}>
                <input
                    type="text"
                    placeholder="Escribe tu búsqueda"
                    value={searchValue}
                    onChange={handlerSearch}
                    ref={searchRef}
                />
                <button type="reset">Limpiar</button>
            </form>
            <p>
                Tu búsqueda <output>{searchValue}</output>
            </p>
        </Card>
    );
};

import { Card } from "@core/components/card/card";
import { useEffect, useState } from "react";

export const CounterLogin: React.FC = () => {
    const [count, setCount] = useState(0);
    const [isLogged, setIsLogged] = useState(false);

    const handleCount = (): void => {
        setCount((prev) => prev + 1);
    };

    const handleLogin = (): void => {
        // setIsLogged(prev => !prev)
        setIsLogged(!isLogged);
    };

    useEffect(() => {
        console.log('Use effect inicial de CounterLogin') 
    }, [])

    useEffect(() => {
        console.log('Use effect CounterLogin')
        const initialTitle = "Demo1";
        if (isLogged) {
            document.title = initialTitle + " | Logged";
        } else {
            document.title = initialTitle;
        }
    }, [isLogged]);

    return (
        <Card title="Counter and Login">
            {isLogged && (
                <button onClick={handleCount}>count is {count}</button>
            )}
            <button onClick={handleLogin}>
                {isLogged ? "Logout" : "Login"}
            </button>
            <p>Login para ver el contador</p>
        </Card>
    );
};

import { useEffect, useState } from "react";
import { routes, type Route } from "./routes";

// Se devuelve un objeto
// Más adelante se pueden añadir otras funciones, como navigate

type UseRouterType = {
    CurrentPage: React.FC,
}
export const useRouter =  (): UseRouterType => {
    const [currenPath, setCurrentPath] = useState(window.location.pathname);

    const validRoute =
        routes.find((route) => route.path === currenPath) ||
        routes.find((route) => route.path === "*");

    const CurrentPage: React.FC = (validRoute as Route).component;

    useEffect(() => {
        const handlePostSate = (): void => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener("popstate", handlePostSate);

        return (): void => {
            window.removeEventListener("popstate", handlePostSate);
        };
    }, []);

    return {CurrentPage};
};

// Si se devuelve directamente el componente
// Da problemas con el ESLint a la hora de utilizarlo

export const useRouter1 =  (): React.FC => {
    const [currenPath, setCurrentPath] = useState(window.location.pathname);

    const validRoute =
        routes.find((route) => route.path === currenPath) ||
        routes.find((route) => route.path === "*");

    const CurrentPage: React.FC = (validRoute as Route).component;

    useEffect(() => {
        const handlePostSate = (): void => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener("popstate", handlePostSate);

        return (): void => {
            window.removeEventListener("popstate", handlePostSate);
        };
    }, []);

    return CurrentPage;
};



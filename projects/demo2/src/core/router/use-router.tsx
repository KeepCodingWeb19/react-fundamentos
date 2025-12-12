import { useEffect, useState } from "react";
import { routes, type Route } from "./routes";

export const useRouter =  (): React.FC => {
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

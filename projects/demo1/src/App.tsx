import type { MenuOption } from "@core/types/menu-option";
import { Layout } from "@core/components/layout/layout";
import "./App.css";

import { getOptions } from "@core/router/routes";

// En lugar del componente usaremos el hook equivalente
// import { Router } from "@core/router/router3";
import { useRouter } from "@core/router/use-router";

export const App: React.FC = () => {
    const appTitle = "Demo 1";
    const subTitle = "React - TS  Vite";

    const menuOptions: MenuOption[] = getOptions();
    menuOptions.push({ path: "/about", label: "Acerca de" });
    // [
    //     { path: "/home", label: "Inicio" },
    //     { path: "/dashboard", label: "Dashboard" },
    //     { path: "/forms", label: "Formularios" },
    //     { path: "/about", label: "Acerca de" },
    // ];

    const { CurrentPage } = useRouter();

    return (
        <Layout
            appTitle={appTitle}
            subTitle={subTitle}
            menuOptions={menuOptions}
        >
            {/* 
            En lugar del componente usaremos el hook equivalente
            <Router /> 
            */}
            <CurrentPage />
        </Layout>
    );
};

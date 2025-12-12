import type { MenuOption } from "@core/types/menu-option";
import { Layout } from "@core/components/layout/layout";
import "./App.css";

import { getOptions } from "@core/router/routes";
import { Outlet } from "react-router";

export const App: React.FC = () => {
    const appTitle = "Demo 2";
    const subTitle = "React - TS  Vite";

    const menuOptions: MenuOption[] = getOptions();
    menuOptions.push({ path: "/about", label: "Acerca de" });
    // [
    //     { path: "/home", label: "Inicio" },
    //     { path: "/dashboard", label: "Dashboard" },
    //     { path: "/forms", label: "Formularios" },
    //     { path: "/about", label: "Acerca de" },
    //     //  { path: "/Products", label: "Productos" },
    //     // { path: "/user", label: "Profile" },
    //     // { path: "/about", label: "Acerca de" },
    // ];

    return (
        <Layout
            appTitle={appTitle}
            subTitle={subTitle}
            menuOptions={menuOptions}
        >
            <Outlet />
        </Layout>
    );
};

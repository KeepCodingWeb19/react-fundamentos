import type { MenuOption } from "@core/types/menu-option";
import { Layout } from "@core/components/layout/layout";
import { HomePage } from "@features/home/home-page";
import "./App.css";
import { DashboardPage } from "@features/dashboard/dashboard-page";
import { FormsPage } from "@features/forms/forms-page";

export const App: React.FC = () => {
    const appTitle = "Demo 1";
    const subTitle = "React - TS  Vite";
    const menuOptions: MenuOption[] = [
        { path: "/", label: "Inicio" },
        { path: "/Products", label: "Productos" },
        { path: "/user", label: "Profile" },
        { path: "/about", label: "Acerca de" },
    ];

    return (
        <Layout
            appTitle={appTitle}
            subTitle={subTitle}
            menuOptions={menuOptions}
        >
            <HomePage />
            <DashboardPage />
            <FormsPage />
        </Layout>
    );
};

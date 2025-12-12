import { Card } from "@core/components/card/card";
import type { MenuOption } from "@core/types/menu-option";
import { DashboardPage } from "@features/dashboard/dashboard-page";
import { FormsPage } from "@features/forms/forms-page";
import { HomePage } from "@features/home/home-page";

export type Route = {
    path: string;
    component: React.FC;
    label?: string;
};
export const routes: Route[] = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/home",
        component: HomePage,
        label: "Inicio",
    },
    {
        path: "/dashboard",
        component: DashboardPage,
        label: "Dashboard",
    },
    {
        path: "/forms",
        component: FormsPage,
        label: "Formularios",
    },
    {
        path: "*",
        component: () => <Card>Página no encontrada</Card>,
    },
];


export const getOptions = (): MenuOption[] => routes
    .filter((route) => "label" in route)
    .map((route) => ({
        path: route.path as string,
        label: route.label as string,
    }));

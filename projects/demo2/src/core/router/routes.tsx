import { Card } from "@core/components/card/card";
import type { MenuOption } from "@core/types/menu-option";
import { DashboardPage } from "@features/dashboard/dashboard-page";
import { FormsPage } from "@features/forms/forms-page";
import { HomePage } from "@features/home/home-page";
import type { RouteObject } from "react-router";
import { App } from "../../App";

export const routes: RouteObject[] = [
    {
        path: "/",
        Component: App,
        children: [
            {
                //path: "/",
                index: true,
                Component: HomePage,
            },
            {
                path: "/home",
                Component: HomePage,
                id: "Inicio",
            },
            {
                path: "/dashboard",
                Component: DashboardPage,
                id: "Dashboard",
            },
            {
                path: "/forms",
                Component: FormsPage,
                id: "Formularios",
            },
            {
                path: "*",
                Component: () => <Card>Página no encontrada</Card>,
            },
        ],
    },
];

export const getOptions = (): MenuOption[] =>
    (routes[0].children as RouteObject[])
        .filter((route) => "id" in route)
        .map((route) => ({
            path: route.path as string,
            label: route.id as string,
        }));

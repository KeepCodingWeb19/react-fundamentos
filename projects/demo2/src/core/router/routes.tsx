import { Card } from "@core/components/card/card";
import type { MenuOption } from "@core/types/menu-option";
import { redirect, type RouteObject } from "react-router";
import { App } from "../../App";
import React from "react";

const HomePage = React.lazy(() => import("@features/home/home-page"));
const DashboardPage = React.lazy(
    () => import("@features/dashboard/dashboard-page")
);
const ProductsPage = React.lazy(() => import('@features/products/products-page')) 

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
                loader: (): void => {
                    throw redirect("/");
                },
                id: "Inicio",
            },
              {
                path: "/products",
                Component: ProductsPage,
                id: "Productos",
            },
            {
                path: "/dashboard",
                Component: DashboardPage,
                id: "Dashboard",
            },
            {
                path: "/forms",
                lazy: {
                    Component: async () =>
                        (await import("@features/forms/forms-page")).FormsPage,
                },
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

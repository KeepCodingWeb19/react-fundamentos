import { Card } from "@core/components/card/card";
import { DashboardPage } from "@features/dashboard/dashboard-page";
import { FormsPage } from "@features/forms/forms-page";
import { HomePage } from "@features/home/home-page";
import React, { useState } from "react";

export const Router: React.FC = () => {
    const [currenPath] = useState(window.location.pathname);

    let CurrentPage: React.FC = () => null;

    switch (currenPath) {
        case "/":
        case "/home":
            CurrentPage = HomePage;
            break;
        case "/dashboard":
            CurrentPage = DashboardPage;
            break;
        case "/forms":
            CurrentPage = FormsPage;
            break;
        default:
            return <Card>Página no encontrada</Card>;
    }

    return <CurrentPage />;
};

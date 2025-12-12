import { Card } from "@core/components/card/card";
import { DashboardPage } from "@features/dashboard/dashboard-page";
import { FormsPage } from "@features/forms/forms-page";
import { HomePage } from "@features/home/home-page";
import React, { useState } from "react";

const routesMap: Record<string, React.FC> = {
  '/': HomePage,
  '/home': HomePage,
  '/dashboard': DashboardPage,
  "/forms": FormsPage,
  '*': () => <Card>Página no encontrada</Card>,
};

export const Router: React.FC = () => {
    const [currenPath] = useState(window.location.pathname);
    const CurrentPage: React.FC = routesMap[currenPath] || routesMap['*'];

    return <CurrentPage />;
};

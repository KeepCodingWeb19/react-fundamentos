// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "@core/router/routes.tsx";

const appRouter = createBrowserRouter(routes);

createRoot(document.getElementById("root") as HTMLElement).render(
    // <StrictMode>
    <RouterProvider router={appRouter} />
    // </StrictMode>
);

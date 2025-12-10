import { Header } from "@core/components/header/header";
import { Footer } from "@core/components/footer/footer";
import { Counter } from "@features/home/counter/counter";
import { Logos } from "@core/components/logos/logos";
import { Menu } from "@core/components/menu/menu";
import type { MenuOption } from "@core/types/menu-option";
import "./App.css";

export const App: React.FC = () => {
    const appTitle = "Demo 1";
    const subTitle = "React - TS  Vite";
    const menuOptions: MenuOption[] = [
        { path: "/", label: "Inicio" },
        { path: "/about", label: "Acerca de" },
    ];

    return (
        <>
            <Header title={appTitle} subTittle={subTitle}>
                <Menu options={menuOptions} />
                <Logos />
            </Header>
            <main>
                <Counter />
            </main>
            <Footer />
        </>
    );
};

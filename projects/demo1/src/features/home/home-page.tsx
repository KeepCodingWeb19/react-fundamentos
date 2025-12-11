import { Greetings } from "@features/home/greetings/greetings";
import { PanicButton } from "./panic-button/panic-button.v2";
import { Names } from "./names/names";
import "./home-page.css";
import { Focus } from "./focus/focus";

export const HomePage: React.FC = () => {
    return (
        <section>
            <h2>Inicio</h2>
            <Greetings userName="" />
            <PanicButton />
            <Names />
            <Focus />
        </section>
    );
};

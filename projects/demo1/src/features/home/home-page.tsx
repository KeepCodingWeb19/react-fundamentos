import { Counter } from "@features/home/counter/counter";
import { Greetings } from "@features/home/greetings/greetings";
import "./home-page.css";
import { PanicButton } from "./panic-button/panic-button.v2";

export const HomePage: React.FC = () => {
    return (
        <section>
            <h2>Inicio</h2>
            <Counter />
            <Greetings userName="" />
            <PanicButton />
        </section>
    );
};

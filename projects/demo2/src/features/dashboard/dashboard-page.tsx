import { Counter } from "@features/dashboard/counter/counter";
import { CounterLogin } from "./counter-login/counter-login";
import { CountersWrapper } from "./counters-wrapper/counters-wrapper";
import { BasicTimer } from "./basic-timer/basic-timer";
import { FullTimer } from "./full-timer/full-timer";

export const DashboardPage: React.FC = () => {
    return (
        <section>
            <h2>Dashboard</h2>
            <Counter />
            <CounterLogin />
            <CountersWrapper />
            <BasicTimer />
            <FullTimer />
        </section>
    );
};

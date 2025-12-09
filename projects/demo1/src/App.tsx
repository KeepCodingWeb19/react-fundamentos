import { useState } from "react";

import "./App.css";
import { Header } from "@core/components/header/header";
import { Footer } from "@core/components/footer/footer";

export const App: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <Footer />
        </>
    );
};

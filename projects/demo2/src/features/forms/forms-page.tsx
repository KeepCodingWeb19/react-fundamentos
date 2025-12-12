import { LoginForm } from "./login/login";
import { RegisterForm } from "./register/register";
import { Search } from "./search/search";

export const FormsPage: React.FC = () => {
    return (
        <section>
            <h2>Forms</h2>
            <Search />
            <LoginForm />
            <RegisterForm />
        </section>
    );
};

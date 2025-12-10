import type { MenuOption } from "@core/types/menu-option";
import "./menu.css"

type Props = {
    options: MenuOption[]
}

export const Menu: React.FC<Props> = ({ options}) => {
   
    return (
        <nav>
            <ul>
                <li>
                    <a href={options[0].path}> {options[0].label} </a>
                </li>
                <li>
                    <a href={options[1].path}> {options[1].label} </a>
                </li>
            </ul>
        </nav>
    );
};

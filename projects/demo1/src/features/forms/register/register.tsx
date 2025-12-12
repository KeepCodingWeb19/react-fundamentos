import { Card } from '@core/components/card/card';
import { useId } from 'react';
import './register.css';

export type Register = {
    userName: string;
    email: string;
    password: string;
    isOkConditions: boolean;
    turn: string;
    course: string;
};

type UserIDs = {
    [K in keyof Register]: string;
};

const userDataInitial: Register = {
    userName: '....',
    email: '.....',
    password: '....',
    isOkConditions: false,
    turn: '',
    course: '',
};

export const RegisterForm: React.FC = () => {
    const registerIds: UserIDs = {
        userName: useId(),
        email: useId(),
        password: useId(),
        isOkConditions: useId(),
        turn: useId(),
        course: useId(),
    };

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
        ev.preventDefault();
        const form = ev.currentTarget; // EventTarget & HTMLFormElement
        console.log(userDataInitial);
        console.log(form);
    };
    return (
        <Card title="Formulario de registro">
            <p>Ejemplo de 'Controlled Form'</p>
            <form onSubmit={handleSubmit}>
                <div className="group-control">
                    <input
                        type="text"
                        placeholder="Dime tu nombre"
                        required
                        name="userName"
                        id={registerIds.userName}
                        defaultValue={userDataInitial.userName}
                    />
                </div>

                <div className="group-control">
                    <input
                        type="email"
                        placeholder="Dime tu email"
                        required
                        name="email"
                        id={registerIds.email}
                        defaultValue={userDataInitial.email}
                    />
                </div>

                <div className="group-control">
                    <input
                        type="password"
                        placeholder="Dime tu password"
                        required
                        name="password"
                        id={registerIds.password}
                        defaultValue={userDataInitial.password}
                    />
                </div>

                <div className="group-control-line">
                    <input
                        type="checkbox"
                        id={registerIds.isOkConditions}
                        name="isOkConditions"
                        defaultChecked={userDataInitial.isOkConditions}
                    />
                    <label htmlFor={registerIds.isOkConditions}>
                        Acepto las condiciones...
                    </label>
                </div>

                <fieldset name="turn">
                    <legend>Selecciona un turno</legend>
                    <div className="group-control-line">
                        <label htmlFor={registerIds.turn + '-m'}>
                            <input
                                type="radio"
                                name="turn"
                                id={registerIds.turn + '-m'}
                                value="M"
                            />
                            <span>Mañana</span>
                        </label>

                        <label htmlFor={registerIds.turn + '-t'}>
                            <input
                                type="radio"
                                name="turn"
                                id={registerIds.turn + '-t'}
                                value="T"
                            />
                            <span>Tarde</span>
                        </label>
                        <label htmlFor={registerIds.turn + '-n'}>
                            <input
                                type="radio"
                                name="turn"
                                id={registerIds.turn + '-n'}
                                value="N"
                            />
                            <span>Noche</span>
                        </label>
                    </div>
                </fieldset>
                <div className="group-control-line">
                    <label htmlFor={registerIds.course}>
                        <span>Elige un curso</span>
                        <select
                            name="course"
                            id={registerIds.course}
                            defaultValue={userDataInitial.course}
                        >
                            <option value=""></option>
                            <option value="A">Angular</option>
                            <option value="R">React</option>
                            <option value="N">Node</option>
                        </select>
                    </label>
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </Card>
    );
};

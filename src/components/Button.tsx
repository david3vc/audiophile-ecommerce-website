import { ReactNode } from "react";

interface IButton {
    colorFondo: string;
    colorHover: string;
    nombre: string;
    color: string;
    children?: ReactNode
}

const Button = ({ colorFondo, colorHover, nombre, color, children }: IButton) => {
    return (
        <div className={`container-button ${colorFondo} ${colorHover} ${color}`}>
            {nombre}
            {children}
        </div>
    );
};

export default Button;

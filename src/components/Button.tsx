import { ReactNode } from "react";

interface IButton {
    colorFondo: string;
    colorHover: string;
    nombre: string;
    color: string;
    border?: string;
    children?: ReactNode;
}

const Button = ({ colorFondo, colorHover, nombre, color, children, border }: IButton) => {
    return (
        <div className={`container-button ${colorFondo} ${colorHover} ${color} ${border}`}>
            {nombre}
            {children}
        </div>
    );
};

export default Button;

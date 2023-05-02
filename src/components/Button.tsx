import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface IButton {
    colorFondo: string;
    colorHover: string;
    nombre: string;
    color: string;
    to: string;
    border?: string;
    children?: ReactNode;
}

const Button = ({
    colorFondo,
    colorHover,
    nombre,
    color,
    children,
    border,
    to,
}: IButton) => {
    return (
        <NavLink
            to={to}
            className={`container-button ${colorFondo} ${colorHover} ${color} ${border}`}
        >
            {nombre}
            {children}
        </NavLink>
    );
};

export default Button;

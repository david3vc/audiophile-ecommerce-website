interface IButton {
    colorFondo: string;
    colorHover: string;
    nombre: string;
}

const Button = ({ colorFondo, colorHover, nombre }: IButton) => {
    return (
        <div className={`container-button ${colorFondo} ${colorHover}`}>
            {nombre}
        </div>
    );
};

export default Button;

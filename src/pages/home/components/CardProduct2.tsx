import Button from "../../../components/Button";

interface ICardProduct2 {
    imagen: string;
    isButton: boolean;
    height: string;
    name: string;
    to: string;
}

const CardProduct2 = ({ imagen, isButton, height, name, to }: ICardProduct2) => {
    return (
        <div className="container-card-product2" style={{backgroundImage: `url(${imagen})`, height: `${height}`}}>
            <div className="container-card-product2__name">{name}</div>
            {isButton && (
                <Button
                    color="colorNegro"
                    colorFondo=""
                    colorHover=""
                    nombre="SEE PRODUCT"
                    border="borderNegro"
                    to={to}
                />
            )}
        </div>
    );
};

export default CardProduct2;

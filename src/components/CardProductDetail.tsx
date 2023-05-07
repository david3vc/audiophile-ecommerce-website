import Button from "./Button";

interface ICardProductDetail {
    img: string;
    subtitle: string;
    title: string;
    overview: string;
    to: string;
    reverse?: boolean;
}

const CardProductDetail = ({
    img,
    subtitle,
    title,
    overview,
    to,
    reverse,
}: ICardProductDetail) => {
    const classReverse = reverse ? 'classReverse' : '';
    return (
        <div className={`container-card-product-detail ${classReverse}`}>
            <div className="container-card-product-detail-photo">
                <div className="container-card-product-detail__img">
                    <img src={`/src${img}`} alt="" />
                </div>
            </div>
            <div className="container-card-product-detail-detail">
                <div className="container-card-product-detail__subtitle">
                    {subtitle}
                </div>
                <div className="container-card-product-detail__title">
                    {title}
                </div>
                <div className="container-card-product-detail__overview">
                    {overview}
                </div>
                <div className="container-card-product-detail__button">
                    <Button
                        to={to}
                        nombre="SEE PRODUCT"
                        color=""
                        colorFondo="colorFondoNaranja"
                        colorHover="colorHoverNaranja"
                    />
                </div>
            </div>
        </div>
    );
};

export default CardProductDetail;

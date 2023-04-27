import Button from "./Button"

interface ICardProductDetail {
    img: string;
    subtitle: string;
    title: string;
    overview: string;
}

const CardProductDetail = ({img, subtitle, title, overview}:ICardProductDetail) => {
  return (
    <div className="container-card-product-detail">
        <div className="container-card-product-detail__img">
            <img src={`/src${img}`} alt="" />
        </div>
        <div className="container-card-product-detail__subtitle">
            {subtitle}
        </div>
        <div className="container-card-product-detail__title">
            {title}
        </div>
        <div className="container-card-product-detail__overview">
            {overview}
        </div>
        <Button nombre="SEE PRODUCT" color="" colorFondo="colorFondoNaranja" colorHover="colorHoverNaranja" />
    </div>
  )
}

export default CardProductDetail
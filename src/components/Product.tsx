import { useState } from "react";
import Button from "./Button";
import { BoxModel, GalleryModel } from "../types";

interface IProduct {
    id: string;
    img: string;
    subtitle: string;
    title: string;
    overview: string;
    price: number;
    features: string;
    box: BoxModel[];
    galeria: GalleryModel;
}

const Product = ({
    id,
    img,
    subtitle,
    title,
    overview,
    price,
    features,
    box,
    galeria,
}: IProduct) => {
    const [counter, setCounter] = useState(1);

    return (
        <div className="container-product">
            <Button
                nombre="Go Back"
                color="colorGris"
                colorFondo=""
                colorHover=""
                to="/headphones"
            />
            <div className="container-product__img">
                <img src={`/src${img}`} alt="" />
            </div>
            <div className="container-product__subtitle">{subtitle}</div>
            <div className="container-product__title">{title}</div>
            <div className="container-product__overview">{overview}</div>
            <div className="container-product__price">$ {price}</div>
            <div className="container-product__add-cart">
                <div className="container-product__add-cart__counter">
                    <span onClick={() => setCounter((counter) => counter - 1)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-dash"
                            viewBox="0 0 16 16"
                            color="gray"
                        >
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                    </span>
                    <span>{counter}</span>
                    <span onClick={() => setCounter((counter) => counter + 1)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-plus"
                            viewBox="0 0 16 16"
                            color="gray"
                        >
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </span>
                </div>
                <Button
                    nombre="ADD TO CART"
                    color=""
                    colorFondo="colorFondoNaranja"
                    colorHover="colorHoverNaranja"
                    to=""
                />
            </div>
            <div className="container-product__features">
                <h2>FEATURES</h2>
                <span className="container-product__features__description">
                    {features}
                </span>
            </div>
            <div className="container-product__box">
                <h2>IN THE BOX</h2>
                {box.map((box, i) => (
                    <div key={i}>
                        <span className="container-product__box__quantity">{box.quantity}x</span>{' '}
                        <span className="container-product__box__item">{box.item}</span>
                    </div>
                ))}
            </div>
            <div className="container-product__gallery">
                <img src={`/src${galeria.first.mobile}`} alt="" />
                <img src={`/src${galeria.second.mobile}`} alt="" />
                <img src={`/src${galeria.third.mobile}`} alt="" />
            </div>
        </div>
    );
};

export default Product;

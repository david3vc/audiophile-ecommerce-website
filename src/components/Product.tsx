import { useState } from "react";
import Button from "./Button";
import { DataModel } from "../types";
import { useProductsList } from "../context/ProductsListContext";

interface IProduct {
    subtitle: string;
    product?: DataModel;
}

const Product = ({ subtitle, product }: IProduct) => {
    const [counter, setCounter] = useState(1);
    const { list, setList, setTotal } = useProductsList();

    const agregarACarrito = () => {
        const newList = list?.map((item) => {
            if (item?.id === product?.id) {
                return {
                    ...item,
                    count: (item?.count ?? 0) + counter,
                    subTotal: ((item?.count ?? 0) + counter) * (item?.price ?? 0),
                    vat: (item?.price ?? 0) * 0.2
                };
            } else {
                return item;
            }
        });
        setList?.(newList as (DataModel | undefined)[]);
        
        let newTotal = 0;
        for (let i = 0; i < (newList?.length ?? 0); i++) {
            newTotal += (newList?.[i]?.subTotal ?? 0);
        }
        setTotal?.(newTotal);
    };

    return (
        <div className="container-product">
            <Button
                nombre="Go Back"
                color="colorGris"
                colorFondo=""
                colorHover=""
                to={`/${product?.category}`}
            />
            <div className="container-product-detalle">
                <div className="container-product-detalle__imagen">
                    <div className="container-product__img">
                        <img src={`/src${product?.image.mobile}`} alt="" />
                    </div>
                </div>
                <div className="container-product-detalle__subdetalle">
                    <div className="container-product__subtitle">{subtitle}</div>
                    <div className="container-product__title">{product?.name}</div>
                    <div className="container-product__overview">
                        {product?.description}
                    </div>
                    <div className="container-product__price">$ {product?.price}</div>
                    <div className="container-product__add-cart">
                        <div className="container-product__add-cart__counter">
                            <span style={{cursor: 'pointer'}} onClick={() => setCounter((counter) => counter - 1)}>
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
                            <span style={{cursor: 'pointer'}} onClick={() => setCounter((counter) => counter + 1)}>
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
                            onClick={agregarACarrito}
                        />
                    </div>
                </div>
            </div>
            <div className="container-product-includes">
                <div className="container-product__features">
                    <span className="container-product__features__title">FEATURES</span>
                    <div className="container-product__features__description">
                        {product?.features}
                    </div>
                </div>
                <div className="container-product__box">
                    <span className="container-product__box-title">IN THE BOX</span>
                    <div className="container-product__box-includes">
                        {product?.includes.map((box, i) => (
                            <div className="" key={i}>
                                <span className="container-product__box__quantity">
                                    {box.quantity}x
                                </span>{" "}
                                <span className="container-product__box__item">
                                    {box.item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container-product__gallery">
                <div className="container-product__gallery__part1">
                    <img src={`/src${product?.gallery.first.mobile}`} alt="" />
                    <img src={`/src${product?.gallery.second.mobile}`} alt="" />
                </div>
                <div className="container-product__gallery__part2">
                    <img src={`/src${product?.gallery.third.mobile}`} alt="" /> 
                </div>
            </div>
        </div>
    );
};

export default Product;

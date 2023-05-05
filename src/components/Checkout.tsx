import { useState } from "react";
import { useProductsList } from "../context/ProductsListContext";
import Button from "./Button";
import Modal from "./modal/modal";
import icon from "../assets/checkout/icon-order-confirmation.svg";

const Checkout = () => {
    const { list } = useProductsList();
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="container-checkout">
                <Button
                    nombre="Go Back"
                    color="colorGris"
                    colorFondo=""
                    colorHover=""
                    to="#"
                />
                <div className="container-checkout__sub-container">
                    <div className="sub-container__checkout">
                        <div className="sub-container__checkout__title">
                            CHECKOUT
                        </div>
                        <div className="sub-container__checkout__billing-details">
                            <div className="checkout__billing-details__title">
                                BILLING DETAILS
                            </div>
                            <div className="checkout__billing-details__form">
                                <div className="billing-details__form__input">
                                    <label htmlFor="">Name</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="inputText"
                                    />
                                </div>
                                <div className="billing-details__form__input">
                                    <label htmlFor="">Email Address</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="inputText"
                                    />
                                </div>
                                <div className="billing-details__form__input">
                                    <label htmlFor="">Phone Number</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="inputText"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sub-container__checkout__shipping-info">
                            <div className="checkout__shipping-info__title">
                                SHIPPING INFO
                            </div>
                            <div className="checkout__shipping-info__form">
                                <div className="shipping-info__form__input">
                                    <label htmlFor="">Name</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="inputText"
                                    />
                                </div>
                                <div className="shipping-info__form__input">
                                    <label htmlFor="">Email Address</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="inputText"
                                    />
                                </div>
                                <div className="shipping-info__form__input">
                                    <label htmlFor="">Phone Number</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="inputText"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sub-container__checkout__payment-details">
                            <div className="checkout__payment-details__title">
                                PAYMENT DETAILS
                            </div>
                            <div className="checkout__payment-details__form">
                                <div className="payment-details__form__input">
                                    <label htmlFor="">Email Address</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="inputText"
                                    />
                                </div>
                                <div className="payment-details__form__input">
                                    <label htmlFor="">Phone Number</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="inputText"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sub-container__summary">
                        <div className="sub-container__summary__title">
                            SUMMARY
                        </div>
                        <div className="sub-container__summary__cart-list">
                            {(list?.length ?? 0) > 0 &&
                                list?.map((item) => {
                                    const nombre = item?.name.split(" ");
                                    return (
                                        (item?.count ?? 0) > 0 && (
                                            <div
                                                className="sub-container__summary__cart-list__item"
                                                key={item?.id}
                                            >
                                                <div className="cart-list__item__photo">
                                                    <img
                                                        src={`/src${item?.image.mobile}`}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="cart-list__item__overview">
                                                    <div className="cart-list__item__overview__description">
                                                        {nombre?.[0] === "XX99"
                                                            ? `${nombre?.[0]} ${nombre?.[1]} ${nombre?.[2]}`
                                                            : nombre?.[0]}
                                                    </div>
                                                    <div className="cart-list__item__overview__price">
                                                        $ {item?.price}
                                                    </div>
                                                </div>
                                                <div className="cart-list__item__amount">
                                                    x{item?.count}
                                                </div>
                                            </div>
                                        )
                                    );
                                })}
                        </div>
                        <div className="sub-container__summary__detail">
                            <div className="sub-container__summary__detail__total">
                                <span>TOTAL</span>
                                <span>$ 5396</span>
                            </div>
                            <div className="sub-container__summary__detail__shipping">
                                <span>SHIPPING</span>
                                <span>$ 50</span>
                            </div>
                            <div className="sub-container__summary__detail__vat">
                                <span>VAT (INCLUDED)</span>
                                <span>$ 1079</span>
                            </div>
                            <div className="sub-container__summary__detail__grand-total">
                                <span>GRAND TOTAL</span>
                                <span>$ 5446</span>
                            </div>
                        </div>
                        <div className="sub-container__summary__button">
                            <Button
                                color=""
                                colorFondo="colorFondoNaranja"
                                colorHover="coloHoverNaranja"
                                nombre="CONTINUE & PAY"
                                to="#"
                                onClick={() => setShowModal(true)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                padding=""
                titulo={``}
                anio={``}
                mostrarHeader={true}
                showModal={showModal}
                setShowModal={setShowModal}
                imagen=""
            >
                <div className="container-modal-order">
                    <div className="container-modal-order__icon">
                        <img src={icon} alt="" />
                    </div>
                    <div className="container-modal-order__description">
                        <span>THANK YOU FOR YOUR ORDER</span>
                        <span>
                            You will receive an email confirmation shorty
                        </span>
                    </div>
                    <div className="container-modal-order__detail">
                        <div className="container-modal-order__detail__list">
                            {(list?.length ?? 0) > 0 &&
                                list?.map((item) => {
                                    const nombre = item?.name.split(" ");
                                    return (
                                        (item?.count ?? 0) > 0 && (
                                            <div
                                                className="container-modal-order__detail__list__item"
                                                key={item?.id}
                                            >
                                                <div className="detail__list__item__photo">
                                                    <img
                                                        src={`/src${item?.image.mobile}`}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="detail__list__item__overview">
                                                    <div className="detail__list__item__overview__description">
                                                        {nombre?.[0] === "XX99"
                                                            ? `${nombre?.[0]} ${nombre?.[1]} ${nombre?.[2]}`
                                                            : nombre?.[0]}
                                                    </div>
                                                    <div className="detail__list__item__overview__price">
                                                        $ {item?.price}
                                                    </div>
                                                </div>
                                                <div className="detail__list__item__amount">
                                                    x{item?.count}
                                                </div>
                                            </div>
                                        )
                                    );
                                })}
                        </div>
                        <div className="container-modal-order__detail__total">
                            <span>GRAND TOTAL</span>
                            <span>$ 5446</span>
                        </div>
                    </div>
                    <div className="container-modal-order__button">
                        <Button
                            color=""
                            colorFondo="colorFondoNaranja"
                            colorHover="colorHoverNaranja"
                            nombre="BACK TO HOME"
                            to="/"
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Checkout;

import { useProductsList } from "../context/ProductsListContext";
import Button from "./Button";

const Checkout = () => {
    const { list } = useProductsList();

    return (
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
                    <div className="sub-container__summary__title">SUMMARY</div>
                    <div className="sub-container__summary__cart-list">
                        {(list?.length ?? 0) > 0 &&
                            list?.map((item) => {
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
                                                    {item?.slug}
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
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

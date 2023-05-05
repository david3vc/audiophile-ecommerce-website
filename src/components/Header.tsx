import { useState } from "react";
import Modal from "./modal/modal";
import { useProductsList } from "../context/ProductsListContext";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { DataModel } from "../types";
import EmptyCart from "./EmptyCart";

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const { list, setList, total, setTotal } = useProductsList();

    const cantidad = list?.filter((item) => (item?.count ?? 0) > 0);

    const handleIncreaseClick = (productId: number): void => {
        const newList = list?.map((item) => {
            if (item?.id === productId) {
                return {
                    ...item,
                    count: (item?.count ?? 0) + 1,
                    subTotal: ((item?.count ?? 0) + 1) * item.price,
                };
            } else return item;
        });

        setList?.(newList as (DataModel | undefined)[]);

        let newTotal = 0;
        for (let i = 0; i < (newList?.length ?? 0); i++) {
            newTotal += newList?.[i]?.subTotal ?? 0;
        }
        setTotal?.(newTotal);
    };

    const handleDecreaseClick = (productId: number): void => {
        const newList = list?.map((item) => {
            if (item?.id === productId) {
                return {
                    ...item,
                    count: (item?.count ?? 0) - 1,
                    subTotal: ((item?.count ?? 0) - 1) * item.price,
                };
            } else return item;
        });

        setList?.(newList as (DataModel | undefined)[]);

        let newTotal = 0;
        for (let i = 0; i < (newList?.length ?? 0); i++) {
            newTotal += newList?.[i]?.subTotal ?? 0;
        }
        setTotal?.(newTotal);
    };

    const removeAll = () => {
        const newList = list?.map((item) => {
            return {
                ...item,
                count: 0,
                subTotal: 0,
            };
        });
        setList?.(newList as (DataModel | undefined)[]);
        setTotal?.(0);
    };

    return (
        <>
            <div className="header-container">
                <div className="header-container__menu">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-list"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                        />
                    </svg>
                </div>
                <div className="header-container__logo">
                    <NavLink className="header-container__logo__term" to={"/"}>
                        audiophile
                    </NavLink>
                </div>
                <div
                    className="header-container__carrito"
                    onClick={() => setShowModal(true)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-cart3"
                        viewBox="0 0 16 16"
                    >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
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
                {(total ?? 0) > 0 ? (
                    <div className="container-modal">
                        <div className="container-modal__header">
                            <div className="container-modal__header__cart">
                                CART ({cantidad?.length})
                            </div>
                            <div
                                className="container-modal__header__remove"
                                onClick={removeAll}
                            >
                                Revome all
                            </div>
                        </div>
                        <div className="container-modal__list">
                            {(list?.length ?? 0) > 0 &&
                                list?.map((item) => {
                                    const nombre = item?.name.split(" ");
                                    return (
                                        (item?.count ?? 0) > 0 && (
                                            <div
                                                className="container-modal__list__item"
                                                key={item?.id}
                                            >
                                                <div className="item__photo">
                                                    <img
                                                        src={`/src${item?.image.mobile}`}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="item__overview">
                                                    <div className="item__overview__description">
                                                        {nombre?.[0] === "XX99"
                                                            ? `${nombre?.[0]} ${nombre?.[1]} ${nombre?.[2]}`
                                                            : nombre?.[0]}
                                                    </div>
                                                    <div className="item__overview__price">
                                                        $ {item?.price}
                                                    </div>
                                                </div>
                                                <div className="item__amount">
                                                    <span
                                                        onClick={() =>
                                                            handleDecreaseClick(
                                                                item?.id ?? 0
                                                            )
                                                        }
                                                    >
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
                                                    <span>{item?.count}</span>
                                                    <span
                                                        onClick={() =>
                                                            handleIncreaseClick(
                                                                item?.id ?? 0
                                                            )
                                                        }
                                                    >
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
                                            </div>
                                        )
                                    );
                                })}
                        </div>
                        <div className="container-modal__total">
                            <div className="container-modal__total__term">
                                TOTAL
                            </div>
                            <div className="container-modal__total__amount">
                                $ {total}
                            </div>
                        </div>
                        <div className="container-modal__button">
                            <Button
                                color=""
                                colorFondo="colorFondoNaranja"
                                colorHover="coloHoverNaranja"
                                nombre="CHECKOUT"
                                to="/checkout"
                                onClick={() => setShowModal(false)}
                            />
                        </div>
                    </div>
                ) : (
                    <EmptyCart />
                )}
            </Modal>
        </>
    );
};

export default Header;

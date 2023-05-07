import { ReactNode } from "react";
import styled from "styled-components";

interface props {
    children: ReactNode;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    mostrarHeader: boolean;
    imagen: string;
    padding: string;
    anio: string;
    isCart: boolean;
}

interface IContenedor {
    imagen: string;
    padding: string;
    isCart: boolean;
}

const modal = ({
    children,
    showModal,
    setShowModal,
    anio,
    mostrarHeader,
    imagen,
    padding,
    isCart
}: props) => {
    return (
        <>
            {showModal && (
                <Overlay>
                    <ContenedorModal imagen={imagen} padding={padding} isCart={isCart} >
                        {mostrarHeader && (
                            <EncabezadoModal>
                                <h3> <span style={{color: 'rgb(190, 190, 190)'}}>{anio}</span></h3>
                            </EncabezadoModal>
                        )}

                        <BotonCerrar onClick={() => setShowModal(false)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-x"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </BotonCerrar>
                        {children}
                    </ContenedorModal>
                </Overlay>
            )}
        </>
    );
};

export default modal;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 90px;
    z-index: 30;
`;

const ContenedorModal = styled.div<IContenedor>`
    width: 90%;
    min-height: 100px;
    
    position: relative;
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 8px 7px 29px 0px;
    
    
    
    background: white;

    font-size: 14px;

    @media screen and (min-width: 576px) {
        width: 50%;
        position: ${props => props.isCart ? 'absolute' : 'relative'};
        right: 30px;
    }

    @media screen and (min-width: 992px) {
        width: ${props => props.isCart ? '25%' : '35%'};
        right: ${props => props.isCart ? '170px' : '0px'};
    }
`;

const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 90%;

    h3 {
        font-weight: 600;
        font-size: 20px;
        color: white;
        padding: 0;
        margin: 0;
    }

    @media screen and (min-width: 992px) {
        h3 {
            font-size: 26px;
        }
    }
`;

const BotonCerrar = styled.div`
    position: absolute;
    top: 15px;
    right: 20px;

    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: 0.3s ease all;
    border-radius: 5px;
    color: #fc4747;

    &:hover {
        background: #f2f2f2;
    }

    svg {
        width: 100%;
        height: 100%;
    }
`;

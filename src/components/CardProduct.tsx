import Button from "./Button";

interface ICardProduct {
    name: string;
    url_img: string;
}

const CardProduct = ({ name, url_img }: ICardProduct) => {
    return (
        <div className="container-card-product">
            <div className="container-card-product__photo">
                <img src={url_img} alt="" />
            </div>
            <div className="container-card-product__name">{name}</div>
            <Button color="colorGris" nombre="SHOP" colorFondo="" colorHover="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                    color="#d87d4a"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                </svg>
            </Button>
        </div>
    );
};

export default CardProduct;

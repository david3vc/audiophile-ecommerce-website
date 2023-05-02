import Button from "./Button";
import { OthersModel } from "../types";

interface ISuggestedProduct {
    other: OthersModel;
}

const SuggestedProduct = ({ other }: ISuggestedProduct) => {
    return (
        <div className="container-suggested-product">
            <div className="container-suggested-product__photo">
                <img src={`/src${other.image.mobile}`} alt="" />
            </div>
            <div className="container-suggested-product__name">
                {other.name}
            </div>
            <Button
                colorFondo="colorFondoNaranja"
                color=""
                colorHover="colorHoverNaranja"
                nombre="SEE PRODUCT"
                to=""
            />
        </div>
    );
};

export default SuggestedProduct;

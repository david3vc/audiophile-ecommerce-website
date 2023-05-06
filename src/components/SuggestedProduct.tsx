import Button from "./Button";
import { OthersModel } from "../types";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ISuggestedProduct {
    other: OthersModel;
}

const SuggestedProduct = ({ other }: ISuggestedProduct) => {
    const matches = useMediaQuery('(min-width:576px)');
    return (
        <div className="container-suggested-product">
            <div className="container-suggested-product__photo">
                <img src={matches ? `/src${other.image.tablet}` : `/src${other.image.mobile}`} alt="" />
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

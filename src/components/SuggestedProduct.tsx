import Button from "./Button";
import { OthersModel } from "../types";
import useMediaQuery from "@mui/material/useMediaQuery";
import SuggestedProductPhoto from "./SuggestedProductPhoto";

interface ISuggestedProduct {
    other: OthersModel;
}

const SuggestedProduct = ({ other }: ISuggestedProduct) => {
    const matches = useMediaQuery("(min-width:576px)");
    const matchesDesktop = useMediaQuery("(min-width:992px)");
    return (
        <div className="container-suggested-product">
            <div className="container-suggested-product__photo">
                {matchesDesktop ? (
                    <img src={other.image.desktop} alt="" />
                ) : (
                    <SuggestedProductPhoto
                        matches={matches}
                        mobile={other.image.mobile}
                        tablet={other.image.tablet}
                    />
                )}
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

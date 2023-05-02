import { OthersModel } from "../types";
import SuggestedProduct from "./SuggestedProduct";

interface ISuggestedProducts {
    others: OthersModel[];
}

const SuggestedProducts = ({ others }: ISuggestedProducts) => {
    return (
        <div className="container-suggested-products">
            {others.map((other) => (
                <SuggestedProduct other={other} />
            ))}
        </div>
    );
};

export default SuggestedProducts;

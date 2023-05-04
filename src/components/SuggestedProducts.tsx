import { OthersModel } from "../types";
import SuggestedProduct from "./SuggestedProduct";

interface ISuggestedProducts {
    others: OthersModel[];
}

const SuggestedProducts = ({ others }: ISuggestedProducts) => {
    return (
        <div className="container-suggested-products">
            {others.map((other, i) => (
                <SuggestedProduct other={other} key={i} />
            ))}
        </div>
    );
};

export default SuggestedProducts;

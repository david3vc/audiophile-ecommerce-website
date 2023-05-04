import { useParams } from "react-router-dom";
import Product from "../../components/Product";
import data from "../../data/data.json";
import Categories from "../../components/Categories";
import Downstairs from "../../components/Downstairs";
import SuggestedProducts from "../../components/SuggestedProducts";

const EarphoneDetail = () => {
    const { id } = useParams();
    const product = data.find(item => item.id === Number(id));
    return (
        <div>
            <Product
                subtitle="NEW PRODUCT"
                product={product}
            />
            <SuggestedProducts others={product?.others ?? []} />
            <Categories />
            <Downstairs />
        </div>
    );
};

export default EarphoneDetail;

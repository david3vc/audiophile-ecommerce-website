import { useParams } from "react-router-dom";
import Product from "../../components/Product";
import data from "../../data/data.json";
import Categories from "../../components/Categories";
import Downstairs from "../../components/Downstairs";
import SuggestedProducts from "../../components/SuggestedProducts";

const HeadPhoneDetail = () => {
    const { id } = useParams();
    const index = Number(id);
    const product = data.find(item => item.id === Number(id));
    return (
        <div>
            <Product
                id={id ?? ""}
                img={data[index-1].image.mobile}
                overview={data[index-1].description}
                price={data[index-1].price}
                subtitle="NEW PRODUCT"
                title={data[index-1].name}
                features={data[index-1].features}
                box={data[index-1].includes}
                galeria={data[index-1].gallery}
            />
            <SuggestedProducts others={product?.others ?? []} />
            <Categories />
            <Downstairs />
        </div>
    );
};

export default HeadPhoneDetail;

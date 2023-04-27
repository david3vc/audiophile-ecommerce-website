import CardProductDetail from "../../components/CardProductDetail";
import Categories from "../../components/Categories";
import Downstairs from "../../components/Downstairs";
import ViewName from "../../components/ViewName";
import data from "../../data/data.json";

const HeadPhone = () => {
    return (
        <div className="container-headphone">
            <ViewName />
            {data.map(
                (item) =>
                    item.category === "headphones" && (
                        <>
                            <CardProductDetail
                                title={item.name}
                                subtitle="NEW PRODUCT"
                                overview={item.description}
                                img={item.image.mobile}
                            />
                            <br />
                            <br />
                            <br />
                            <br />
                        </>
                    )
            )}
            <Categories />
            <Downstairs />
        </div>
    );
};

export default HeadPhone;

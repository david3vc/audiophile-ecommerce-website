import CardProductDetail from "../../components/CardProductDetail";
import Categories from "../../components/Categories";
import Downstairs from "../../components/Downstairs";
import ViewName from "../../components/ViewName";
import data from "../../data/data.json";

const HeadPhone = () => {
    return (
        <div className="container-headphone">
            <ViewName name="HEADPHONES" />
            {data.map(
                (item) =>
                    item.category === "headphones" && (
                        <>
                            <CardProductDetail
                                title={item.name}
                                subtitle="NEW PRODUCT"
                                overview={item.description}
                                img={item.image.mobile}
                                to={`/${item.category}/${item.id}`}
                                key={item.id}
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

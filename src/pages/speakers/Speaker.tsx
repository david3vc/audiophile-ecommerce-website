import CardProductDetail from "../../components/CardProductDetail";
import Categories from "../../components/Categories";
import Downstairs from "../../components/Downstairs";
import ViewName from "../../components/ViewName";
import data from "../../data/data.json";

const Speaker = () => {
    return (
        <div className="container-speaker">
            <ViewName name="SPEAKERS" />
            {data.map(
                (item, i) =>
                    item.category === "speakers" && (
                        <>
                            <CardProductDetail
                                title={item.name}
                                subtitle="NEW PRODUCT"
                                overview={item.description}
                                img={item.image.mobile}
                                to={`/${item.category}/${item.id}`}
                                key={item.id}
                                reverse={i %2 !== 0 ? true : false}
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

export default Speaker;

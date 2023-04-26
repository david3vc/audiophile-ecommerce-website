import CardProduct from "./CardProduct";
import headphones from '../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg';
import speakers from '../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg';
import earphones from '../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg';

const Categories = () => {
    return (
        <div className="container-categories">
            <CardProduct name="HEADPHONES" url_img={headphones} />
            <CardProduct name="SPEAKERS" url_img={speakers} />
            <CardProduct name="EARPHONES" url_img={earphones} />
        </div>
    );
};

export default Categories;

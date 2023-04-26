import Button from "../../../components/Button";

const Hero = () => {
    return (
        <div className="container-hero">
            <div className="container-hero__category">NEW PRODUCT</div>
            <div className="container-hero__product-name">
                XX99 MARK II HEADPHONES
            </div>
            <div className="container-hero__producto-overview">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
            </div>
            <Button nombre="SEE PRODUCT" colorFondo="colorFondoNaranja" colorHover="colorHoverNaranja" />
        </div>
    );
};

export default Hero;

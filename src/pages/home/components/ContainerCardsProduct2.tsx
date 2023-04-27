import speakerZX7 from "../../../assets/home/mobile/image-speaker-zx7.jpg";
import earphonesyx1 from "../../../assets/home/mobile/image-earphones-yx1.jpg";
import CardProduct2 from "./CardProduct2";

const ContainerCardsProduct2 = () => {
    return (
        <div className="container-cards-product2">
            <CardProduct2
                isButton={true}
                imagen={speakerZX7}
                height="275px"
                name="ZX7 SPEAKER"
            />
            <CardProduct2
                isButton={false}
                imagen={earphonesyx1}
                height="175px"
                name=""
            />
            <CardProduct2
                isButton={true}
                imagen=""
                height="175px"
                name="YX1 EARPHONES"
            />
        </div>
    );
};

export default ContainerCardsProduct2;

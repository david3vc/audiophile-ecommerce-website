import speakerZX7Mobile from "../../../assets/home/mobile/image-speaker-zx7.jpg";
import speakerZX7Destok from "../../../assets/home/desktop/image-speaker-zx7.jpg";
import earphonesyx1 from "../../../assets/home/mobile/image-earphones-yx1.jpg";
import CardProduct2 from "./CardProduct2";
import useMediaQuery from "@mui/material/useMediaQuery";

const ContainerCardsProduct2 = () => {
    const matches = useMediaQuery('(min-width:992px)');
    return (
        <div className="container-cards-product2">
            <CardProduct2
                isButton={true}
                imagen={matches ? speakerZX7Destok : speakerZX7Mobile}
                height={matches ? "375px" : "275px"}
                name="ZX7 SPEAKER"
                to="/speakers/5"
            />
            <div className="container-cards-product2__earphones">
                <CardProduct2
                    isButton={false}
                    imagen={earphonesyx1}
                    height={matches ? "375px" : "175px"}
                    name=""
                    to="#"
                />
                <CardProduct2
                    isButton={true}
                    imagen=""
                    height={matches ? "375px" : "175px"}
                    name="YX1 EARPHONES"
                    to="/earphones/1"
                />
            </div>
        </div>
    );
};

export default ContainerCardsProduct2;

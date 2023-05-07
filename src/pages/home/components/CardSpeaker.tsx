import Button from "../../../components/Button";
import speaker from "../../../assets/home/mobile/image-speaker-zx9.png";

const CardSpeaker = () => {
    return (
        <div className="container-card-speaker">
            <div className="container-card-speaker-imagen">
                <div className="container-card-speaker__photo">
                    <img src={speaker} alt="" />
                </div>
            </div>
            <div className="container-card-speaker-description">
                <div className="container-card-speaker__name">
                    <span>ZX9</span>
                    <span>SPEAKER</span>
                </div>
                <div className="container-card-speaker__overview">
                    Upgrade to premium speakers that are phenomenally built to
                    deliver truly remarkable sound.
                </div>
                <div className="container-card-speaker__button">
                    <Button
                        color=""
                        colorFondo="colorFondoNegro"
                        nombre="SEE PRODUCT"
                        colorHover="colorHoverBlanco"
                        to="/speakers/6"
                    />
                </div>
            </div>
        </div>
    );
};

export default CardSpeaker;

import Button from "../../../components/Button";
import speaker from "../../../assets/home/mobile/image-speaker-zx9.png";

const CardSpeaker = () => {
    return (
        <div className="container-card-speaker">
            <div className="container-card-speaker__photo">
                <img src={speaker} alt="" />
            </div>
            <div className="container-card-speaker__name">
                <span>ZX9</span>
                <span>SPEAKER</span>
            </div>
            <div className="container-card-speaker__overview">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
            </div>
            <Button
                color=""
                colorFondo="colorFondoNegro"
                nombre="SEE PRODUCT"
                colorHover="colorHoverBlanco"
            />
        </div>
    );
};

export default CardSpeaker;

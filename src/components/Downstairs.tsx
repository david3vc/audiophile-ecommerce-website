import useMediaQuery from "@mui/material/useMediaQuery";
import gear from "../assets/shared/mobile/image-best-gear.jpg";
import gearTablet from "../assets/shared/tablet/image-best-gear.jpg";
import gearDesktop from "../assets/shared/desktop/image-best-gear.jpg";
import DownstairsPhoto from "./DownstairsPhoto";

const Downstairs = () => {
    const matches = useMediaQuery("(min-width:576px)");
    const matchesDesktop = useMediaQuery("(min-width:992px)");

    return (
        <div className="container-downstairs">
            <div className="container-downstairs-imagen">
                <div className="container-downstairs__photo">
                    {matchesDesktop ? (
                        <img src={gearDesktop} alt="" />
                    ) : (
                        <DownstairsPhoto
                            matches={matches}
                            gearMobile={gear}
                            gearTablet={gearTablet}
                        />
                    )}
                </div>
            </div>
            <div className="container-downstairs__description">
                <div className="container-downstairs__subtitle">
                    BRINGING YOU THE{" "}
                    <span style={{ color: "#d87d4a" }}>BEST</span> AUDIO GEAR
                </div>
                <div className="container-downstairs__content">
                    Located at the heart of New York City, Audiophile os the
                    premier store for high end headphone, eraphones, speaker,
                    and audio accessories. We have a large showeoom and luxury
                    demonstration rooms available for you to browse and
                    experience a wide range of our products. Stop by our store
                    to meet some of the fantastic people who make Audiophile the
                    best place to bouy your portable audio equipment.
                </div>
            </div>
        </div>
    );
};

export default Downstairs;

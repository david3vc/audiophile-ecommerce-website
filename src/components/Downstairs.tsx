import useMediaQuery from '@mui/material/useMediaQuery';
import gear from '../assets/shared/mobile/image-best-gear.jpg';
import gearTablet from '../assets/shared/tablet/image-best-gear.jpg';

const Downstairs = () => {
    const matches = useMediaQuery('(min-width:576px)');
    
    return (
        <div className="container-downstairs">
            <div className="container-downstairs__photo">
                {
                    matches ? <img src={gearTablet} alt="" /> : <img src={gear} alt="" />
                }
            </div>
            <div className="container-downstairs__subtitle">
                BRINGING YOU THE <span style={{color: '#d87d4a'}}>BEST</span>  AUDIO GEAR
            </div>
            <div className="container-downstairs__content">
                Located at the heart of New York City, Audiophile os the premier store for high end headphone, eraphones, speaker, and audio accessories. We have a large showeoom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to bouy your portable audio equipment.
            </div>
        </div>
    );
};

export default Downstairs;

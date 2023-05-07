interface IDownstairsPhoto {
    gearMobile: string;
    gearTablet: string;
    matches: boolean;
}

const DownstairsPhoto = ({
    gearMobile,
    gearTablet,
    matches,
}: IDownstairsPhoto) => {
    return (
        <>
            {matches ? (
                <img src={gearTablet} alt="" />
            ) : (
                <img src={gearMobile} alt="" />
            )}
        </>
    );
};

export default DownstairsPhoto;

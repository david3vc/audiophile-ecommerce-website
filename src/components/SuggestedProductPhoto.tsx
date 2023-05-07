interface ISuggestedProductPhoto {
    mobile: string;
    tablet: string;
    matches: boolean;
}

const SuggestedProductPhoto = ({
    mobile,
    tablet,
    matches,
}: ISuggestedProductPhoto) => {
    return (
        <>
            {matches ? (
                <img src={tablet} alt="" />
            ) : (
                <img src={mobile} alt="" />
            )}
        </>
    );
};

export default SuggestedProductPhoto;

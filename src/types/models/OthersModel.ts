import SubGalleryModel from "./SubGalleryModel";

export default interface OthersModel {
    slug: string;
    name: string;
    image: SubGalleryModel;
}
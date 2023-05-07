import BoxModel from "./BoxModel";
import GalleryModel from "./GalleryModel";
import OthersModel from "./OthersModel";
import SubGalleryModel from "./SubGalleryModel";

export default interface DataModel {
    id: number;
    slug: string;
    name: string;
    image: SubGalleryModel;
    category: string;
    categoryImage: SubGalleryModel;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: BoxModel[];
    gallery: GalleryModel;
    others: OthersModel[];
    count?: number;
    subTotal?: number;
    vat?: number;
}
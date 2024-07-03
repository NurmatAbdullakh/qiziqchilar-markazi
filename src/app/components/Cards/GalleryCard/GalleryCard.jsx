import { getImageUrl } from "../../../../utils/getImageUrl"

const GalleryCard = ({ item }) => {
    return (
        <div class="gallery__item">
            <img
                class="gallery__image bg"
                src={getImageUrl(item)}
                alt="gallery"
            />
        </div>
    )

}

export default GalleryCard
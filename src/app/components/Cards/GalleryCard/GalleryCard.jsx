import { getImageUrl } from "../../../../utils/getImageUrl"

const GalleryCard = ({ item, onClick }) => {
    return (
        <div onClick={onClick} className="gallery__item">
            <img
                className="gallery__image bg"
                src={getImageUrl(item)}
                alt="gallery"
            />
        </div>
    )

}

export default GalleryCard
import { useDisclosure } from "@chakra-ui/react"
import { useGetAllByUrlQuery } from "../../../../api/api.service"
import { getItems } from "../../../../utils/getItems"
import { getImageUrl } from "../../../../utils/getImageUrl"
import GalleryModal from "../../../components/Home/Gallery/GalleryModal"
import { useState } from "react"

const Fotogalereya = () => {
    const [currentItem, setCurrentItem] = useState(null)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { data: photos } = useGetAllByUrlQuery('rasmlars')
    const items = getItems(photos)?.slice(0, 11)

    return (
        <div className="photogallery">
            <div className="photogallery__items">
                {items?.map(item => {
                    return (
                        <div onClick={() => { onOpen(); setCurrentItem(item) }} className="photogallery__item gallery-card">
                            <div className="gallery-card__cards">
                                <div className="gallery-card__card"></div>
                                <div className="gallery-card__card"></div>
                            </div>
                            <div className="gallery-card__image">
                                <img className="bg" src={getImageUrl(item)} alt="video" />
                                <img className="bg" src="/images/video-overlay.png" alt="video" />
                            </div>
                            <div className="gallery-card__count">
                                {item?.image?.data?.length} ta rasm
                            </div>
                            <div className="gallery-card__info">
                                <div className="gallery-card__date">
                                    08.03.24 20:03
                                </div>
                                <div className="gallery-card__title">
                                    Askiya – yashirin fikr sehri, hozirjavob xalqimizning noyob xazinasi
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <GalleryModal items={currentItem?.image?.data} isOpen={isOpen} onClose={onClose} />
        </div>
    )
}
export default Fotogalereya
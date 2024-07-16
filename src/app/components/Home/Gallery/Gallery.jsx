import Link from "next/link"
import { useGetAllByUrlQuery } from "../../../../api/api.service"
import { getItems } from "../../../../utils/getItems"
import GalleryCard from "../../Cards/GalleryCard/GalleryCard"
import GalleryModal from "./GalleryModal"
import { useDisclosure } from "@chakra-ui/react"

const Gallery = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { data: photos } = useGetAllByUrlQuery('rasmlars', {
        "filters[asosiy_sahifa][$eq]": true
    })


    const items = getItems(photos)?.slice(0, 11)

    return (
        <section class="gallery">
            <div class="gallery__container container">
                <div class="gallery__title section-title ">
                    <div class="section-title__title white">Fotogalereya</div>
                    <div class="section-title__divider"></div>
                    <Link href={"/mediateka?type=fotogalereya"} class="section-title__all">
                        <div
                            class="section-title__all-text white"
                            href="./pages/mediateka/mediateka.html"
                        >
                            Barcha suratlar
                        </div>
                        <img
                            class="section-title__all-icon white"
                            src="/icons/arrowRight.svg"
                            alt="arrow-right"
                        />
                        <img
                            class="section-title__all-icon-small white"
                            src="/icons/smallArrowRight.svg"
                            alt="arrow-right"
                        />
                    </Link>
                </div>
                <div class="gallery__items">
                    {items?.map(item => <GalleryCard onClick={onOpen} key={item.id} item={item} />)}
                </div>
            </div>
            <GalleryModal items={items} isOpen={isOpen} onClose={onClose} />
        </section>
    )
}

export default Gallery
import { useGetAllByUrlQuery } from "../../../../api/api.service"
import { getItems } from "../../../../utils/getItems"
import VideoCard from "../../Cards/VideoCard/VideoCard"
import BigVideo from "../../Cards/BigVideo/BigVideo"
import { Link } from "../../../../navigation"
import VideoModal from "../../VideoModal/VideoModal"
import { useDisclosure } from "@chakra-ui/react"
import { useState } from "react"

const Retro = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [item, setItem] = useState(null)

    const { data: videos } = useGetAllByUrlQuery('videolars', {
        "filters[asosiy_sahifa][$eq]": true
    })
    const items = getItems(videos)

    const bigVideoData = items?.[0]
    const smallVideos = items?.slice(1, 5)



    return (
        <section className="retro">
            <div className="retro__container container">
                <div className="retro__title section-title">
                    <div className="section-title__title">Retro Askiyalar</div>
                    <div className="section-title__divider"></div>
                    <Link href={"/mediateka?type=video"} className="section-title__all">
                        <div
                            className="section-title__all-text"
                            href="./pages/retro/retro.html"
                        >
                            Barcha videolar
                        </div>
                        <img
                            className="section-title__all-icon"
                            src="/icons/arrowRight.svg"
                            alt="arrow-right"
                        />
                        <img
                            className="section-title__all-icon-small"
                            src="/icons/smallArrowRight.svg"
                            alt="arrow-right"
                        />
                    </Link>
                </div>
                <div className="retro__layout">
                    <BigVideo item={bigVideoData} />

                    <div className="retro__right">
                        <div className="retro__items">
                            {smallVideos?.map(item => <VideoCard onClick={() => { setItem(item); onOpen() }} item={item} key={item.id} />)}
                        </div>
                        <Link href={"/mediateka?type=video"}>
                            <button className="retro__button outline-button">
                                Barcha videolar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <VideoModal date={item?.publishedAt} videoLink={item?.video_linki} title={item?.title_uz} isOpen={isOpen} onClose={onClose} />
        </section>
    )
}

export default Retro
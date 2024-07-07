import { useGetAllByUrlQuery } from "../../../../api/api.service"
import { getItems } from "../../../../utils/getItems"
import VideoCard from "../../Cards/VideoCard/VideoCard"
import BigVideo from "../../Cards/BigVideo/BigVideo"
import Link from "next/link"

const Retro = () => {
    const { data: videos } = useGetAllByUrlQuery('videolars')
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

                    <Link href={"/mediateka?type=video"} className="retro__right">
                        <div className="retro__items">
                            {smallVideos?.map(item => <VideoCard item={item} key={item.id} />)}
                        </div>
                        <button className="retro__button outline-button">
                            Barcha videolar
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Retro
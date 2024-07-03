import { useGetAllByUrlQuery } from "../../../../api/api.service"
import { getItems } from "../../../../utils/getItems"
import VideoCard from "../../Cards/VideoCard/VideoCard"
import BigVideo from "../../Cards/BigVideo/BigVideo"

const Retro = () => {
    const { data: videos } = useGetAllByUrlQuery('videolars')
    const items = getItems(videos)

    const bigVideoData = items?.[0]
    const smallVideos = items?.slice(1, 5)



    return (
        <section class="retro">
            <div class="retro__container container">
                <div class="retro__title section-title">
                    <div class="section-title__title">Retro Askiyalar</div>
                    <div class="section-title__divider"></div>
                    <div class="section-title__all">
                        <a
                            class="section-title__all-text"
                            href="./pages/retro/retro.html"
                        >
                            Barcha askiyalar
                        </a>
                        <img
                            class="section-title__all-icon"
                            src="/icons/arrowRight.svg"
                            alt="arrow-right"
                        />
                        <img
                            class="section-title__all-icon-small"
                            src="/icons/smallArrowRight.svg"
                            alt="arrow-right"
                        />
                    </div>
                </div>
                <div class="retro__layout">
                    <BigVideo item={bigVideoData} />
                    <div class="retro__right">
                        <div class="retro__items">
                            {smallVideos?.map(item => <VideoCard item={item} key={item.id} />)}
                        </div>
                        <button class="retro__button outline-button">
                            Barcha videolar
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Retro
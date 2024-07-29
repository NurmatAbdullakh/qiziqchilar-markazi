import { Link } from "../../../../navigation"
import { getImageUrl } from "../../../../utils/getImageUrl"

const BigVideo = ({ item }) => {
    return (
        <Link href={`/video/${item?.id}`} className="retro__left big-video">
            <img
                className="big-video__image bg"
                src={getImageUrl(item)}
                alt="video"
            />
            <img
                className="big-video__overlay bg"
                src="/images/video-overlay.png"
                alt="video"
            />
            <img
                className="big-video__play-icon"
                src="/icons/play-icon.svg"
                alt="video"
            />

            <div className="big-video__info">
                <div className="big-video__date">{item?.updatedAt?.slice(0, 10)}</div>
                <div className="big-video__title">
                    {item?.title_uz}
                </div>
            </div>
        </Link>
    )
}

export default BigVideo
import Link from "next/link"
import { getImageUrl } from "../../../../utils/getImageUrl"

const VideoCard = ({ item }) => {
    return (
        <Link href={`/video/${item?.id}`} className="retro__item video-card">
            <div className="video-card__image">
                <img
                    className="video-card__bg bg"
                    src={getImageUrl(item)}
                    alt="video"
                />
                <div className="video-card__play-icon">
                    <img
                        src="/icons/play-icon.svg"
                        alt="video"
                    />
                </div>
            </div>
            <div className="video-card__body">
                <div className="video-card__date">
                    <img
                        className="video-card__icon"
                        src="/icons/calendar.svg"
                        alt="calendar"
                    />
                    <div className=" video-card__time">{item?.updatedAt?.slice(0, 10)}</div>
                </div>
                <div className="video-card__title">
                    {item?.title_uz}
                </div>
            </div>
        </Link>
    )
}

export default VideoCard
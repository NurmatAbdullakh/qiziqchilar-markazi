import Link from "next/link";
import { getImageUrl } from "../../../../utils/getImageUrl";

const AudioCard = ({ item }) => {
    return (
        <Link href={`/audio/${item?.id}`} className="audio__item audio-card">
            <img
                className="audio-card__texture"
                src="/icons/audio-texture.svg"
            />
            <div className="audio-card__image">
                <img
                    className="audio-card__image bg"
                    src={getImageUrl(item)}
                    alt="audio"
                />
                <img
                    className="audio-card__overlay bg"
                    src="/images/Overlay.png"
                    alt="overlay"
                />
                <div className="audio-card__player">
                    <div className="audio-card__play-button">
                        <img
                            className="audio-card__play"
                            src="/icons/play-icon.svg"
                            alt="play"
                        />
                    </div>
                    <div className="audio-card__progress-bar">
                        <div className="audio-card__time">1:30:00</div>
                        <div className="audio-card__progress"></div>
                    </div>
                </div>
            </div>
            <div className="audio-card__body">
                <div className="audio-card__date">
                    <div className="audio-card__icon">
                        <img src="/icons/calendar.svg" alt="calendar" />
                    </div>
                    <div className="audio-card__time">{item?.createdAt?.slice(0, 10)}</div>
                </div>
                <div className="audio-card__title">
                    {item.title_uz}
                </div>
            </div>
        </Link>
    )
}

export default AudioCard
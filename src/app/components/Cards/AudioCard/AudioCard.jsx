import Link from "next/link";
import { getImageUrl } from "../../../../utils/getImageUrl";

const AudioCard = ({ item }) => {
    return (
        <Link href={`/audio/${item?.id}`} class="audio__item audio-card">
            <img
                class="audio-card__texture"
                src="/icons/audio-texture.svg"
            />
            <div class="audio-card__image">
                <img
                    class="audio-card__image bg"
                    src={getImageUrl(item)}
                    alt="audio"
                />
                <img
                    class="audio-card__overlay bg"
                    src="/images/Overlay.png"
                    alt="overlay"
                />
                <div class="audio-card__player">
                    <div class="audio-card__play-button">
                        <img
                            class="audio-card__play"
                            src="/icons/play-icon.svg"
                            alt="play"
                        />
                    </div>
                    <div class="audio-card__progress-bar">
                        <div class="audio-card__time">1:30:00</div>
                        <div class="audio-card__progress"></div>
                    </div>
                </div>
            </div>
            <div class="audio-card__body">
                <div class="audio-card__date">
                    <div class="audio-card__icon">
                        <img src="/icons/calendar.svg" alt="calendar" />
                    </div>
                    <div class="audio-card__time">{item?.createdAt?.slice(0, 10)}</div>
                </div>
                <div class="audio-card__title">
                    {item.title_uz}
                </div>
            </div>
        </Link>
    )
}

export default AudioCard
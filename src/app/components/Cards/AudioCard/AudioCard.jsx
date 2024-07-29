import { Link } from "../../../../navigation";
import { getImageUrl } from "../../../../utils/getImageUrl";
import AudioPlayer from "./SmallAudioPlayer";

const AudioCard = ({ item }) => {
    return (
        <div className="audio__item audio-card">
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
                <AudioPlayer audioSrc={"https://admin.askiyachilar.uz" + item?.audio_file.data?.attributes?.url} />
            </div>
            <Link href={`/audio/${item?.id}`}>
                <div href={`/audio/${item?.id}`} className="audio-card__body">
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
        </div>
    )
}

export default AudioCard
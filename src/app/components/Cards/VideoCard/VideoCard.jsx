const VideoCard = ({ item }) => {
    return (
        <div class="retro__item video-card">
            <div class="video-card__image">
                <img
                    class="video-card__bg bg"
                    src="/images/video.jpg"
                    alt="video"
                />
                <img
                    class="video-card__play-icon"
                    src="/icons/play-icon.svg"
                    alt="video"
                />
            </div>
            <div class="video-card__body">
                <div class="video-card__date">
                    <img
                        class="video-card__icon"
                        src="/icons/calendar.svg"
                        alt="calendar"
                    />
                    <div class=" video-card__time">{item?.updatedAt?.slice(0, 10)}</div>
                </div>
                <div class="video-card__title">
                    {item?.title_uz}
                </div>
            </div>
        </div>
    )
}

export default VideoCard
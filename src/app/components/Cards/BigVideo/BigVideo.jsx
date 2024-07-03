const BigVideo = ({ item }) => {
    return (
        <div class="retro__left big-video">
            <img
                class="big-video__image bg"
                src="/images/big-video.jpg"
                alt="video"
            />
            <img
                class="big-video__overlay bg"
                src="/images/video-overlay.png"
                alt="video"
            />
            <img
                class="big-video__play-icon"
                src="/icons/play-icon.svg"
                alt="video"
            />

            <div class="big-video__info">
                <div class="big-video__date">{item?.updatedAt?.slice(0, 10)}</div>
                <div class="big-video__title">
                    {item?.title_uz}
                </div>
            </div>
        </div>
    )
}

export default BigVideo
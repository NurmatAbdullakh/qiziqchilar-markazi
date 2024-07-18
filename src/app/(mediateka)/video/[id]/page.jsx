"use client";
import { useParams } from "next/navigation";
import { useGetAllByUrlQuery, useGetOneByUrlQuery } from "../../../../api/api.service";
import {
    BlocksRenderer,
} from "@strapi/blocks-react-renderer";
import { getImageUrl } from "../../../../utils/getImageUrl";
import { Text, useDisclosure } from "@chakra-ui/react";
import VideoModal from "../../../components/VideoModal/VideoModal";
import BredCrumbs from "../../../components/BredCrumbs";
import { getItems } from "../../../../utils/getItems";
import Link from "next/link";
import { useState } from "react";

const SingleVideo = () => {
    const [currentVideo, setCurrentVideo] = useState(null)
    const { isOpen, onOpen, onClose } = useDisclosure()


    const { id } = useParams()
    const { data } = useGetOneByUrlQuery('videolars', id)
    const item = data?.data

    const { data: videos } = useGetAllByUrlQuery('videolars')
    const items = getItems(videos)

    const openVideoModal = (video) => {
        onOpen()
        setCurrentVideo(video)
    }

    const handleClose = () => {
        onClose()
        setCurrentVideo(item)
    }

    return (
        <main className="main  single-video">
            <BredCrumbs items={[
                {
                    title: "Video",
                    link: "/mediateka?type=video"
                }
                ,
                {
                    title: item?.title_uz,
                    link: item?.title_uz
                }
            ]} />
            <section className="hero__with-title hero__with-title">
                <img className="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <img className="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <div className="hero__with-title-container container">
                </div>
            </section>
            <section className="data">
                <div className="data__container container page-layout">
                    <div className="page-layout__left">
                        <div className="data__title">
                            {item?.title_uz}
                        </div>
                        <div className="page-layout__statistics statistics">
                            <div className="statistics__item">
                                <img src="/icons/statistics/current.svg" alt="calendar" />
                                <div className="statistics__text">O‘zbekiston</div>
                            </div>
                            <div className="statistics__item">
                                <img src="/icons/statistics/calendar.svg" alt="calendar" />
                                <div className="statistics__text">10-oktabr 2023</div>
                            </div>
                            <div className="statistics__item">
                                <img src="/icons/statistics/volume.svg" alt="calendar" />
                                <div className="statistics__text">{item?.number_views}</div>
                            </div>
                        </div>
                        <div className="big-video data__banner">
                            <img className="big-video__image bg" src={getImageUrl(item)} alt="video" />
                            <img className="big-video__overlay bg" src="/images/video-overlay.png" alt="video" />
                            <div className="big-video__play-icon">
                                <img onClick={onOpen} src="/icons/play-icon.svg" alt="video" />
                            </div>

                            <div className="big-video__info">
                                <div className="big-video__date">
                                    {item?.publishedAt?.slice(0, 10)}
                                </div>
                                <div className="big-video__title">
                                    {item?.title_uz}
                                </div>
                            </div>
                        </div>

                        <div className="data__text">
                            {item?.text_uz && <BlocksRenderer content={item?.text_uz} />}
                        </div>
                    </div>
                    <div className="page-layout__right">
                        <Text fontSize={"28px"} fontWeight={600} mb={6}>Tavsiya etamiz</Text>
                        <div className="page-layout__right-items">
                            {items?.map(item =>
                                <div className="data__item video-card">
                                    <div className="video-card__image">
                                        <img className="video-card__bg bg" src={getImageUrl(item)} alt="video" />
                                        <img onClick={() => openVideoModal(item)} className="video-card__play-icon" src="/icons/play-icon.svg"
                                            alt="video" />
                                    </div>
                                    <Link href={`/video/${item?.id}`} key={item?.id} >
                                        <div className="video-card__body">
                                            <div className="video-card__date">
                                                <img className="video-card__icon" src="/icons/calendar.svg"
                                                    alt="calendar" />
                                                <div className=" video-card__time">
                                                    {item?.updatedAt?.slice(0, 10)}
                                                </div>
                                            </div>
                                            <div className="video-card__title">
                                                {item?.title_uz}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <VideoModal date={currentVideo?.publishedAt} videoLink={currentVideo?.video_linki} title={currentVideo?.title_uz} isOpen={isOpen} onClose={handleClose} />
        </main>
    )
}

export default SingleVideo
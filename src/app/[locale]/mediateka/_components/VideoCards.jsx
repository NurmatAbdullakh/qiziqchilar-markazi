"use client";
import { SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { useGetInfiniteQuery } from "../../../../api/api.service"
import { getItemsInfinite } from "../../../../utils/getItems"
import { Link } from "../../../../navigation";
import { getImageUrl } from "../../../../utils/getImageUrl";
import VideoModal from "../../../components/VideoModal/VideoModal";
import { useState } from "react";

const VideoCards = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { data: videos, hasNextPage, fetchNextPage } = useGetInfiniteQuery('videolars')

    const items = getItemsInfinite(videos?.pages?.flatMap((page) => page?.list)) || [];

    const [currentVideo, setCurrentVideo] = useState(null)

    const openVideoModal = (video) => {
        setCurrentVideo(video)
        onOpen()
    }

    return (
        <>
            <SimpleGrid mb={'30px'} columns={[1, 2, 3]} spacing='20px' >
                {items?.map((item) => {

                    return (
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
                    )
                })}
            </SimpleGrid>
            {hasNextPage && <div onClick={() => fetchNextPage()} className="data__more-button ">
                <button className="secondary-button">
                    Ko’proq yuklash
                    <img src="/icons/Download.svg" alt=" arrow " />
                </button>
            </div>}
            <VideoModal date={currentVideo?.publishedAt} videoLink={currentVideo?.video_linki} title={currentVideo?.title_uz} isOpen={isOpen} onClose={onClose} />
        </>

    )

}
export default VideoCards
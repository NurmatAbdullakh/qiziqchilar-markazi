"use client";
import { SimpleGrid } from "@chakra-ui/react";
import { useGetAllByUrlQuery } from "../../../api/api.service"
import { getItems } from "../../../utils/getItems"
import Link from "next/link";
import { getImageUrl } from "../../../utils/getImageUrl";

const VideoCards = () => {
    const { data: videos } = useGetAllByUrlQuery('videolars')
    const items = getItems(videos)
    return (
        <>
            <SimpleGrid mb={'30px'} columns={[1, 2, 3]} spacing='20px' >
                {items?.map((item) => {

                    return (
                        <Link href={`/video/${item?.id}`} className="data__item video-card">
                            <div className="video-card__image">
                                <img className="video-card__bg bg" src={getImageUrl(item)} alt="video" />
                                <img className="video-card__play-icon" src="/icons/play-icon.svg"
                                    alt="video" />
                            </div>
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
                    )
                })}
            </SimpleGrid>
            <div className="data__more-button ">
                <button className="secondary-button">
                    Ko’proq yuklash
                    <img src="/icons/Download.svg" alt=" arrow " />
                </button>
            </div>
        </>

    )

}
export default VideoCards
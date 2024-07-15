import { SimpleGrid } from "@chakra-ui/react";
import { useGetAllByUrlQuery } from "../../../../api/api.service";
import AudioCard from "../../Cards/AudioCard/AudioCard";
import { getItems } from "../.././../../utils/getItems"
import Link from "next/link";

const Audios = () => {
    const { data: audios } = useGetAllByUrlQuery('audiolars', {
        "filters[asosiy_sahifa][$eq]": true
    })

    const items = getItems(audios)

    return (
        <section className="audio">
            <div className="audio__container container">
                <div className="gallery__title section-title ">
                    <div className="section-title__title white">Audio</div>
                    <div className="section-title__divider"></div>
                    <Link href={"/mediateka?type=audio"} className="section-title__all">
                        <div className="section-title__all-text white" href="#">
                            Barcha audiolar
                        </div>
                        <img
                            className="section-title__all-icon white"
                            src="/icons/arrowRight.svg"
                            alt="arrow-right"
                        />
                        <img
                            className="section-title__all-icon-small white"
                            src="/icons/smallArrowRight.svg"
                            alt="arrow-right"
                        />
                    </Link>
                </div>
                <SimpleGrid columns={[1, 2, 4]} spacing='20px' >
                    {items?.slice(0, 4)?.map((item) => {
                        return <AudioCard key={item.id} item={item} />
                    })}
                </SimpleGrid>
            </div>
        </section>
    )

}

export default Audios
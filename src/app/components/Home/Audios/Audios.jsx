import { SimpleGrid } from "@chakra-ui/react";
import { useGetAllByUrlQuery } from "../../../../api/api.service";
import AudioCard from "../../Cards/AudioCard/AudioCard";
import { getItems } from "../.././../../utils/getItems"

const Audios = () => {
    const { data: audios } = useGetAllByUrlQuery('audiolars')

    const items = getItems(audios)

    return (
        <section class="audio">
            <div class="audio__container container">
                <div class="gallery__title section-title ">
                    <div class="section-title__title white">Audio</div>
                    <div class="section-title__divider"></div>
                    <div class="section-title__all">
                        <a class="section-title__all-text white" href="#">
                            Barcha audiolar
                        </a>
                        <img
                            class="section-title__all-icon white"
                            src="/icons/arrowRight.svg"
                            alt="arrow-right"
                        />
                        <img
                            class="section-title__all-icon-small white"
                            src="/icons/smallArrowRight.svg"
                            alt="arrow-right"
                        />
                    </div>
                </div>
                <SimpleGrid columns={[1, 2, 4]} spacing='20px' >
                    {items?.map((item) => {
                        return <AudioCard item={item} />
                    })}
                </SimpleGrid>
            </div>
        </section>
    )

}

export default Audios
import { SimpleGrid } from "@chakra-ui/react"
import { useGetAllByUrlQuery } from "../../../api/api.service"
import { getItems } from "../../../utils/getItems"
import AudioCard from "../../components/Cards/AudioCard/AudioCard"

const AudioCards = () => {
    const { data: audios } = useGetAllByUrlQuery('audiolars')

    const items = getItems(audios)

    return (
        <>
            <SimpleGrid mb={'30px'} columns={[1, 2, 3]} spacing='20px' >
                {items?.map((item) => {
                    return <AudioCard key={item.id} item={item} />
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

export default AudioCards
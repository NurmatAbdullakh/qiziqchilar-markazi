import { SimpleGrid } from "@chakra-ui/react"
import { useGetInfiniteQuery } from "../../../../api/api.service"
import { getItemsInfinite } from "../../../../utils/getItems"
import AudioCard from "../../../components/Cards/AudioCard/AudioCard"

const AudioCards = () => {
    const { data: audios, hasNextPage, fetchNextPage } = useGetInfiniteQuery('audiolars')

    const items = getItemsInfinite(audios?.pages?.flatMap((page) => page?.list)) || []

    return (
        <>
            <SimpleGrid mb={'30px'} columns={[1, 2, 3]} spacing='20px' >
                {items?.map((item) => {
                    return <AudioCard key={item.id} item={item} />
                })}
            </SimpleGrid>
            {hasNextPage && <div onClick={() => fetchNextPage()} className="data__more-button ">
                <button className="secondary-button">
                    Ko’proq yuklash
                    <img src="/icons/Download.svg" alt=" arrow " />
                </button>
            </div>}
        </>

    )
}

export default AudioCards
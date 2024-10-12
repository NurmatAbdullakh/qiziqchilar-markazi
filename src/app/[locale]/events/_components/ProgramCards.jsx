"use client"
import { useGetInfiniteQuery } from "../../../../api/api.service"
import { getItemsInfinite } from "../../../../utils/getItems"
import ProgramCard from "../../../components/Cards/ProgramCard/ProgramCard"

const ProgramCards = () => {

    const { data: audios, hasNextPage, fetchNextPage } = useGetInfiniteQuery('dasturlars')

    const items = getItemsInfinite(audios?.pages?.flatMap((page) => page?.list)) || []

    return <>
        {items?.map((item, i) => {
            return <ProgramCard key={item.id} item={item} index={i} />;
        })}
        {hasNextPage && <div onClick={() => fetchNextPage()} className="data__more-button ">
            <button className="secondary-button">
                Ko’proq yuklash
                <img src="/icons/Download.svg" alt=" arrow " />
            </button>
        </div>}
    </>
}
export default ProgramCards
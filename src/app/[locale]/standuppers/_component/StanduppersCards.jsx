"use client"
import { SimpleGrid } from "@chakra-ui/react"
import { useParams } from "next/navigation"
import { useGetInfiniteQuery } from "../../../../api/api.service"
import { Link } from "../../../../navigation"
import { getImageUrl } from "../../../../utils/getImageUrl"
import { getItemsInfinite } from "../../../../utils/getItems"

const StanduppersCards = () => {
    const { locale } = useParams()

    const { data: audios, hasNextPage, fetchNextPage } = useGetInfiniteQuery('soz-ustalaris')

    const items = getItemsInfinite(audios?.pages?.flatMap((page) => page?.list)) || []

    return (
        <>
            <SimpleGrid columns={[1, 2, 3]} spacing='20px' >
                {
                    items?.map((item) => {
                        return (<div key={item?.id} className="data__item jocker-card">
                            <Link href={`/standuppers/${item?.id}`}>
                                <img className="jocker-card__image bg" src={getImageUrl(item)}
                                    alt="jocker-card" />
                                <div className="jocker-card__info">
                                    <div className="jocker-card__title">{item?.[`full_name_${locale}`]}</div>
                                    <div className="jocker-card__subtitle">{item?.Kasbi}</div>
                                </div>
                                <img className="jocker-card__texture" src="/icons/jocker-card-texture.svg"
                                    alt="texture" />
                            </Link>
                        </div>)
                    })
                }
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

export default StanduppersCards
"use client"
import Link from "next/link"
import { useGetAllByUrlQuery } from "../../../api/api.service"
import { getImageUrl } from "../../../utils/getImageUrl"
import { getItems } from "../../../utils/getItems"
import { SimpleGrid } from "@chakra-ui/react"

const StanduppersCards = () => {
    const { data: standUppers } = useGetAllByUrlQuery('soz-ustalaris')

    const items = getItems(standUppers) || []

    return (
        <SimpleGrid columns={[1, 2, 3]} spacing='20px' >
            {
                items?.map((item) => {
                    return (<div key={item?.id} className="data__item jocker-card">
                        <Link href={`/standuppers/${item?.id}`}>
                            <img className="jocker-card__image bg" src={getImageUrl(item)}
                                alt="jocker-card" />
                            <div className="jocker-card__info">
                                <div className="jocker-card__title">{item?.full_name_uz}</div>
                                <div className="jocker-card__subtitle">{item?.Kasbi}</div>
                            </div>
                            <img className="jocker-card__texture" src="/icons/jocker-card-texture.svg"
                                alt="texture" />
                        </Link>
                    </div>)
                })
            }
        </SimpleGrid>
    )
}

export default StanduppersCards
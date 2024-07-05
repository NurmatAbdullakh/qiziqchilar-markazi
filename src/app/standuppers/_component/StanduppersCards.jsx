"use client"
import Link from "next/link"
import { useGetAllByUrlQuery } from "../../../api/api.service"
import { getImageUrl } from "../../../utils/getImageUrl"
import { getItems } from "../../../utils/getItems"

const StanduppersCards = () => {
    const { data: standUppers } = useGetAllByUrlQuery('soz-ustalaris')

    const items = getItems(standUppers) || []

    return (
        <div class="data__items">
            {
                items?.map((item) => {
                    return (<div class="data__item jocker-card">
                        <Link href={`/standuppers/${item?.id}`}>
                            <img class="jocker-card__image bg" src={getImageUrl(item)}
                                alt="jocker-card" />
                            <div class="jocker-card__info">
                                <div class="jocker-card__title">{item?.full_name_uz}</div>
                                <div class="jocker-card__subtitle">{item?.Kasbi}</div>
                            </div>
                            <img class="jocker-card__texture" src="/icons/jocker-card-texture.svg"
                                alt="texture" />
                        </Link>
                    </div>)
                })
            }
        </div>
    )
}

export default StanduppersCards
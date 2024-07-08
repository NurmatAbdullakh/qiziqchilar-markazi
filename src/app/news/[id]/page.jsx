"use client";
import { useParams } from "next/navigation";
import { useGetOneByUrlQuery } from "../../../api/api.service";
import { getItem } from "../../../utils/getItem";
import { getImageUrl } from "../../../utils/getImageUrl";

const SingleNews = () => {

    const { id } = useParams()
    const { data } = useGetOneByUrlQuery('news123', id)
    const item = data?.data


    return <main className="main single-news" style={{ color: 'red' }}>{item?.id}</main>
}

export default SingleNews
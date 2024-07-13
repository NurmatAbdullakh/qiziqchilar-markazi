"use client"
import { getItems } from "../../../utils/getItems"
import ProgramCard from "../../components/Cards/ProgramCard/ProgramCard"
import { useGetAllByUrlQuery } from "../../../api/api.service"

const ProgramCards = () => {
    const { data: programs } = useGetAllByUrlQuery("dasturlars");

    const items = getItems(programs) || [];
    return items?.map((item, i) => {
        return <ProgramCard key={item.id} item={item} index={i} />;
    });
}
export default ProgramCards
"use client";
import { useGetAllByUrlQuery } from "../../../../api/api.service";
import { getItems } from "../../../../utils/getItems";
import GostrolCard from "../../../components/Cards/GostrolCards/GostrolCard";

const GostrolCards = () => {
  const { data: gostrolls } = useGetAllByUrlQuery("gastrollars");

  const items = getItems(gostrolls) || [];
  return items?.map((item) => {
    return <GostrolCard key={item.id} item={item} />;
  });
};

export default GostrolCards;

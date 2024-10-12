"use client";
import { useGetInfiniteQuery } from "../../../../api/api.service";
import { getItemsInfinite } from "../../../../utils/getItems";
import GostrolCard from "../../../components/Cards/GostrolCards/GostrolCard";

const GostrolCards = () => {
  const {
    data: audios,
    hasNextPage,
    fetchNextPage,
  } = useGetInfiniteQuery("gastrollars");

  const items =
    getItemsInfinite(audios?.pages?.flatMap((page) => page?.list)) || [];

  return (
    <>
      {items?.map((item) => {
        return <GostrolCard key={item.id} item={item} />;
      })}
      {hasNextPage && (
        <div onClick={() => fetchNextPage()} className="data__more-button ">
          <button className="secondary-button">
            Ko’proq yuklash
            <img src="/icons/Download.svg" alt=" arrow " />
          </button>
        </div>
      )}
    </>
  );
};

export default GostrolCards;

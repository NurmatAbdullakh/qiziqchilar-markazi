import { useGetAllByUrlQuery } from "../../../../api/api.service";
import ProgramCard from "../../Cards/ProgramCard/ProgramCard";
import { getItems } from "../.././../../utils/getItems"
import Link from "next/link";


const Programs = () => {
  const { data: programs } = useGetAllByUrlQuery('dasturlars', {
    "filters[asosiy_sahifa][$eq]": true
  })

  const items = getItems(programs) || []


  return (
    <section className="program">
      <div className="program__container container">
        <div className="program__title section-title">
          <div className="section-title__title">Dasturlar</div>
          <div className="section-title__divider"></div>
          <Link href={"/events?type=dasturlar"} className="section-title__all">
            <div
              className="section-title__all-text"
              href="./pages/program/program.html"
            >
              Barcha dasturlar
            </div>
            <img
              className="section-title__all-icon"
              src="/icons/arrowRight.svg"
              alt="arrow-right"
            />
            <img
              className="section-title__all-icon-small"
              src="/icons/smallArrowRight.svg"
              alt="arrow-right"
            />
          </Link>
        </div>
        <div className="program__items">
          {items?.slice(0, 4)?.map((item, index) => {
            return <ProgramCard key={item?.id} item={item} index={index} />
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
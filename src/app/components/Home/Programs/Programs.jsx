import { useGetAllByUrlQuery } from "../../../../api/api.service";
import ProgramCard from "../../Cards/ProgramCard/ProgramCard";
import { getItems } from "../.././../../utils/getItems"


const Programs = () => {
  const { data: programs } = useGetAllByUrlQuery('dasturlars')

  const items = getItems(programs) || []


  return (
    <section class="program">
      <div class="program__container container">
        <div class="program__title section-title">
          <div class="section-title__title">Dasturlar</div>
          <div class="section-title__divider"></div>
          <div class="section-title__all">
            <a
              class="section-title__all-text"
              href="./pages/program/program.html"
            >
              Barcha dasturlar
            </a>
            <img
              class="section-title__all-icon"
              src="/icons/arrowRight.svg"
              alt="arrow-right"
            />
            <img
              class="section-title__all-icon-small"
              src="/icons/smallArrowRight.svg"
              alt="arrow-right"
            />
          </div>
        </div>
        <div class="program__items">
          {items?.map((item) => {
            return <ProgramCard item={item} />
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
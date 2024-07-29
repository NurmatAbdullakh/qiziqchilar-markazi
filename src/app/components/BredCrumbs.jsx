import { Link } from "../../navigation"

const BredCrumbs = ({ items }) => {
    return (
        <div class="header__bredcrumbs bredcrumbs">
            <ul class="bredcrumbs__list container">
                <li class="bredcrumbs__item">
                    <img src="/icons/dot.svg" alt="home" />
                    <Link href={"/"} class="bredcrumbs__link">Bosh sahifa</Link>
                </li>
                {
                    items?.slice(0, -1)?.map((item) => {
                        return (
                            <li class="bredcrumbs__item">
                                <img src="/icons/dot.svg" alt="home" />
                                <Link href={item?.link} class="bredcrumbs__link">{item?.title}</Link>
                            </li>
                        )
                    })
                }
                <li class="bredcrumbs__item">
                    <img src="/icons/dot.svg" alt="home" />
                    <div class="bredcrumbs__link">{items?.slice(-1)?.[0]?.title}</div>
                </li>
            </ul>
        </div>
    )
}

export default BredCrumbs
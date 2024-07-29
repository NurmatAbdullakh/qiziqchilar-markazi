"use client";
import { Link } from "../../../navigation";
import { usePathname, useSearchParams } from "next/navigation";

const TabSearchParams = ({ tabs = [] }) => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const type = searchParams.get("type")

    return (
        <div className="page-layout__types types-menu">
            <div className="types-menu__title">Bo‘limlar</div>
            <ul className="types-menu__list">
                {
                    tabs.map((tab, index) => {
                        const isActive = type === tab.value
                        return (
                            <Link
                                href={`?type=${tab.value}`}
                                key={index}
                                className={`types-menu__item ${isActive && "active"}`}
                                replace
                                scroll={false}
                            >
                                <img className="types-menu__icon" src={isActive ? "/icons/starsActive.svg" : "/icons/stars.svg"} />
                                <div className="types-menu__label">{tab.label}</div>
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default TabSearchParams
import { useState } from "react"
import { useGetAllByUrlQuery } from "../../../../../api/api.service"
import { getItems } from "../../../../../utils/getItems"
import { useParams } from "next/navigation"

const Team = ({ onClick }) => {
    const { locale } = useParams()
    const [activeTab, setActiveTab] = useState(0)
    const { data: staffs } = useGetAllByUrlQuery('xodimlars')
    const items = getItems(staffs)

    const tabs = [
        {
            id: 0,
            title: 'Rahbariyat',
            items: items?.filter(i => i.lavozim_turi === "rahbar")
        },
        {
            id: 1,
            title: 'Xodimlar',
            items: items?.filter(i => i.lavozim_turi === "xodim")
        },
        {
            id: 2,
            title: 'San’at maktabi direktorlari',
            items: items?.filter(i => i.lavozim_turi === "maktab_direktori")
        },
    ]

    const bigCardData = tabs[activeTab]?.items?.[0]



    return (
        <section className="team">
            <div className="team__container container">
                <div className="team__title section-title">
                    <div className="section-title__title">Bizning jamoa</div>
                    <div className="section-title__divider"></div>
                </div>
                <div className="team__tabs tabs big">
                    <div className="tabs__tab-list">
                        {
                            tabs.map((item, index) => {
                                const isActive = index === activeTab
                                return (
                                    <div class={`tabs__tab-item ${isActive ? 'active' : ''}`}
                                        key={item.id}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        <div className="tabs__tab-title">
                                            <div className="tabs__tab-title-text">
                                                {item.title}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="team__items">
                    {bigCardData && (
                        <div onClick={() => onClick(bigCardData)} className="team__item team-card big">
                            <div className="team-card__img">
                                <img className="bg" src={"https://admin.askiyachilar.uz" + bigCardData?.profil_rasmi?.data?.attributes?.url} alt="team" />
                            </div>
                            <div className="team-card__title">{bigCardData?.[`full_name_${locale}`]}</div>
                            <div className="team-card__subtitle">{bigCardData?.Lavozimi}</div>
                            <div className="team-card__desc">
                                Markazning moddiy-texnika bazasini mustahkamlash va ijodkorlari ijtimoiy sharoitini
                                yaxshilash maqsadida Fargʻona
                                viloyati hokimligi Markazni saqlash va uning faoliyatini qoʻllab-quvvatlash uchun
                                mahalliy byudjetdan 2023 yilda 2,3
                                milliard soʻm, 2024 yildan boshlab esa Markaz talabnomasi asosida zarur mablagʻlar
                                ajratadi.
                            </div>
                            <button className="team-card__btn secondary-button">Batafsil</button>
                        </div>
                    )}
                    {
                        tabs[activeTab]?.items?.slice(1)?.map((item, index) => (
                            <div onClick={() => onClick(item)} className="team__item team-card" key={item.id}>
                                <div className="team-card__img">
                                    <img className="bg" src={"https://admin.askiyachilar.uz" + item?.profil_rasmi?.data?.attributes?.url} alt="team" />
                                </div>
                                <div className="team-card__title">{item?.[`full_name_${locale}`]}</div>
                                <div className="team-card__subtitle">{item?.Lavozimi}</div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Team
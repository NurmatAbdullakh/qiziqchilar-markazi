import { useState } from "react"
import { useGetAllByUrlQuery } from "../../../../api/api.service"
import { getItems } from "../../../../utils/getItems"

const Team = ({ onClick }) => {
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
            items: []
        },
        {
            id: 2,
            title: 'San’at maktabi direktorlari',
            items: []
        },
    ]

    const bigCardData = tabs[activeTab]?.items?.[0]



    return (
        <section class="team">
            <div class="team__container container">
                <div class="team__title section-title">
                    <div class="section-title__title">Bizning jamoa</div>
                    <div class="section-title__divider"></div>
                </div>
                <div class="team__tabs tabs big">
                    <div class="tabs__tab-list">
                        {
                            tabs.map((item, index) => {
                                const isActive = index === activeTab
                                return (
                                    <div class={`tabs__tab-item ${isActive ? 'active' : ''}`}
                                        key={item.id}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        <div class="tabs__tab-title">
                                            <div class="tabs__tab-title-text">
                                                {item.title}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <div class="team__items">
                    {bigCardData && (
                        <div onClick={() => onClick(bigCardData)} class="team__item team-card big">
                            <div class="team-card__img">
                                <img class="bg" src={"https://admin.askiyachilar.uz" + bigCardData?.profil_rasmi?.data?.attributes?.url} alt="team" />
                            </div>
                            <div class="team-card__title">{bigCardData?.full_name_uz}</div>
                            <div class="team-card__subtitle">{bigCardData?.Lavozimi}</div>
                            <div class="team-card__desc">
                                Markazning moddiy-texnika bazasini mustahkamlash va ijodkorlari ijtimoiy sharoitini
                                yaxshilash maqsadida Fargʻona
                                viloyati hokimligi Markazni saqlash va uning faoliyatini qoʻllab-quvvatlash uchun
                                mahalliy byudjetdan 2023 yilda 2,3
                                milliard soʻm, 2024 yildan boshlab esa Markaz talabnomasi asosida zarur mablagʻlar
                                ajratadi.
                            </div>
                            <button class="team-card__btn secondary-button">Batafsil</button>
                        </div>
                    )}
                    {
                        tabs[activeTab]?.items?.slice(1)?.map((item, index) => (
                            <div onClick={() => onClick(item)} class="team__item team-card" key={index}>
                                <div class="team-card__img">
                                    <img class="bg" src={"https://admin.askiyachilar.uz" + item?.profil_rasmi?.data?.attributes?.url} alt="team" />
                                </div>
                                <div class="team-card__title">{item?.full_name_uz}</div>
                                <div class="team-card__subtitle">{item?.Lavozimi}</div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Team
import { useState } from "react"
import { useGetAllByUrlQuery } from "../../../../api/api.service"
import { getItems } from "../../../../utils/getItems"
import LocationCard from "../../Cards/LocationCard/LocationCard"

const Locations = () => {
    const [activeTab, setActiveTab] = useState(0)

    const { data: schools } = useGetAllByUrlQuery('mahorat-maktablaris')



    const tabs = [
        {
            id: 0,
            title: "Maxorat maktablari",
            items: getItems(schools)
        },
        {
            id: 1,
            title: "Tadbirlar",
            items: []
        },
        {
            id: 2,
            title: "Gostrollar",
            items: []
        },
    ]

    return (
        <section class="locations">
            <div class="locations__container container">
                <div class="locations__title section-title">
                    <div class="section-title__title">Manzillar</div>
                    <div class="section-title__divider"></div>
                </div>

                <div class="locations__map">
                    <img
                        class="locations__map-image bg"
                        src="/images/map.jpg"
                    />

                    <div class="locations__tabs tabs">
                        <div class="tabs__tab-list">
                            {
                                tabs.map((item) => {
                                    const isActive = item.id === activeTab

                                    return (
                                        <div class={`tabs__tab-item ${isActive ? 'active' : ''}`} onClick={() => setActiveTab(item.id)}>
                                            <div class="tabs__tab-title">{item.title}</div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                        <div class="tabs__tab-panel">
                            <div class="locations__items">
                                {tabs[activeTab]?.items?.map((item, i) => <LocationCard key={item.id} item={item} isActive={!i} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Locations
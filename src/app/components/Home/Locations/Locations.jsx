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
        <section className="locations">
            <div className="locations__container container">
                <div className="locations__title section-title">
                    <div className="section-title__title">Manzillar</div>
                    <div className="section-title__divider"></div>
                </div>

                <div className="locations__map">
                    <img
                        className="locations__map-image bg"
                        src="/images/map.jpg"
                    />

                    <div className="locations__tabs tabs">
                        <div className="tabs__tab-list">
                            {
                                tabs.map((item) => {
                                    const isActive = item.id === activeTab

                                    return (
                                        <div class={`tabs__tab-item ${isActive ? 'active' : ''}`} onClick={() => setActiveTab(item.id)}>
                                            <div className="tabs__tab-title">{item.title}</div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                        <div className="tabs__tab-panel">
                            <div className="locations__items">
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
import React, { useState, useEffect, useRef } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useGetAllByUrlQuery } from '../../../../api/api.service';
import { getItems } from '../../../../utils/getItems';
import LocationCard from '../../Cards/LocationCard/LocationCard';

const customPlacemarkIcon = {
    iconLayout: 'default#image',
    iconImageHref: '/icons/placeMark.svg',
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -30],
    iconImageSizeHovered: [50, 0],
    iconImageOffsetHovered: [-20, -40]
};

const Locations = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeItem, setActiveItem] = useState(null);

    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current && activeItem) {
            mapRef.current.panTo([activeItem.lattitude_raqami, activeItem.longitude_raqami], {
                duration: 1000,
                flying: true,
            });
        }
    }, [activeItem]);

    useEffect(() => {
        if (mapRef.current) {
            const map = mapRef.current;

            map.behaviors.disable('scrollZoom');
            map.behaviors.disable('dblClickZoom');
            map.behaviors.disable('multiTouch');
        }
    }, []);

    const handlePlacemarkClick = (item) => {
        console.log("Placemark clicked:", item);
    };

    const handlePlacemarkMouseEnter = () => {
        customPlacemarkIcon.iconImageSize = customPlacemarkIcon.iconImageSizeHovered;
        customPlacemarkIcon.iconImageOffset = customPlacemarkIcon.iconImageOffsetHovered;
    };

    const handlePlacemarkMouseLeave = () => {
        customPlacemarkIcon.iconImageSize = [30, 30];
        customPlacemarkIcon.iconImageOffset = [-15, -30];
    };

    const { data: schools } = useGetAllByUrlQuery('mahorat-maktablaris');
    const { data: programs } = useGetAllByUrlQuery('dasturlars');
    const { data: gostrolls } = useGetAllByUrlQuery('gastrollars');

    const tabs = [
        {
            id: 0,
            title: "Maxorat maktablari",
            items: getItems(schools)
        },
        {
            id: 1,
            title: "Tadbirlar",
            items: getItems(programs)
        },
        {
            id: 2,
            title: "Gostrollar",
            items: getItems(gostrolls)
        },
    ];

    return (
        <section className="locations">
            <div className="locations__container container">
                <div className="locations__title section-title">
                    <div className="section-title__title">Manzillar</div>
                    <div className="section-title__divider"></div>
                </div>

                <div className="locations__map">
                    <YMaps>
                        <Map
                            className="bg"
                            defaultState={{
                                center: [activeItem ? activeItem.lattitude_raqami : 41.311158, activeItem ? activeItem.longitude_raqami : 69.279737],
                                zoom: 14
                            }}
                            instanceRef={mapRef}
                            width="100%"
                            height="100%"
                            style={{ width: '100%', height: '100%' }}
                            behaviors={['drag', 'dblClickZoom']}
                        >
                            {activeItem && (
                                <Placemark
                                    geometry={[activeItem.lattitude_raqami, activeItem.longitude_raqami]}
                                    options={customPlacemarkIcon}
                                    onClick={() => handlePlacemarkClick(activeItem)}
                                    onMouseEnter={handlePlacemarkMouseEnter}
                                    onMouseLeave={handlePlacemarkMouseLeave}
                                />
                            )}
                        </Map>
                    </YMaps>
                    <div className="locations__tabs tabs">
                        <div className="tabs__tab-list">
                            {tabs.map((item) => (
                                <div
                                    className={`tabs__tab-item ${item.id === activeTab ? 'active' : ''}`}
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                >
                                    <div className="tabs__tab-title">{item.title}</div>
                                </div>
                            ))}
                        </div>
                        <div className="tabs__tab-panel">
                            <div className="locations__items">
                                {tabs[activeTab]?.items?.map((item, i) => (
                                    <LocationCard
                                        key={item.id}
                                        item={item}
                                        isActive={activeItem?.id === item.id}
                                        onClick={() => setActiveItem(item)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Locations;

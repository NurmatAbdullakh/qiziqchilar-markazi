import React, { useState, useEffect, useRef } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { getItems } from '../../../../utils/getItems';
import LocationCard from '../../../components/Cards/LocationCard/LocationCard';
import { useGetAllByUrlQuery } from '../../../../api/api.service';

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
    ];

    return (

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
                <div className="tabs__tab-panel">
                    <div className="locations__items">
                        {tabs[activeTab]?.items?.map((item, i) => (
                            <LocationCard key={item.id} item={item} isActive={activeItem?.id === item.id} onClick={() => setActiveItem(item)} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Locations;

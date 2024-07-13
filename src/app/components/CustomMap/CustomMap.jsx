import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';


const CustomMap = ({
    activeItem,
    mapRef,
    handlePlacemarkClick,
    handlePlacemarkMouseEnter,
    handlePlacemarkMouseLeave,
    customPlacemarkIcon
}) => {

    return <YMaps>
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
}

export default CustomMap
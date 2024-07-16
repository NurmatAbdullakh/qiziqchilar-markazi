
const TeamModal = ({ onClose, selectedEmployee }) => {
    return (<sectio className="modal">
        <div className="modal__content ">
            <div className="modal__body team-modal">
                <div className="team-modal__header">
                    <div className="team-modal__title">Hududiy boshqarmalar</div>
                    <img onClick={onClose} className="team-modal__close-btn" src="/icons/close.svg" />
                </div>
                <div className="team-modal__work">
                    {
                        selectedEmployee?.Qabul_kunlari?.map((item) => {
                            return (
                                <div className="team-modal__work-time">
                                    <div div className="team-modal__days">{item?.Qabul_kunlari}</div>
                                    {/* <div className="team-modal__dot"></div> */}
                                    <div className="team-modal__time">
                                        {item?.qabul_boshlanish_vaqti?.slice(0, 5)} - {item?.qabul_tugash_vaqti?.slice(0, 5)}</div>
                                </div>
                            )
                        })
                    }
                    <div className="team-modal__work-place">
                        Toshkent shahar boshqarmasi
                    </div>
                </div>
                <div className="team-modal__location">
                    <img className="team-modal__location-icon" src="/icons/location.svg" />
                    <div className="team-modal__location-text">{selectedEmployee?.qabul_manzili_uz}</div>
                </div>
                <div className="team-modal__phone">
                    <img className="team-modal__phone-icon" src="/icons/phone.svg" />
                    <div className="team-modal__phone-text">{selectedEmployee?.telefon_raqami}</div>
                </div>
                <div className="team-modal__employe">
                    <div className="team-modal__image">
                        <img className="bg" src={"https://admin.askiyachilar.uz" + selectedEmployee?.profil_rasmi?.data?.attributes?.url} alt="team" />
                    </div>
                    <div className="team-modal__present">
                        <div className="team-modal__name">{selectedEmployee?.full_name_uz}</div>
                        <div className="team-modal__subname">{selectedEmployee?.Lavozimi}</div>
                    </div>
                </div>
            </div>
        </div>
    </sectio >)
}

export default TeamModal
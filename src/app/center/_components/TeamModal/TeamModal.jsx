
const TeamModal = ({ onClose, selectedEmployee }) => {
    console.log(selectedEmployee);
    return (<sectio class="modal">
        <div class="modal__content ">
            <div class="modal__body team-modal">
                <div class="team-modal__header">
                    <div class="team-modal__title">Hududiy boshqarmalar</div>
                    <img onClick={onClose} class="team-modal__close-btn" src="/icons/close.svg" />
                </div>
                <div class="team-modal__work">
                    <div class="team-modal__work-time">
                        <div class="team-modal__days">Dushanba - Juma</div>
                        <div class="team-modal__dot"></div>
                        <div class="team-modal__time">09:00 - 18:00</div>
                    </div>
                    <div class="team-modal__work-place">
                        Toshkent shahar boshqarmasi
                    </div>
                </div>
                <div class="team-modal__location">
                    <img class="team-modal__location-icon" src="/icons/location.svg" />
                    <div class="team-modal__location-text">{selectedEmployee?.qabul_manzili}</div>
                </div>
                <div class="team-modal__phone">
                    <img class="team-modal__phone-icon" src="/icons/phone.svg" />
                    <div class="team-modal__phone-text">{selectedEmployee?.telefon_raqami}</div>
                </div>
                <div class="team-modal__employe">
                    <div class="team-modal__image">
                        <img class="bg" src={"https://admin.askiyachilar.uz" + selectedEmployee?.profil_rasmi?.data?.attributes?.url} alt="team" />
                    </div>
                    <div class="team-modal__present">
                        <div class="team-modal__name">{selectedEmployee?.full_name_uz}</div>
                        <div class="team-modal__subname">{selectedEmployee?.Lavozimi}</div>
                    </div>
                </div>
            </div>
        </div>
    </sectio>)
}

export default TeamModal
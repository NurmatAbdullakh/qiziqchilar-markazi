import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
import Slider from "./Slider"

const GalleryModal = ({ isOpen, onClose }) => {
    return (
        <>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg={"rgba(8, 8, 16, 0.80"} />
                <ModalContent maxW={"600px"} bg="transparent">
                    <ModalCloseButton onClick={onClose} />
                    <ModalBody>
                        <Slider />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )

}

export default GalleryModal
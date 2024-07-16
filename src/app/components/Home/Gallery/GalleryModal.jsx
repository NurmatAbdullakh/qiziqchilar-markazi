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

const GalleryModal = ({ items, isOpen, onClose }) => {
    return (
        <>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg={"rgba(8, 8, 16, 0.8)"} />
                <ModalContent maxW={"800px"} bg="transparent">
                    <ModalCloseButton onClick={onClose} />
                    <ModalBody>
                        <Slider items={items} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )

}

export default GalleryModal
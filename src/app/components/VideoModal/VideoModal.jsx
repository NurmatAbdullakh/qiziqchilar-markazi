"use client";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Text,
    Box,
} from '@chakra-ui/react'
import ReactPlayer from "react-player";


const VideoModal = ({ videoLink, title, date, isOpen, onClose }) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay bg={' rgba(8, 8, 16, 0.80)'} />
            <ModalContent maxW={"882px"} bg={'transparent'}>
                <ModalHeader display={"flex"} justifyContent={"space-between"} >
                    <Box>
                        <Text fontSize={"md"} fontWeight={700} color={"white"}>
                            {title}
                        </Text>
                        <Text fontSize={"x-small"} color={"rgba(255, 255, 255, 0.70)"}>
                            {date?.slice(0, 10)}
                        </Text>
                    </Box>
                    <ModalCloseButton pos={"static"} color={"white"} />
                </ModalHeader>
                <ModalBody
                    sx={{
                        height: "450px",
                        "@media (max-width: 768px)":
                            { height: "200px" }
                    }} >
                    <ReactPlayer
                        url={videoLink}
                        width="100%"
                        controls
                    />
                </ModalBody>


            </ModalContent>
        </Modal >
    )
}

export default VideoModal
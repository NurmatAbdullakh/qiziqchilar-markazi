import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Flex,
    Box,
    Text,
    Button,
} from '@chakra-ui/react'
import { Link } from '../../../navigation'

const BurgerMenu = ({ isOpen, onClose }) => {

    return (
        <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader >
                    <Flex alignItems={"center"} justifyContent={"space-between"}>
                        <Box w={"120px"}>
                            <img src="/images/Logo.svg" alt="logo" />
                        </Box>
                        <DrawerCloseButton
                            pos={"static"}
                            borderRadius="8px"
                            background="#F9FAFB"
                            backdropFilter='blur(10px)'
                        />
                    </Flex>
                </DrawerHeader>
                <DrawerBody display={"flex"} flexDirection={"column"} justifyContent={"space-between"} p={4} bg="#EAECF0">
                    <Box
                        bg={"white"}
                        borderRadius={"12px"}
                        onClick={onClose}
                    >
                        <Box
                            as={Link}
                            href={"/center"}
                            display={"block"}
                            p={4}
                            borderBottom="1px solid #EAECF0"
                        >
                            <Text fontWeight={600}>
                                Markaz
                            </Text>
                        </Box>
                        <Box
                            as={Link}
                            href={"/standuppers"}
                            display={"block"}
                            p={4}
                            borderBottom="1px solid #EAECF0"
                        >
                            <Text fontWeight={600}>
                                So'z ustalari
                            </Text>
                        </Box>
                        <Box
                            as={Link}
                            href={"/events?type=gastrollar"}
                            display={"block"}
                            p={4}
                            borderBottom="1px solid #EAECF0"
                        >
                            <Text fontWeight={600}>
                                Gastrol va dasturlar
                            </Text>
                        </Box>
                        <Box
                            as={Link}
                            href={"/news"}
                            display={"block"}
                            p={4}
                            borderBottom="1px solid #EAECF0"
                        >
                            <Text fontWeight={600}>
                                Yangiliklar
                            </Text>
                        </Box>
                        <Box
                            as={Link}
                            href={"/mediateka?type=fotogalereya"}
                            display={"block"}
                            p={4}
                            borderBottom="1px solid #EAECF0"
                        >
                            <Text fontWeight={600}>
                                Mediateka
                            </Text>
                        </Box>
                    </Box>
                    <Button
                        as={Link}
                        href="/contacts"
                        borderRadius="8px"
                        background="#E09C48"
                        boxShadow=" 0px 1px 2px 0px rgba(0, 0, 0, 0.05)"
                        _hover={{ background: "#E09C48" }}
                        color={"white"}
                        fontWeight={600}
                        fontSize={"16px"}
                        onClick={onClose}
                    >
                        Bog‘lanish
                    </Button>
                </DrawerBody>
            </DrawerContent>
        </Drawer >

    )
}
export default BurgerMenu
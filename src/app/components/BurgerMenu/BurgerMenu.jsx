import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'

const BurgerMenu = ({ isOpen, onClose }) => {

    return (
        <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>{`drawer contents`}</DrawerHeader>
                <DrawerBody>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Consequat nisl vel pretium lectus quam id. Semper quis lectus
                        nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
                        quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
                        magna eget est lorem. Erat imperdiet sed euismod nisi porta.
                        Lectus vestibulum mattis ullamcorper velit.
                    </p>
                </DrawerBody>
            </DrawerContent>
        </Drawer>

    )
}
export default BurgerMenu
import { Box, Button, HStack, IconButton, useDisclosure} from "@chakra-ui/react";
import { FaAirbnb, FaMoon } from "react-icons/fa";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";
import SignUpModal from "./SignUpModal";

export default function Header(){
    const{ isOpen:isLoginOpen, onClose: onLoginClose, onOpen: onLoginOpen} = useDisclosure();
    const{ isOpen:isSignUpOpen, onClose: onSignUpClose, onOpen:onSignUpOpen} = useDisclosure();
    return (
        <HStack justifyContent={"space-between"} py={"5"} px={"10"} borderBottomWidth={"1"}>
            <Box color={"red.500"}>
                <Link to="/">
                    <FaAirbnb size={"48"}/>
                </Link>
            </Box>
            <HStack spacing={"1rem"}>
                <IconButton variant={"ghost"} aria-label="Toggle Dark Mode" icon={<FaMoon />}></IconButton>
                <Button onClick={onLoginOpen}>Log in</Button>
                <Button onClick={onSignUpOpen} colorScheme="red">Sign up</Button>
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose}/>
            <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose}/>
        </HStack>
    )
}
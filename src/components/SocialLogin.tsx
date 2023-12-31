import { Box, Button, Divider, HStack, Input, InputGroup, InputLeftElement, VStack, Text } from "@chakra-ui/react";
import { FaComment, FaGithub, FaLock, FaUserNinja } from "react-icons/fa";

export default function  SocialLogin(){
    return (
        <Box mb={4}>
                <HStack my={8}>
                    <Divider />
                    <Text textTransform={"uppercase"} color={"gray.500"} fontSize={"xs"} as="b">Or</Text>
                    <Divider />
                </HStack>
                <VStack>
                    <Button width="100%" leftIcon={<FaGithub/>} colorScheme="gray">
                        Continue with Github
                    </Button>
                    <Button width="100%" leftIcon={<FaComment/>} colorScheme="yellow">
                        Continue with Kakao
                    </Button>
                </VStack>
                
        </Box>
    )
}

import { Box, VStack, Image, Button, Grid, Text, HStack, useColorModeValue } from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface IRoomProps {
    imageUrl:string;
    name:string;
    rating:number;
    city:string;
    country:string;
    price:number;
    pk:number;
}

export default function Room({pk, imageUrl, name, rating, city, country, price }: IRoomProps){
    const gray = useColorModeValue("gray.600", "gray.300")
    return (
        <Link to={`/rooms/${pk}`}>
            <VStack alignItems={"flex-start"}>
                <Box position="relative" overflow={"hidden"} mb={2} rounded={"2xl"}>
                    <Image
                        minHeight={"280"}
                        src={imageUrl} />
                    <Button variant={"unstyled"} position="absolute" top={5} right={5} color="white" >
                        <FaRegHeart />
                    </Button>
                </Box>
                <Box>
                    <Grid gap={2} templateColumns={"7fr 1fr"}>
                        <Text as="b" noOfLines={1} fontSize={"md"}>
                            {name}
                        </Text>
                        <HStack _hover={{
                            color: "red.100"
                        }} spacing={1}>
                            <FaStar size={15}/>
                            <Text>{rating}</Text>
                        </HStack>
                    </Grid>
                    <Text fontSize={"sm"} color={gray}>{city}, {country}</Text>
                </Box>
                <Text fontSize={"sm"} color={gray}>
                    <Text as="b">${price}</Text> /night
                </Text>
            </VStack>
        </Link>
    )
}
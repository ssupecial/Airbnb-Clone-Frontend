import { Box, Grid, Heading, Image, VStack, Text, HStack, Icon, Button, Skeleton, SkeletonText } from "@chakra-ui/react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import Room from "../components/Room";
import RoomSkeleton from "../components/RoomSkeleton";
import { getRooms } from "../api";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


interface IPhoto{
    pk:string;
    file:string;
    description:string;

}

interface IRoom{
    "pk": number;
    "country": string;
    "name": string;
    "price": number;
    "city": string;
    "rating": number;
    "photos": IPhoto[];
    "is_owner": boolean;
}

export default function Home() {
    const {isLoading, data} = useQuery<IRoom[]>(["rooms"], getRooms)
    return (
        <Grid px={{
            base:10,
            lg: 40,
        }} columnGap={4} rowGap={8} templateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
            "2xl": "repeat(5, 1fr)",
        }}>
            {isLoading ? (
                <>
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                    <RoomSkeleton />
                </>
            ) : null}
            {data?.map(room => 
                <Room 
                    key={room.pk}
                    pk={room.pk}
                    imageUrl={room.photos[0].file}
                    name={room.name}
                    rating={room.rating}
                    city={room.city}
                    country={room.country}
                    price={room.price}
                />)}
        
        </Grid>
    )
}
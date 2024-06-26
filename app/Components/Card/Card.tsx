"use-client"
import React, { useCallback } from 'react';
import Image from 'next/image';
import { SlOptionsVertical } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

//local imports
import Img from "@/public/Images/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg"

export default function Card({ heading, imgSrc, likes, saves, description }: { heading: string | undefined; imgSrc: string | undefined; likes: number | string | undefined; saves: number | string | undefined; description: string | undefined }) {

    const formatNumber = useCallback((num: number): string => {
        // Check if number is greater than or equal to 1 million
        if (num >= 1e6) {
            return (num / 1e6).toFixed(2) + 'M'; // Convert to millions and round to 2 decimal places
        }
        // Check if number is greater than or equal to 1 thousand
        else if (num >= 1e3) {
            return (num / 1e3).toFixed(2) + 'k'; // Convert to thousands and round to 2 decimal places
        }
        // For smaller numbers, just round to 2 decimal places
        else {
            return num.toFixed(2);
        }
    }, []);
    return (
        <div className='p-2 border-2 border-black max-w-[30rem] flex rounded-xl gap-2'>
            <div className="cardImg relative flex-1">
                <SlOptionsVertical className='absolute p-2 bg-white rounded-sm left-2 top-2' size="2.5rem" />
                <div className="profileDetails rounded-lg overflow-hidden">
                    <Image src={Img} alt='static img' className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="cardDetails flex-1 flex flex-col">
                <div className="heading text-2xl font-bold line-clamp-3">{heading || "Heading"}</div>
                <div className="description line-clamp-5 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint aspernatur possimus labore quas vero illo at adipisci voluptates placeat. Quia, incidunt ullam nisi quis dolorum temporibus alias! Ea, architecto.</div>
                <div className="reviews flex justify-center gap-4 mt-auto">
                    <div className="appreciation flex items-center gap-2">
                        <FaHeart />
                        { formatNumber(typeof Number(likes) == 'number' ? Number(likes) : 0) || "2.5k"}
                    </div>
                    <div className="saves flex items-center gap-2">
                        <FaBookmark /> { formatNumber(typeof Number(saves) == 'number' ? Number(saves) : 0) || "800"}
                    </div>
                </div>
            </div>
        </div>
    )
}

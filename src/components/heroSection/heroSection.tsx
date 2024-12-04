"use client"
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiChevronRight } from "react-icons/fi";

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Pagination } from 'swiper/modules';
import Image from 'next/image';
function HeroSection() {
    return (
        <header className='lg:w-[80vw] w-[100vw] mx-auto lg:flex lg:justify-center lg:items-center lg:gap-8 '>

            <ul className='lg:w-1/4 lg:h-[350px] lg:pt-8 border-r border-slate-200 lg:block hidden'>
                <li className='p-2' ><Link className='flex justify-between items-center text-sm' href="/">Woman&apos;s Fashion <FiChevronRight className='mr-4' /></Link></li>
                <li className='p-2' ><Link className='flex justify-between items-center text-sm' href="/">Man&apos;s Fashion <FiChevronRight className='mr-4' /></Link></li>
                <li className='p-2' ><Link className='flex justify-between items-center text-sm' href="/">Electronics </Link></li>
                <li className='p-2' ><Link className='flex justify-between items-center text-sm' href="/">Home and Lifestyle </Link></li>
                <li className='p-2' ><Link className='flex justify-between items-center text-sm' href="/">Medicine </Link></li>
                <li className='p-2' ><Link className='flex justify-between items-center text-sm' href="/">Sports & Outdoor </Link></li>
                <li className='p-2' ><Link className='flex justify-between items-center text-sm' href="/">Baby&apos;s Toys</Link></li>
                <li className='p-2' ><Link className='flex justify-between items-center text-sm' href="/">Groceries & Pets </Link></li>
                <li className='p-2' ><Link className='flex justify-between items-center text-sm' href="/">Health & Beauty </Link></li>


            </ul>
            <div className='lg:w-3/4 w-full lg:h-[350px]  lg:pt-8'>
                <Swiper className="mySwiper " pagination={true} modules={[Pagination]} >
                    <SwiperSlide>
                        <Image className='w-auto h-auto' src="/Frame.png" alt="hero" width={800} height={350} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='w-auto h-auto' src="/Frame.png" alt="hero" width={800} height={350} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </header>
    )
}

export default HeroSection;
import Link from 'next/link'
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

function Navbar() {
    return (
        <div className='w-full border-b border-slate-200'>
            <div className='w-full bg-black text-white lg:flex lg:justify-between lg:items-center p-2'>
                <div className='lg:block lg:basis-1/4 basis-0'></div>
                <div className='lg:flex lg:basis-2/4 gap-4 lg:text-[14px] text-[10px]'>
                    <p className='inline '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </p>
                    <Link className='underline' href="/">Shop Now</Link>
                </div>
                <div className='lg:basis-1/4 lg:text-center text-right text-[10px] '>
                    <select className='text-white border-none bg-black' name="" id="">
                        <option value="">English</option>
                        <option value="">Urdu</option>
                        <option value="">Arabic</option>
                    </select>
                </div>
            </div>

            <nav className='container flex justify-around items-center pt-4 pb-2'>
                <div>
                    <Link className='lg:text-2xl font-bold' href="/">Exclusive</Link>
                </div>
                <ul className='lg:flex gap-4 hidden '>
                    <li className='font-semibold  hover:underline'><Link href="/">Home</Link></li>
                    <li className='font-semibold  hover:underline'><Link href="/">Contact</Link></li>
                    <li className='font-semibold  hover:underline'><Link href="/">About</Link></li>
                    <li className='font-semibold  hover:underline'><Link href="/">Sign Up</Link></li>
                </ul>
                <div className='flex justify-center items-center gap-4'>
                    <span className='bg-gray-100 py-1 px-2 flex'>
                        <input className='lg:w-[180px] w-[120px] outline-none bg-transparent lg:placeholder:text-[12px] placeholder:text-[10px] lg:pl-2' type="search" placeholder='What are you looking for?' />
                        <IoIosSearch className='text-2xl text-black  ' />
                    </span>
                    <span className='lg:flex flex gap-2 '>
                        <FaRegHeart />
                        <BsCart3 />
                    </span>
                </div>


                <Sheet>
                    <SheetTrigger className='lg:hidden block' ><CiMenuBurger /></SheetTrigger>
                    <SheetContent className=''>
                        <ul className='flex flex-col gap-4 mt-10'>
                            <li className='font-semibold  hover:text-orange-500'><Link href="/">Home</Link></li>
                            <li className='font-semibold  hover:text-orange-500'><Link href="/">Contact</Link></li>
                            <li className='font-semibold  hover:text-orange-500'><Link href="/">About</Link></li>
                            <li className='font-semibold  hover:text-orange-500'><Link href="/">Sign Up</Link></li>
                        </ul>
                    </SheetContent>
                </Sheet>


            </nav>

        </div>
    )
}

export default Navbar
import React from "react";
import Link from "next/link";
import tw from "twin.macro";
import Navlink from "./NavLink";
import Image from "next/image";

const navLinks=[
    {
      title:"Trending courses",
      path:"#trending courses",  
    },
    {
        title:"Categories",
        path:"#categories",  
    },
    {
        title:"Request",
        path:"#request",  
    }, 
    {
        title:"Testimonial",
        path:"#testimonial",  
    }, 
    {
        title:"Requests",
        path:"#requests",  
    }, 
     
     
]
export default function NavBar(){
    return(
        <nav tw="w-auto h-[118px] justify-between">
            <div tw="flex flex-row items-center mx-auto px-4 py-2 bg-[#FFFBF0]">
            <Link href={"/"} tw="text-2xl md:text-5xl text-white  pr-4 font-semibold bg-[#FFFBF0]">
                <Image 
                src={"/Images/logo.png"}
                alt="#"
                width={176.6}
                height={53.54}
                />
            </Link>
            <div >
            <ul tw="flex text-sm p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {
                            navLinks.map((link, index)=> (
                                <li key={index}>
                                    <Navlink href={link.path} title={link.title}/>
                                </li>
                            ))}
                    </ul>
            </div>
            <div tw="flex flex-row justify-between mx-auto">
            <div tw="border border-black bg-white inline-flex px-6 py-4 items-center gap-2" style={{ borderRadius: '41px' }}>
                <Link href={"/"}>Login</Link>
            </div>
            <div tw="bg-[#FCC008] inline-flex px-6 py-4 justify-between items-center gap-2" style={{ borderRadius: '41px' }}>
                <Link href={"/"}>SIGN UP</Link>
            </div>
            </div>
            <div>
                <Link href={"/"}>
                <Image
                src={"/Images/tra-1.png"}
                alt="#"
                width={16}
                height={16}
                />
                </Link>
            </div>
            <div tw="text-black font-sans text-base font-semibold leading-normal capitalize"
  style={{ letterSpacing: '-0.32px' }}>
                <Link href={"/"}>
                en
                </Link>
            </div>
            <div>
                <Link href={"/"}>
                <Image
                src={"/Images/arrowDown.png"}
                alt="#"
                width={16}
                height={16}
                />
                </Link>
            </div>
            
            </div>
        </nav>

    );
}
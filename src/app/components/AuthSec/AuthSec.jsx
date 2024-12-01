import React from "react";
import tw from "twin.macro";
import Image from "next/image";
import Link from "next/link";

export function AuthSec(){
    return(
        <section tw="bg-[#FFFBF0] py-16 px-8 flex justify-center items-center">
            <div>
                <Image
                src="/Images/auth.png"
                alt="#"
                width={354}
                height={307}
                
                />
            </div>
            <div>
            <div tw="text-4xl p-4">
                <h1>Lorem ipsum dolor sit.</h1>
            </div>
            <div tw="p-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate odit consequuntur .</p>
            </div>
            <div tw="border border-black bg-white inline-flex  pt-4 px-6 py-4 items-center gap-2" style={{ borderRadius: '41px' }}>
                <Link href={"/"}>Login</Link>
            </div>
            <div tw="bg-[#FCC008] inline-flex pt-4 px-6 py-4 justify-between items-center gap-2" style={{ borderRadius: '41px' }}>
                <Link href={"/"}>SIGN UP</Link>
            </div>
            </div>

        </section>
    )
}
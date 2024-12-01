import React from "react";
import tw from "twin.macro";
import Image from "next/image";

export default function HeroSec () {
  return (
    <div tw="bg-[#FFFBF0] py-16 px-8 flex justify-center items-center">
      <div tw="max-w-4xl flex flex-col md:flex-row items-center md:items-start gap-8">
        <div tw="flex-1">
          <h1 tw="text-3xl md:text-4xl font-bold text-black leading-snug">
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT
          </h1>
          <p tw="mt-4 text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            condimentum ac tellus at commodo.
          </p>
          <ul tw="mt-6 space-y-2">
            <li tw="flex items-start">
              <Image
              src="/Images/Chekbox.png"
              alt="#"
              width={24}
              height={24}
              />
              <p tw="text-gray-800">Build 16 web development projects for your</p>
            </li>
            <li tw="flex items-start">
            <Image
              src="/Images/Chekbox.png"
              alt="#"
              width={24}
              height={24}
              />
              <p tw="text-gray-800">Adipiscing elit, proin id condimentum</p>
            </li>
            <li tw="flex items-start">
            <Image
              src="/Images/Chekbox.png"
              alt="#"
              width={24}
              height={24}
              />
              <p tw="text-gray-800">Condimentum nisi, morbi egestas lacinia arcu</p>
            </li>
          </ul>
          <button tw="bg-[#FCC008] inline-flex px-6 py-4 justify-between items-center gap-2" style={{ borderRadius: '41px' }}>
            Create Account
          </button>
        </div>
        <div tw="flex-1 relative">
          <div tw="w-full h-[405px] bg-gray-200 rounded-lg flex justify-center items-center overflow-hidden relative">
            <Image
              src="/Images/HeroS.png" 
              alt="Placeholder"
              layout="fill"
              objectFit="cover"
              tw="opacity-50"
            />
            <button tw="bg-white p-4 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                tw="w-6 h-6 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6.5 4.5l8 5-8 5V4.5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

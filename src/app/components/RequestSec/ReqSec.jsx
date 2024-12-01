import React from "react";
import tw from "twin.macro";
import Image from "next/image";


export default function ReqSec() {
    return (
      <div tw="bg-[#FFFBF0] max-w-screen-xl mx-auto py-12 px-4">
        <section>
          <h2 tw="text-3xl font-bold text-gray-900 mb-6">Help Us Improve Our Service</h2>
          <div tw="flex justify-between items-center">
            <div tw="relative rounded-lg overflow-hidden">
              <Image
                src="/Images/improve.png"
                alt="Improvement Section"
                width={403}
                height={491}
              />
            </div>
            <div tw="ml-8 max-w-lg">
              <p tw="text-lg text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum ac tellus at commodo.</p>
              <p tw="text-lg text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum ac tellus at commodo.</p>
              <button tw="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300">Learn More</button>
            </div>
          </div>
        </section>
        <section tw="mt-12 pl-60">
          <h2 tw="text-3xl font-bold text-gray-900 mb-6">Request A Course</h2>
          <div tw="flex justify-between items-center">
            <div tw="max-w-lg">
              <p tw="text-lg text-gray-600 mb-4">Do you have a course in mind?</p>
              <ul tw="mb-4">
                <li tw="flex items-center mb-2">
                <Image
              src="/Images/check-2.png"
              alt="#"
              width={24}
              height={24}
              /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li tw="flex items-center mb-2">
                <Image
              src="/Images/check-2.png"
              alt="#"
              width={24}
              height={24}
              /> Vivamus condimentum ac tellus at commodo.
                </li>
              </ul>
              <button tw="bg-yellow-500 py-2 px-4 rounded-full text-black hover:bg-yellow-600 transition duration-300">Request A Course</button>
            </div>
            <div tw="relative rounded-lg overflow-hidden w-full h-full object-cover">
              <Image
                src="/Images/request.png"
                alt="Course Section"
                width={403}
                height={491}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
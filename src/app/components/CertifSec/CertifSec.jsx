import React from "react";
import tw from "twin.macro";
import Image from "next/image";


export default function CertifSec() {
  return (
    <section tw="bg-[#FFFBF0] py-16 px-8">
      <div tw="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <h2 tw="text-3xl font-bold text-black mb-4">
            Lorem Ipsum Dolor Sit Amet, <br />
            Consectetur Adipiscing Elit. <br />
            Vivamus Condimentum
          </h2>
          <div tw="space-y-4">
            <div tw="bg-blue-50 flex items-center gap-4 rounded-lg p-4 shadow-sm">
              <div tw="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span tw="text-white font-bold text-sm">✓</span>
              </div>
              <p tw="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                condimentum ac tellus.
              </p>
            </div>
            <div tw="bg-blue-50 flex items-center gap-4 rounded-lg p-4 shadow-sm">
              <div tw="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span tw="text-white font-bold text-sm">✓</span>
              </div>
              <p tw="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                condimentum ac tellus.
              </p>
            </div>
          </div>
        </div>
        <div tw="relative">
          <img
            src="/Images/Certif.png" 
            alt="Certificate"
            tw="w-full rounded-lg shadow-lg"
          /> 
        </div>
      </div>
    </section>
  );
}

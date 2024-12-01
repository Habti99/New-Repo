import React from "react";
import tw from "twin.macro";
import Image from "next/image";

export default function Footer() {
    return (
      <footer tw="bg-gray-100 py-8">
        <div tw="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 tw="text-lg font-bold">CNT Academy</h2>
            <p tw="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
          </div>
          <div>
            <h3 tw="text-lg font-bold mb-2">Connect</h3>
            <ul tw="space-y-2">
              <li tw="text-sm text-gray-600">Aliquam</li>
              <li tw="text-sm text-gray-600">Cursus</li>
              <li tw="text-sm text-gray-600">Congue</li>
            </ul>
          </div>
          <div>
            <h3 tw="text-lg font-bold mb-2">Contact Us</h3>
            <p tw="text-sm text-gray-600">Fake@hotmail.com</p>
            <p tw="text-sm text-gray-600">000-000-000</p>
            <p tw="text-sm text-gray-600">Fake Street Number</p>
          </div>
          <div>
            <h3 tw="text-lg font-bold mb-2">Follow Us</h3>
            <ul tw="space-y-2">
              <li tw="text-sm text-gray-600">Facebook</li>
              <li tw="text-sm text-gray-600">Twitter</li>
              <li tw="text-sm text-gray-600">Instagram</li>
            </ul>
          </div>
        </div>
        <div tw="mt-8 text-center">
          <div tw="flex justify-center items-center space-x-4">
            <input
              type="email"
              placeholder="Your email"
              tw="px-4 py-2 border border-gray-300 rounded"
            />
            <button tw="bg-yellow-500 text-white px-4 py-2 rounded">
              Subscribe
            </button>
          </div>
          <div tw="flex justify-center items-center space-x-4 mt-4">
            <a href="#" tw="text-sm text-gray-600">Download on the App Store</a>
            <a href="#" tw="text-sm text-gray-600">Get it on Google Play</a>
          </div>
        </div>
      </footer>
    );
  };
  

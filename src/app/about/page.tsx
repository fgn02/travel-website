"use client";
import Image from "next/image";
import { CheckCircleIcon, ShieldExclamationIcon } from "@heroicons/react/solid";
import {
  FaRegCheckCircle,
  FaMobileAlt,
  FaLanguage,
  FaThumbsUp,
} from "react-icons/fa";

export default function AboutUsPage() {
  return (
    <div className="about-page">
      <div className="relative w-full h-[500px]">
        <Image
          src="/about.jpg"
          alt="Top Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="container mx-auto py-12">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-slate-600">
          From the peak of the Himalayas in the north to the depth of the
          beaches in south India, this is an exceptional land of culture,
          history, and diversity.
        </p>
      </div>

      <div className="container mx-auto py-12 px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" /> Why
            Choose Us
          </h3>
          <p className="text-slate-600">
            Many choose our tours because it makes travel so much easier. We aim
            to provide you with all the good quality and excellent services...
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <ShieldExclamationIcon className="h-6 w-6 text-blue-500 mr-2" />{" "}
            Safety Is the Priority
          </h3>
          <p className="text-slate-600">
            We pay special attention to safety when inbound and outbound
            tourists plan a trip to India or outside India...
          </p>
        </div>
      </div>

      <div className="w-full py-12 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-center">
            What Our Clients Say
          </h3>
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg italic mb-4">
              "I have been dealing with Explore Rajasthan Tours for seven years.
              They have arranged my trips to exotic places as well as luxury
              tours to famous sites..."
            </p>
            <p className="text-sm font-semibold">Dr. Kenneth Robbins</p>
            <p className="text-xs text-gray-500">Washington, USA</p>
          </div>
        </div>
      </div>

      <div className="container w-full mx-auto py-12 px-6 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <Image
            src="/mobile.jpg"
            alt="WhatsApp Image"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
          <h3 className="text-2xl font-bold mb-4">
            Trusted & Expert Tour Manager
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaRegCheckCircle className="text-green-500 mr-2" />
              <span>Best and affordable Pricing</span>
            </div>
            <div className="flex items-center">
              <FaMobileAlt className="text-blue-500 mr-2" />
              <span>Trouble-free online booking</span>
            </div>
            <div className="flex items-center">
              <FaLanguage className="text-red-500 mr-2" />
              <span>Multi-language speaking drivers</span>
            </div>
            <div className="flex items-center">
              <FaThumbsUp className="text-yellow-500 mr-2" />
              <span>Best service guaranteed</span>
            </div>
          </div>
          <a
            href="https://wa.me/your-whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 mt-6"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

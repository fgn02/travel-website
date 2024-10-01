"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import BookingForm from "@/components/BookingForm";
import IncludedExcluded from "@/components/IncludedExcluded";
import ImageCarousel from "@/components/ImageCarousel";
import { tourDetails } from "@/data/tourDetails";

export default function TourDetailsPage() {
  const { id } = useParams();
  const tour = tourDetails[parseInt(id as string)] || {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <ImageCarousel images={tour.images} />

      <div className="px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">{tour.title}</h1>
          <p className="text-lg text-slate-600 mb-6">{tour.description}</p>
          <div className="mb-4">
            <span className="font-bold">Price: </span>
            {tour.price}
          </div>
          <div className="mb-4">
            <span className="font-bold">Duration: </span>
            {tour.duration}
          </div>
        </div>
        <BookingForm />
      </div>

      <IncludedExcluded />
    </motion.div>
  );
}

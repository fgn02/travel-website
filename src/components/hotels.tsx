import Image from "next/image";
import { Container } from "@/components/container";
import { BedDoubleIcon, User2 } from "lucide-react";
import Link from "next/link";
import { hotels } from "@/data";
import { Rating } from "@/components/rating";

export function Hotels() {
  return (
    <Container className="py-20">
      <h2 className="text-4xl font-heading font-semibold text-center">
        Ours Hotel Rooms
      </h2>
      <p className="text-center max-w-4xl mx-auto text-slate-500 mt-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit Aliquid
        distinctio, porro id quidem eveniet.
      </p>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-20">
        {hotels.map((hotel) => (
          <Link href={hotel.id} key={hotel.id} className="group">
            <div>
              <div className="aspect-[16/10] rounded-md overflow-hidden">
                <Image
                  src={hotel.image}
                  alt=""
                  width={420}
                  height={400}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 origin-bottom duration-300"
                />
              </div>
              <div className="py-2 space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">{hotel.title}</p>
                  <Rating rate={hotel.rating} />
                </div>
                <div className="flex items-center justify-between gap-6">
                  <p className="font-medium flex-1">From ${hotel.price}</p>
                  <p className="text-slate-500 flex items-center">
                    <BedDoubleIcon className="inline-block mr-2" size={20} />
                    {hotel.bed}
                  </p>
                  <p className="text-slate-500 flex items-center">
                    <User2 className="inline-block mr-2" size={20} />
                    {hotel.capacity} Guest
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </Container>
  );
}

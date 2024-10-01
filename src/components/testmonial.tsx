import { testmonials } from "@/data";
import Image from "next/image";
import { Rating } from "@/components/rating";
import { Container } from "@/components/container";

export function Testmonial() {
  return (
    <Container className="py-20">
      <h2 className="text-4xl font-heading font-semibold text-center">
        What our customers are say
      </h2>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-6 mt-20">
        {testmonials.map((testmonial) => (
          <div
            key={testmonial.name}
            className="p-6 bg-white rounded-md flex gap-4 md:w-[calc(50%-24px)]"
          >
            <Image
              src={testmonial.image}
              width="100"
              height="100"
              alt="user"
              className="w-16 h-16 rounded-full object-cover shrink-0"
            />
            <div className="mt-2">
              <div className="flex-1 flex justify-between">
                <div>
                  <p>{testmonial.name}</p>
                  <p className="text-slate-400">{testmonial.country}</p>
                </div>
                <Rating rate={testmonial.rating} />
              </div>
              <p className="mt-4 text-slate-600 line-clamp-4">
                {testmonial.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

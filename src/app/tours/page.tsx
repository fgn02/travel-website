import Image from "next/image";

const tours = [
  {
    title: "Maldives Paradise",
    description: "Enjoy the stunning views of the Maldives.",
    price: "$999",
    image: "/destinations/maldives.jpg",
  },
  {
    title: "Explore Hawaii",
    description: "Experience the beauty of Hawaii.",
    price: "$899",
    image: "/destinations/hawaii.jpg",
  },
  {
    title: "Tuscany Adventure",
    description: "Discover the scenic landscapes of Tuscany.",
    price: "$799",
    image: "/destinations/tuscany.jpg",
  },
  {
    title: "Amazon Rainforest",
    description: "Discover the beauty of the Amazon Rainforest.",
    price: "$1200",
    image: "/destinations/amazon-forest.jpg",
  },
  {
    title: "New York Tour",
    description: "Explore the iconic landmarks of New York City.",
    price: "$850",
    image: "/destinations/new-york.jpg",
  },
  {
    title: "Alaska Expedition",
    description: "Experience the cold beauty of Alaska.",
    price: "$1000",
    image: "/destinations/alaska.jpg",
  },
];

export default function ToursPage() {
  return (
    <section className="py-12 px-6 text-center">
      <h1 className="text-6xl font-bold mb-10 font-heading">Our Tours</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {tours.map((tour, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow-lg flex flex-col justify-between"
          >
            <div className="flex items-center justify-center mb-4">
              <Image
                src={tour.image}
                alt={tour.title}
                width={300}
                height={200}
                className="rounded-md object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{tour.title}</h2>
            <p className="text-slate-500">{tour.description}</p>
            <p className="font-bold mt-4">{tour.price}</p>
            <a
              href={`/tours/${index}`}
              className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              View Details
            </a>
          </div>
        ))}
      </div>

      <div className="mt-16"></div>
    </section>
  );
}

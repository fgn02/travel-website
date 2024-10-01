/**
 * All images takem
 */

function getRandomValue(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const destinationsItems = [
  {
    id: "1",
    image: "/destinations/maldives.jpg",
    title: "Maldives",
    rating: getRandomValue(1, 5),
    period: "2 Days 1 Night",
    price: getRandomValue(50, 1000),
  },
  {
    id: "2",
    image: "/destinations/hawaii.jpg",
    title: "Hawaii",
    rating: getRandomValue(1, 5),
    period: "4 Days 3 Nights",
    price: getRandomValue(50, 1000),
  },
  {
    id: "3",
    image: "/destinations/switzerland.jpg",
    title: "Switzerland",
    rating: getRandomValue(1, 5),
    period: "3 Days 2 Nights",
    price: getRandomValue(50, 1000),
  },
  {
    id: "4",
    image: "/destinations/new-york.jpg",
    title: "New York",
    rating: getRandomValue(1, 5),
    period: "5 Days 4 Nights",
    price: getRandomValue(50, 1000),
  },
  {
    id: "5",
    image: "/destinations/bora-bora.jpg",
    title: "Bora Bora",
    rating: getRandomValue(1, 5),
    period: "6 Days 5 Nights",
    price: getRandomValue(50, 1000),
  },
  {
    id: "6",
    image: "/destinations/dubai.jpg",
    title: "Dubai",
    rating: getRandomValue(1, 5),
    period: "3 Days 2 Nights",
    price: getRandomValue(50, 1000),
  },
  {
    id: "7",
    image: "/destinations/amazon-forest.jpg",
    title: "Amazon Rainforest",
    rating: getRandomValue(1, 5),
    period: "7 Days 6 Nights",
    price: getRandomValue(50, 1000),
  },
  {
    id: "8",
    image: "/destinations/tuscany.jpg",
    title: "Tuscany",
    rating: getRandomValue(1, 5),
    period: "4 Days 3 Nights",
    price: getRandomValue(50, 1000),
  },
  {
    id: "9",
    image: "/destinations/alaska.jpg",
    title: "Alaska",
    rating: getRandomValue(1, 5),
    period: "5 Days 4 Nights",
    price: getRandomValue(50, 1000),
  },
  {
    id: "10",
    image: "/destinations/rome.jpg",
    title: "Rome",
    rating: getRandomValue(1, 5),
    period: "3 Days 2 Nights",
    price: getRandomValue(50, 1000),
  },
  {
    id: "11",
    image: "/destinations/phuket.jpg",
    title: "Phuket",
    rating: getRandomValue(1, 5),
    period: "4 Days 3 Nights",
    price: getRandomValue(50, 1000),
  },
  {
    id: "12",
    image: "/destinations/Lake-Tahoe.jpg",
    title: "Lake Tahoe",
    rating: getRandomValue(1, 5),
    period: "3 Days 2 Nights",
    price: getRandomValue(50, 1000),
  },
];

const adjectives = [
  "Cozy",
  "Elegant",
  "Charming",
  "Modern",
  "Quaint",
  "Spectacular",
  "Majestic",
  "Tranquil",
  "Serene",
  "Enchanting",
];
const nouns = [
  "Retreat",
  "Haven",
  "Oasis",
  "Hideaway",
  "Sanctuary",
  "Residence",
  "Manor",
  "Lodge",
  "Villa",
  "Palace",
];

function generateRandomTitle() {
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective} ${randomNoun}`;
}

export const hotels = [
  {
    id: "1",
    image: "/hotels/hotel1.jpg",
    title: generateRandomTitle(),
    bed: "Kings Bed",
    capacity: getRandomValue(1, 10),
    rating: getRandomValue(1, 5),
    price: getRandomValue(50, 1000),
  },
  {
    id: "2",
    image: "/hotels/hotel2.jpg",
    title: generateRandomTitle(),
    bed: "Kings Bed",
    capacity: getRandomValue(1, 10),
    rating: getRandomValue(1, 5),
    price: getRandomValue(50, 1000),
  },
  {
    id: "3",
    image: "/hotels/hotel3.jpg",
    title: generateRandomTitle(),
    bed: "Kings Bed",
    capacity: getRandomValue(1, 10),
    rating: getRandomValue(1, 5),
    price: getRandomValue(50, 1000),
  },
  {
    id: "3",
    image: "/hotels/hotel4.jpg",
    title: generateRandomTitle(),
    bed: "Kings Bed",
    capacity: getRandomValue(1, 10),
    rating: getRandomValue(1, 5),
    price: getRandomValue(50, 1000),
  },
];

export const testmonials = [
  {
    name: "Emily Johnson",
    rating: 5,
    description:
      "Exceptional service! The team went above and beyond to meet my expectations. I'm impressed with the attention to detail and prompt communication. Highly recommend!",
    country: "United States",
    image: "/testmonial/profile1.webp",
  },
  {
    name: "John Anderson",
    rating: 4,
    description:
      "Great experience overall. The product quality is good, and the delivery was on time. A minor hiccup in communication, but the team quickly resolved it. Will consider for future purchases.",
    country: "Canada",
    image: "/testmonial/profile3.jpg",
  },
  {
    name: "Sophia Ramirez",
    rating: 5,
    description:
      "Outstanding customer service! The team was incredibly helpful and responsive. They addressed all my concerns, making the entire process smooth. Very satisfied with the outcome!",
    country: "Australia",
    image: "/testmonial/profile2.jpg",
  },
];

import { StarIcon } from "lucide-react";

interface RatingProps {
  rate: number;
}

export function Rating({ rate }: RatingProps) {
  return (
    <div className="flex gap-2">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <StarIcon
            className={`${
              rate > index
                ? "fill-yellow-500 stroke-yellow-500"
                : "stroke-slate-500"
            }`}
            key={index}
            size={14}
          />
        ))}
    </div>
  );
}

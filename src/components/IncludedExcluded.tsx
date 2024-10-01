import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";

export default function IncludedExcluded() {
  return (
    <div className="px-6 py-8 bg-gray-100 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Included/Excluded</h3>
      <div className="grid grid-cols-2 gap-4">
        <ul>
          <li className="flex items-center">
            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
            Hotel accommodation
          </li>
          <li className="flex items-center">
            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
            Private Air-conditioned car with driver
          </li>
          <li className="flex items-center">
            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
            All sightseeing with private local guides
          </li>
        </ul>
        <ul>
          <li className="flex items-center">
            <XCircleIcon className="h-5 w-5 text-red-500 mr-2" />
            Additional services
          </li>
          <li className="flex items-center">
            <XCircleIcon className="h-5 w-5 text-red-500 mr-2" />
            Insurance
          </li>
          <li className="flex items-center">
            <XCircleIcon className="h-5 w-5 text-red-500 mr-2" />
            Drink
          </li>
        </ul>
      </div>
    </div>
  );
}

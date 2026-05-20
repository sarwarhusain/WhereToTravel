import Image from "next/image";
import Link from "next/link";
import { FaStar, FaLocationDot, FaRegCalendarDays } from "react-icons/fa6";

const DestinationCard = ({ destination }) => {
  const {
    _id,
    destinationName,
    country,
    price,
    duration,
    departureDate,
    imageUrl,

    category,
  } = destination;

  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg overflow-hidden rounded-2xl bg-white shadow-md container mx-auto">
      {/* Image */}
      <div className="relative w-full">
        <Image
          src={imageUrl}
          alt={destinationName}
          width={800}
          height={500}
          className="h-48 sm:h-56 md:h-64 w-full object-cover"
        />

        {/* Badge */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs sm:text-sm font-medium shadow">
          <FaStar className="text-yellow-500" />
          4.8
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6">
        {/* Location */}
        <div className="mb-2 flex items-center gap-2 text-xs sm:text-sm text-gray-500">
          <FaLocationDot />
          <span>{country}</span>
        </div>

        {/* Title + Price */}
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            {destinationName}
          </h2>

          <div className="text-left sm:text-right">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold">
              ${price}
            </span>
            <span className="text-xs sm:text-sm text-gray-500"> /Person</span>
          </div>
        </div>

        {/* Duration */}
        <div className="mb-5 flex flex-col sm:flex-row sm:justify-between gap-2 text-xs sm:text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <FaRegCalendarDays />
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <FaRegCalendarDays />
            {departureDate}
          </span>
        </div>
        <p>Category {category ? category : "Not Applicable"}</p>

        {/* Button */}
        <Link href={`/destination/${_id}`}>
          <button className="w-full sm:w-auto font-medium text-sky-500 transition hover:underline">
            BOOK NOW →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;

import Image from "next/image";
import { Button, Chip } from "@heroui/react";
import { Calendar, Eye, Ticket, X } from "lucide-react";
import Link from "next/link";
import BookingDeletedCount from "./BookingDeletedCount";

const BookingCard = ({ booking }) => {
  const { imageUrl, destinationName, price, dateValue, destinationId, userId } =
    booking;
  return (
    <div className="space-y-5">
      {/* Card */}
      <div className="border rounded-xl p-4 flex flex-col md:flex-row gap-5 bg-white">
        {/* Image */}
        <div className="relative w-full  md:w-62.5 h-45 overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={destinationName}
            fill
            className="object-cover "
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <Chip size="sm" color="success" variant="flat" className="mb-3">
              Confirmed
            </Chip>

            <h2 className="text-3xl font-semibold text-gray-800">
              {destinationName}
            </h2>

            <div className="mt-4 space-y-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Departure: {dateValue}</span>
              </div>

              <div className="flex items-center gap-2">
                <Ticket size={16} />
                <span>Booking ID: {destinationId}</span>
              </div>
              <div className="flex items-center gap-2">
                <Ticket size={16} />
                <span>UserId:{userId}</span>
              </div>
            </div>

            <h3 className="text-4xl font-bold text-cyan-500 mt-5">${price}</h3>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-6">
            <BookingDeletedCount bookingId={booking._id} />

            <Link href="/destination">
              <Button
                color="primary"
                startContent={<Eye size={16} />}
                className="bg-cyan-500 rounded-md text-white"
              >
                View
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;

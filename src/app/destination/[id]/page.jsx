import Image from "next/image";

import { Check, MapPin, Star } from "@gravity-ui/icons";
import { FaRegCalendarDays } from "react-icons/fa6";
import Link from "next/link";
import { EditModal } from "@/components/EditModal";
import { DeleteModal } from "@/components/DeleteModal";
import DetailsRightCard from "@/components/DetailsRightCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  // console.log(token);
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
    headers: {
      // authorization: "logged in",first approach
      authorization: `Bearer ${token}`,
    },
  });
  const destination = await res.json();
  // console.log(destination);

  const {
    destinationName,
    country,
    duration,
    departureDate,
    imageUrl,
    description,
  } = destination;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Top Buttons */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/destination">
          <button className="text-sm text-gray-500 hover:text-black transition">
            ← Back to Destinations
          </button>
        </Link>

        <div className="flex gap-3">
          {/* Edit card here */}
          <EditModal destination={destination} />
          {/* delete card */}
          <DeleteModal destination={destination} />
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-105 rounded-2xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Left Side */}
        <div className="lg:col-span-2">
          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <MapPin size={16} />
            <span>{country}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-3">{destinationName}</h1>

          {/* Rating */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-1 text-green-600">
              <Star size={16} fill="currentColor" />
              <span className="font-semibold">4.9</span>
            </div>

            <span>(234 reviews)</span>
            <span>•</span>
            <span>{duration}</span>
            <span className="flex items-center gap-1">
              <FaRegCalendarDays />
              {departureDate}
            </span>
          </div>

          {/* Overview */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
            <p className="text-gray-600 leading-7">{description}</p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Highlights</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Luxury beachfront accommodation",
                "Traditional Balinese spa treatment",
                "Sunrise trek to Mount Batur",
                "Visit Ulu water Temple at sunset",
                "Private beach dinner experience",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-gray-700"
                >
                  <Check className="text-green-500 mt-1" size={18} />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Booking Card */}
        <DetailsRightCard destination={destination} />
      </div>
    </div>
  );
};

export default DestinationDetailsPage;

import DestinationCard from "@/components/DestinationCard";
import Link from "next/link";
import React from "react";

const Destination = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
  const destinations = await res.json();
  // console.log(destinations);
  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-between">
        <div>
          <h2 className="text-3xl my-1">Featured Destinations</h2>
          <p>Handpicked travel experiences for the adventure seekers</p>
        </div>
        <Link href="/add-destination">
          <button className="w-full sm:w-auto font-medium text-sky-500 transition hover:underline">
            Add Items →
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination._id}
            destination={destination}
          ></DestinationCard>
        ))}
      </div>
    </div>
  );
};

export default Destination;

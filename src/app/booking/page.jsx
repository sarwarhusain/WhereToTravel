// import BookingCard from "@/components/BookingCard";
import BookingCard from "@/components/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
import { FaSuitcaseRolling } from "react-icons/fa6";

const Booking = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`);

  const booking = await res.json();
  console.log(booking);
  return (
    <div className="min-h-screen container mx-auto">
      <div>
        {booking.length > 0 ? (
          booking.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))
        ) : (
          <div className="flex items-center justify-center min-h-[70vh]">
            <div className="border rounded-3xl shadow-2xl p-10 text-center max-w-md w-full bg-white">
              <FaSuitcaseRolling className="text-7xl text-cyan-500 mx-auto mb-5" />

              <h1 className="text-3xl font-bold mb-3">No Booking Found</h1>

              <p className="text-gray-500">
                You have not booked any destination yet.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;

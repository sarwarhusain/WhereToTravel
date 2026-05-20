import Banner from "@/components/Banner";
import Image from "next/image";
import Destination from "./destination/page";
import BookingCard from "@/components/BookingCard";

export default function Home() {
  return (
    <div>
      <Banner />
      <Destination />
      {/* <BookingCard/>  */}
    </div>
  );
}

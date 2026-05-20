"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Card, CardHeader, DateField, Label } from "@heroui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const DetailsRightCard = ({ destination }) => {
  const [dateValue, setDateValue] = useState(null); //check to hero ui dateField
  // console.log(new Date(dateValue).toLocaleString());

  const { price, _id, destinationName, imageUrl } = destination;
  //find user (in client site)
  const { data: session } = authClient.useSession();
  const user = session?.user; //

  const handleBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      dateValue: new Date(dateValue).toLocaleString(),
    };

    // console.log(bookingData); //then back to back end and make api for bookingCard
    const { data: tokenData } = await authClient.token();
    console.log(tokenData);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    toast.success("You Booked Successfully");
  };

  return (
    <div>
      <Card className="shadow-xl border border-gray-200 sticky top-24">
        <CardHeader className="flex flex-col items-start">
          <p className="text-sm text-gray-500">Starting from</p>

          <h2 className="text-4xl font-bold text-cyan-600">{price}</h2>

          <p className="text-sm text-gray-400">per person</p>
        </CardHeader>

        {/* <Divider /> */}
        <Card className="space-y-5">
          {/* Date */}
          <DateField
            isRequired
            className="w-[256px]"
            name="date"
            onChange={setDateValue}
          >
            <Label>Date</Label>
            <DateField.Group>
              <DateField.Input>
                {(segment) => <DateField.Segment segment={segment} />}
              </DateField.Input>
            </DateField.Group>
          </DateField>

          {/* Button */}
          <Button
            onClick={handleBooking}
            className="w-full bg-cyan-600 text-white font-semibold"
            size="lg"
          >
            Book Now →
          </Button>

          {/* Features */}
          <div className="space-y-3 pt-2">
            {[
              "Free cancellation up to 7 days",
              "Travel insurance included",
              "24/7 customer support",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <Check className="text-green-500" size={16} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default DetailsRightCard;

"use client";

import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { redirect } from "next/navigation";

const BookingDeletedCount = ({ bookingId }) => {
  const handleDelete = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();
    // console.log(data);

    if (data.deletedCount) {
      redirect("/booking");
    }
  };

  return (
    <Modal>
      <Button size="sm" variant="bordered">
        Delete
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-default text-foreground">
                <Rocket className="size-5" />
              </Modal.Icon>
              <Modal.Heading>
                Delete CareFully,if you delete ,the data will never return
              </Modal.Heading>
            </Modal.Header>

            <Modal.Footer>
              <Button onClick={handleDelete} className="w-full" slot="close">
                Delete
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};
export default BookingDeletedCount;

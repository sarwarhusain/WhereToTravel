"use client";

import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";

export function EditModal({ destination }) {
  const {
    _id,
    destinationName,
    country,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
    category,
  } = destination;

  const onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const EditDetailsData = Object.fromEntries(formData.entries());

    console.log(EditDetailsData);
    // //fetch to server
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(EditDetailsData),
    });

    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="container mx-auto">
      <Modal className="">
        <Button size="sm" variant="bordered">
          Edit
        </Button>
        
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <Envelope className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Edit Carefully</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onsubmit} className="p-10 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Destination Name */}
                      <div className="md:col-span-2">
                        <TextField isRequired defaultValue={destinationName}>
                          <Label>Destination Name</Label>

                          <Input
                            name="destinationName"
                            className="rounded-2xl"
                          />

                          <FieldError />
                        </TextField>
                      </div>

                      {/* Country */}
                      <TextField isRequired defaultValue={country}>
                        <Label>Country</Label>

                        <Input name="country" className="rounded-2xl" />

                        <FieldError />
                      </TextField>

                      {/* Category */}
                      <div>
                        <Select
                          name="category"
                          defaultSelectedKeys={[category]}
                          isRequired
                          className="w-full"
                        >
                          <Label>Category</Label>

                          <Select.Trigger className="rounded-2xl">
                            <Select.Value />
                            <Select.Indicator />
                          </Select.Trigger>

                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item id="Beach">Beach</ListBox.Item>
                              <ListBox.Item id="Mountain">
                                Mountain
                              </ListBox.Item>
                              <ListBox.Item id="City">City</ListBox.Item>
                              <ListBox.Item id="Adventure">
                                Adventure
                              </ListBox.Item>
                              <ListBox.Item id="Cultural">
                                Cultural
                              </ListBox.Item>
                              <ListBox.Item id="Luxury">Luxury</ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>

                      {/* Price */}
                      <TextField isRequired defaultValue={String(price)}>
                        <Label>Price (USD)</Label>

                        <Input
                          name="price"
                          type="number"
                          className="rounded-2xl"
                        />

                        <FieldError />
                      </TextField>

                      {/* Duration */}
                      <TextField isRequired defaultValue={duration}>
                        <Label>Duration</Label>

                        <Input name="duration" className="rounded-2xl" />

                        <FieldError />
                      </TextField>

                      {/* Departure Date */}
                      <div className="md:col-span-2">
                        <TextField isRequired defaultValue={departureDate}>
                          <Label>Departure Date</Label>

                          <Input
                            name="departureDate"
                            type="date"
                            className="rounded-2xl"
                          />

                          <FieldError />
                        </TextField>
                      </div>

                      {/* Image URL */}
                      <div className="md:col-span-2">
                        <TextField isRequired defaultValue={imageUrl}>
                          <Label>Image URL</Label>

                          <Input
                            name="imageUrl"
                            type="url"
                            className="rounded-2xl"
                          />

                          <FieldError />
                        </TextField>
                      </div>

                      {/* Description */}
                      <div className="md:col-span-2">
                        <TextField isRequired defaultValue={description}>
                          <Label>Description</Label>

                          <TextArea
                            name="description"
                            className="rounded-3xl"
                          />

                          <FieldError />
                        </TextField>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-none bg-cyan-500 text-white"
                    >
                      Update Destination
                    </Button>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
}

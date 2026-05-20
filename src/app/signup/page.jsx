"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { FaGoogle } from "react-icons/fa6";

const SignUp = () => {
  const handleGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
    // console.log(data, "google");
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signUp.email({
      name: userData.name, // required
      email: userData.email, // required
      password: userData.password, // required
      image: userData.image,
      callbackURL: "/",
    });
    if (error) {
      console.log(error);
      return;
    }
    if (data) {
      redirect("/");
    }
    console.log(data, error);
  };

  return (
    <div className="  min-h-screen">
      <Form
        className="flex w-96 flex-col gap-4 container mx-auto border m-2 p-5 shadow-2xl rounded-2xl"
        onSubmit={onSubmit}
      >
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter Your Name" />

          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <TextField isRequired name="image" type="text">
          <Label>Image</Label>
          <Input placeholder="Past Your Photo Link" />

          <FieldError />
        </TextField>
        <Button variant="ghost" className={"w-full border"} type="submit">
          <Check />
          Create Account
        </Button>
        <div className="flex items-center justify-center gap-3">
          <Separator className="w-10" />
          <div className="whitespace-nowrap">Or</div>
          <Separator className="w-10" />
        </div>
        <Button
          onClick={handleGoogle}
          variant="ghost"
          className={"w-full border"}
        >
          <FaGoogle />
          Sign Up With Google
        </Button>
      </Form>
      <div></div>
    </div>
  );
};
export default SignUp;

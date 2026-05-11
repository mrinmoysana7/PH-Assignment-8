"use client";

import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const RegisterPage = () => {
    const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password, photoUrl } = data;
    const { data: authData, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photoUrl,
      callbackURL: "/",
    });

    console.log(authData, error);

    if (error) {
      toast.error(error.message || "An error occurred during registration.");
    } else if (authData) {
      toast.success(
        "Registration successful! Please check your email to verify your account.",
      );
      router.push("/login");
    }
  };
  return (
    <div className="container mx-auto min-h-[70vh] p-5 flex justify-center items-center  rounded-xl">
      <ToastContainer />
      <Form
        className="flex w-96 flex-col gap-4 shadow-2xl p-10 rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Name */}
        <TextField isRequired type="text">
          <Label>Name</Label>
          <Input
            placeholder="Your Name"
            {...register("name")}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
          <FieldError />
        </TextField>
        {/* Photo URL */}
        <TextField isRequired type="text">
          <Label>Photo URL</Label>
          <Input
            placeholder="Your Photo URL"
            {...register("photoUrl")}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
          <FieldError />
        </TextField>
        {/* Email */}
        <TextField
          isRequired
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input
            placeholder="Your Email"
            {...register("email")}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
          <FieldError />
        </TextField>

        <TextField className="w-full relative" name="password">
          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input
              className="w-full border border-gray-300 p-2 rounded-lg"
              type={isVisible ? "text" : "password"}
              placeholder="Your Password"
              {...register("password")}
            />
            <InputGroup.Suffix className="pr-0 absolute right-2 top-12 -translate-y-1/2">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>

       
          <Button
            type="submit"
            className="w-full flex items-center justify-center py-3 bg-blue-500 gap-2 text-white rounded-lg"
          >
            <Check />
            Register
          </Button>
        
      </Form>
    </div>
  );
};

export default RegisterPage;

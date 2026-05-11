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
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { data: authData, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(authData, error);

    if (error) {
      alert(error.message);
    } else if (authData) {
      alert("Login successful! You are now logged in.");
    }
  };

  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGithubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="container mx-auto min-h-[70vh] p-5 flex justify-center items-center  rounded-xl">
      <Form
        className="flex w-96 flex-col gap-4 shadow-2xl p-10 rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          isRequired
          //   name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <br></br>
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
          Login
        </Button>

        <div className="flex items-center gap-2">
          <p>Do Not Have An Account ? </p>{" "}
          <Link href="/register" className="text-red-600">
            Register
          </Link>
        </div>
        <div>
          <h2 className="font-semibold text-xl text-center">OR</h2>

          <div className="flex flex-col gap-5 mt-5">
            <button
              className="flex rounded-lg btn items-center gap-2 text-center border-blue-500 text-blue-500 bg-transparent"
              onClick={handleGoogleSignin}
            >
              <FaGoogle /> Login with Google
            </button>
            <button
              className="flex rounded-lg btn items-center gap-2 text-center border-black bg-transparent"
              onClick={handleGithubSignin}
            >
              <FaGithub /> Login with GitHub
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;

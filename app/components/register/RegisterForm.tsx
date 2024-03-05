"use client";
import React, { useState } from "react";
import Heading from "../common/Heading";
import Input from "../common/Input";
import { FieldValues, RegisterOptions, SubmitHandler, UseFormRegisterReturn, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Button from "../common/Button";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import CustomListBox from "./UsetTypeListBox";
import { registerUser } from "@/app/service/authentication";
import { hasWhiteSpace, isValidateEmail } from "@/utils";

const RegisterForm = () => {

  const userTypes = [
    { id: 0, type: "Choose user type" },
    { id: 1, type: "CUSTOMER" },
    { id: 2, type: "MERCHANT" },
  ];

  const [selectedUserType, setSelectedUserType] = useState(userTypes[0]);
  const [image, setImage] = useState<File>();

  console.log("Check in useState function: Selected Role is :", selectedUserType.type);

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm<FieldValues>({
      defaultValues: {
        name: "",
        email: "",
        password: "",
        role: "",
      },
    });

  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
    data.role = selectedUserType.type.toUpperCase();

    try {

      if (data.email.length > 0 && !isValidateEmail(data.email)) {
        alert("Please provide valid email");
        return;
      }

      if (isEmpty()) {
        return;
      }

      if (selectedUserType.id == 0) {
        alert("Please choose user type");
        return;
      }

      if (hasWhiteSpace(data.password) && hasWhiteSpace(data.confirmPassword)) {
        alert("Whitespace is invalid for password");
        return;
      }

      console.log("Printing the JSON value: ", JSON.stringify(data));
      registerUser(data.email, data.name, data.password, data.role).then(
        (callback) => {

          const { message, result } = callback;

          if (result.length > 0) {
            toast.success('Account created');
            signIn('credentials', {
              email: data.email,
              password: data.password,
              redirect: false,
            }).then((callback) => {

              if (callback?.ok) {
                router.push('/');
                router.refresh();
                toast.success('Logged In');
              }

              if (callback?.error) {
                toast.error("Logged In failed.");
              }
            });
          } else {
            toast.error(message)
          }



        }
      );
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const isEmpty = () => {
    var elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].value == "" && elements[i].type != "file") {
        alert("Please provide " + elements[i].id);
        return true;
      }
    }
    return false;
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    setImage(file);
  };

  return (
    <>
      <div data-testid="register-page" />
      <Heading title={"Welcome to IV Voucher Management"} center={true} />
      <hr className="bg-slate-300 w-full h-px" />
      <Input id="name" label="Name" disabled={isLoading} placeholder="" register={register} errors={errors} required />
      <Input id="email" label="Email" disabled={isLoading} placeholder="" register={register} errors={errors} required />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
        placeholder=""
      />
      <Input
        id="confirmPassword"
        label="Confirm Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
        placeholder=""
      />

      {/* this is for dropdown error handling to show with red border if the user select nothing */}
      {/* <CustomListBox id="callCustomList" register={register}  errors={errors}
                required
          setFilter={setSelectedUserType}></CustomListBox> */}
      <CustomListBox
        setFilter={setSelectedUserType}></CustomListBox>

      {/* this is for file upload */}
      {/* <span>User Image</span>
          <input
            type="file"
            accept="image/*"
            id="image"
            onChange={(e) => handleImageChange(e)}
          /> */}
      <Button label={isLoading ? "Loading" : "Sign Up"} onClick={handleSubmit(onSubmit)} />

      <p className="text-sm">Already have an account?
        <Link className="underline" href='/components/login'>Login</Link>
      </p>
    </>
  );
};

export default RegisterForm;

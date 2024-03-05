"use client";
import React, { useState } from "react";
import CustomListBox from "./UsetTypeListBox";
import { useRouter } from "next/navigation";
import Heading from "../common/Heading";
import { registerUser } from "@/app/service/authentication";
import Link from "next/link";
import { UserFilterType, UserTypeProps } from "@/type/user";

const Registration = () => {
  const userTypes = [
    { id: 0, type: "Choose user type" },
    { id: 1, type: "CUSTOMER" },
    { id: 2, type: "MERCHANT" },
  ];

  const [selectedUserType, setSelectedUserType] = useState(userTypes[0]);
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState<File>();
  const router = useRouter();

  const signUp = async () => {

    if (selectedUserType.id == 0) {
      alert("Please choose user type");
      return;
    }

    if (password !== confirmedPassword) {
      alert("Password and confirmed password do not match.");
      return;
    } else {
      try {
        const response = await registerUser(
          email,
          username,
          password,
          selectedUserType.type.toUpperCase(),
          image
        );
        const { message, result } = response;
        alert(message);
        if (result.length > 0) {
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    setImage(file);
  };

  return (
    <main>
      <div className="mt-20" data-testid="register-page">
        {/* <h1 className="text-4x1 font-extrabold text-center">Welcome to IV Voucher Manage</h1> */}
        <Heading title={"Welcome to IV Voucher Management"} center={true} />
      </div>
      <div className="wrapper mt-5">
        <form method="post" onSubmit={signUp}>
          <div className="registration__input">
            Name
          </div>
          <input
            type="text"
            id="name"
            className="logintext__input"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <div className="registration__input">
            Email
          </div>
          <input
            type="email"
            id="email"
            className="logintext__input"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="registration__input">
            Password
          </div>
          <input
            type="password"
            id="password"
            className="logintext__input"
            minLength={6}
            pattern="[^' ']+"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="registration__input">
            Confirm Password
          </div>
          <input
            type="password"
            id="confirmed password"
            className="logintext__input"
            minLength={6}
            pattern="[^' ']+"
            onChange={(e) => setConfirmedPassword(e.target.value)}
            required
          />
          <div className="registration__input pb-1">
            Register as
          </div>
          <CustomListBox
            setFilter={setSelectedUserType}
          ></CustomListBox>
          <div className="registration__input">
            User Image
          </div>
          <input
            type="file"
            accept="image/*"
            id="image"
            onChange={(e) => handleImageChange(e)}
          />
          <button
            type="submit"
            className="authentication__btn mt-10">
            Sign Up
          </button>

          <Link
            href={"/components/login"}
            className="
                    text-slate-500 flex items-center gap-1 mt-6 text-sm
                    "
          >
            <span>Already have an account?</span>
            <span>Login</span>
          </Link>
        </form>
      </div>
    </main>
  );
};

export default Registration;

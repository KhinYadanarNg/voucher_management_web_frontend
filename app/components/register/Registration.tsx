"use client";
import React, { useState } from "react";
import CustomListBox from "../common/CustomListBox";
import { hasWhiteSpace, isValidateEmail } from "@/utils";
import { useRouter } from "next/navigation";
import Heading from "../common/Heading";
import { registerUser } from "@/service";
import Link from "next/link";

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
    if (email.length > 0 && !isValidateEmail(email)) {
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

    if (hasWhiteSpace(password) && hasWhiteSpace(confirmedPassword)) {
      alert("Whitespace is invalid for password");
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
        if (result.length > 0) {
          router.push("/");
        } else {
          alert(message);
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
  return (
    <main>
      <div className="mt-20" data-testid="register-page">
        {/* <h1 className="text-4x1 font-extrabold text-center">Welcome to IV Voucher Manage</h1> */}
        <Heading title={"Welcome to IV Voucher Management"} center={true} />
      </div>
      <div className="wrapper mt-5">
        <form action="/" method="post" encType="multipart/form-data">
          <div className="registration__input">
            <text>Name</text>
          </div>
          <input
            type="text"
            id="name"
            className="logintext__input"
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="registration__input">
            <text>Email</text>
          </div>
          <input
            type="text"
            id="email"
            className="logintext__input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="registration__input">
            <text>Password</text>
          </div>
          <input
            type="password"
            id="password"
            className="logintext__input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="registration__input">
            <text>Confirm Password</text>
          </div>
          <input
            type="password"
            id="confirmed password"
            className="logintext__input"
            onChange={(e) => setConfirmedPassword(e.target.value)}
          />
          <div className="registration__input pb-1">
            <text>Register as</text>
          </div>
          <CustomListBox
            className="text-slate-500"
            setFilter={setSelectedUserType}
          ></CustomListBox>
          <div className="registration__input">
            <text>User Image</text>
          </div>
          <input
            type="file"
            accept="image/*"
            id="image"
            onChange={(e) => handleImageChange(e)}
          />
          <button
            type="button"
            className="authentication__btn mt-10"
            onClick={signUp}
          >
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

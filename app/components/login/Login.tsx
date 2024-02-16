"use client";
import { hasWhiteSpace, isValidateEmail } from "@/utils";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Heading from "../common/Heading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const logIn = () => {
    const isValidEmail = isValidateEmail(email);
    const hasPasswordWhiteSpace = hasWhiteSpace(password);
    if (!isValidEmail) {
      alert("Please provide valid email");
      return;
    }
    if (password.length > 0 && !hasPasswordWhiteSpace) {
      router.push("/");
    } else {
      alert("please provide valid password");
    }
  };

  return (
    <main>
      <div className="mt-20" data-testid="login-page">
        
        <Heading title={"Welcome to IV Voucher"} center={true} />
      </div>
      <div className="mt-10">
        <form className="wrapper" action="/" method="post">
          <input
            type="text"
            placeholder="Please enter email"
            className="logintext__input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Please enter password"
            className="logintext__input mt-10"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="authentication__btn mt-10"
            onClick={logIn}
          >
            Login
          </button>
          <Link
            href={"/components/passwordReset"}
            className="
                    text-slate-500 flex items-center gap-1 mt-6 text-sm
                    "
          >
            <span>Forgot your password?</span>
            <span>Reset Password</span>
          </Link>
        </form>
      </div>
    </main>
  );
};

export default Login;

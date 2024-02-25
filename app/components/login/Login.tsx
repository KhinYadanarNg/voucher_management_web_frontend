"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Heading from "../common/Heading";
import { signIn } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const router = useRouter();

  const logIn = async () => {
    const res = await signIn("credentials", {
      username: email,
      password: password,
      redirect: false
    });
    if (res?.error == null) {
      router.push("/")
    } else {
      alert(res.error)
    }
  };

  return (
    <main>
      <div className="mt-20" data-testid="login-page">

        <Heading title={"Welcome to IV Voucher"} center={true} />
      </div>
      <div className="mt-10">
        <form className="wrapper" method="post" onSubmit={logIn}>
          <input
            type="email"
            value={email}
            placeholder="Please enter email"
            className="logintext__input"
            data-testid='input-field-email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            required
            placeholder="Please enter password"
            className="logintext__input mt-10"
            data-testid='input-field-password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="authentication__btn mt-10"
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

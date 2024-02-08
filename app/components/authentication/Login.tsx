"use client";
import { hasWhiteSpace, isValidateEmail } from '@/utils';
import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logIn = () => {
    const isValidEmail = isValidateEmail(email);
    const hasPasswordWhiteSpace = hasWhiteSpace(password);
    if (!isValidEmail) {
      alert("Please provide valid email");
    }
    if (password.length > 0 && !hasPasswordWhiteSpace) {

    } else {
      alert("please provide valid password")
    }
  }

  return (
    <main>
      <div className="mt-20">
        <h1 className="text-4x1 font-extrabold text-center">Welcome to IV Voucher
        </h1>
      </div>
      <div className="mt-10">
        <form className='wrapper' action="/" method="post">
          <input type="text" placeholder="Please enter email" className="logintext__input"
            onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Please enter password" className="logintext__input mt-10"
            onChange={(e) => setPassword(e.target.value)} />
          <button type="button" className="authentication__btn mt-10" onClick={logIn}>Login</button>
        </form>
      </div >
    </main >
  );
}

export default Login
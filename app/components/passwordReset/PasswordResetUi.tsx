"use client";
import React, { useState } from 'react'
import Heading from '../common/Heading'
import { useRouter } from 'next/navigation';
import { forgotPassword } from '@/app/service/authentication';

const PasswordResetUi = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const resetPassword = async () => {
    try {
      const response = await forgotPassword(email, password)
      const { message } = response;
      alert(message);
      router.push('/components/login');
    } catch (error) {
      alert(error);
    } finally {
    }
  }

  return (
    <main>
      <div className="mt-20">
        {/* <h1 className="text-4x1 font-extrabold text-center">Welcome to IV Voucher Manage</h1> */}
        <Heading title={'Welcome to IV Voucher Management'} center={true} />
      </div>
      <div className='wrapper mt-5'>
        <form method="post" onSubmit={resetPassword}>
          <div className='registration__input'>
            Email
          </div>
          <input type="email" id="email" className="logintext__input" data-testid='input-field-email' required onChange={(e) => setEmail(e.target.value)} />
          <div className='registration__input'>
            Password
          </div>
          <input type="password" id="password" className="logintext__input" data-testid='input-field-password' required minLength={6} pattern="[^' ']+" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="authentication__btn mt-10">Reset Password</button>
        </form>
      </div>
    </main>
  )
}

export default PasswordResetUi
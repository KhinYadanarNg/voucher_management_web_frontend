"use client";
import React, { useState } from 'react'
import Heading from '../common/Heading'
import { hasWhiteSpace, isValidateEmail } from '@/utils';
import { useRouter } from 'next/navigation';

const PasswordResetUi = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();


    const resetPassword = async () => {
        const isValidEmail = isValidateEmail(email);
        const hasPasswordWhiteSpace = hasWhiteSpace(password);
        if (!isValidEmail) {
            alert("Please provide valid email");
            return;
        }
        if (password.length > 0 && !hasPasswordWhiteSpace) {
            router.push('/components/login');
        } else {
            alert("please provide valid password")
        }
    }

    return (
        <main>
            <div className="mt-20">
                {/* <h1 className="text-4x1 font-extrabold text-center">Welcome to IV Voucher Manage</h1> */}
                <Heading title={'Welcome to IV Voucher Management'} center={true} />
            </div>
            <div className='wrapper mt-5'>
                <form action="/" method="post" >
                    <div className='registration__input'>
                        Email
                    </div>
                    <input type="text" id="email" className="logintext__input" data-testid ='input-field-email' onChange={(e) => setEmail(e.target.value)} />
                    <div className='registration__input'>
                        Password
                    </div>
                    <input type="password" id="password" className="logintext__input" data-testid ='input-field-password' onChange={(e) => setPassword(e.target.value)} />
                    <button type="button" className="authentication__btn mt-10" onClick={resetPassword}>Reset Password</button>
                </form>
            </div>
        </main>
    )
}

export default PasswordResetUi
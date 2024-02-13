"use client";
import React, { Fragment, useState } from 'react'
import CustomListBox from '../common/CustomListBox';
import { hasWhiteSpace, isValidateEmail, registerUser } from '@/utils';
import { useRouter } from 'next/navigation';

const Registration = () => {

    const userTypes = [
        { id: 0, type: 'Choose user type' },
        { id: 1, type: 'CUSTOMER' },
        { id: 2, type: 'MERCHANT' }
    ]

    const [selectedUserType, setSelectedUserType] = useState(userTypes[0]);
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const router = useRouter();


    const signUp = async () => {

        if (email.length > 0 && !isValidateEmail(email)) {
            alert('Please provide valid email');
            return;
        }

        if (isEmpty()) { return; }

        if (hasWhiteSpace(password) && hasWhiteSpace(confirmedPassword)) {
            alert('Whitespace is invalid for password');
            return;
        }

        if (password !== confirmedPassword) {
            alert('Password and confirmed password do not match.');
            return;
        } else {
            try {
                const response = await registerUser(email, username, password, selectedUserType.type.toUpperCase());
                const { message, result } = response;
                if (result.length > 0) {
                    router.push('/');
                } else {
                    alert(message);
                }
            } catch (error) {
                console.log(error);
            } finally {
            }

        }

    }

    const isEmpty = () => {
        var elements = document.getElementsByTagName("input")
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].value == "") {
                alert('Please provide ' + elements[i].id);
                return true;
            }
        }
        return false;
    }
    return (
        <main>
            <div className="mt-20">
                <h1 className="text-4x1 font-extrabold text-center">Welcome to IV Voucher
                </h1>
            </div>
            <div className='wrapper mt-5'>
                <form action="/" method="post" encType='multipart/form-data'>
                    <div className='registration__input'>
                        <text>Name</text>
                    </div>
                    <input type="text" id="name" className="logintext__input" onChange={(e) => setUsername(e.target.value)} />
                    <div className='registration__input'>
                        <text>Email</text>
                    </div>
                    <input type="text" id="email" className="logintext__input" onChange={(e) => setEmail(e.target.value)} />
                    <div className='registration__input'>
                        <text>Password</text>
                    </div>
                    <input type="password" id="password" className="logintext__input" onChange={(e) => setPassword(e.target.value)} />
                    <div className='registration__input'>
                        <text>Confirm Password</text>
                    </div>
                    <input type="password" id="confirmed password" className="logintext__input" onChange={(e) => setConfirmedPassword(e.target.value)} />
                    <div className='registration__input pb-1'>
                        <text>Register as</text>
                    </div>
                    <CustomListBox setFilter={setSelectedUserType}></CustomListBox>
                    <button type="button" className="authentication__btn mt-10" onClick={signUp}>Sign Up</button>
                </form>
            </div>
        </main>
    )
}

export default Registration
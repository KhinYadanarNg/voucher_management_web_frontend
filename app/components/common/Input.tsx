"use client";
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps{
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    placeholder?: string;
    min?: string;
    testId?: string
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type,
    disabled,
    required,
    register,
    errors,
    placeholder,
    min,
    testId
    
}) => {

  return (
    <div className='w-full relative'>
      <div className='registration__input'>
      {label}
      </div>
      
        <div>
        <input autoComplete='off'
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        min={min}
        required={required}
        data-testid={testId}
        {...type === "password" ?({...register(id, {required, pattern: { 
          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
          message: "Password should not contain white space and contain at least one uppercase, lowercase and one digit.",
      },   minLength: {
          value: 6,
          message: "Password must be at least 6 characters",
        }})}):( {...register(id, {required})})}
        className={`
        peer
        w-full
        outline-none
        rounded-none
        border-2
        bg-white
        font-light
        p-2
        cursor-pointer
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${errors[id] ? 'border-rose-400' : 'border-black'}
        ${errors[id] ? 'focus:border-rose-400' : 'focus:border-black'}
        `}/>

        </div>

    </div>
  )
}

export default Input
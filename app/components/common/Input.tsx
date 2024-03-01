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
        {...register(id, {required})}
        placeholder={placeholder}
        type={type}
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
import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Image from "next/image";
import { UserTypeProps, UserFilterType } from '@/type/user';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export default function CustomListBox({ setFilter }: UserFilterType) {
    const userTypes: UserTypeProps[] = [
        { id: 0, type: 'Choose user type' },
        { id: 1, type: 'Customer' },
        { id: 2, type: 'Merchant' }
    ]
    const [selectedUserType, setSelectedUserType] = useState(userTypes[0])
    return (
        
        <div>
            <div className="registration__input">Register as</div>
            <Listbox
                value={selectedUserType}
                onChange={(e) => {
                    setSelectedUserType(e);
                    setFilter(e)
                }}>
                <Listbox.Button className="customfilter__btn">
                    <span>{selectedUserType.type}</span>
                    <Image src='/chevron-up-down.svg' width={20} height={20} className='pt-1' alt='chevron_up-down' />
                </Listbox.Button>
                <Transition
                    as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <Listbox.Options className='mt-2 border-2 border-black'>
                        {userTypes.map((userType) => (
                            <Listbox.Option key={userType.id} value={userType} className={({ active }) =>
                                `pb-3 px-2 ${active ? "bg-orange-500" : "bg-white"
                                }`
                            }>
                                {userType.type}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </Listbox>
        </div>
    );
}

{/* this is for dropdown error handling to show with red border if the user select nothing */}
// interface UserType {
//     id: number;
//     type: string;
// }

// interface CustomListBoxProps {
//     setFilter: (userType: UserType) => void;
//     id: string;
//     required?: boolean;
//     register: UseFormRegister<FieldValues>;
//     errors: FieldErrors;
// }

// const CustomListBox: React.FC<CustomListBoxProps> = ({
//     setFilter,
//     id,
//     required,
//     register,
//     errors,
// }) => {

//     const userTypes: UserType[] = [
//         { id: 0, type: "Choose user type" },
//         { id: 1, type: "Customer" },
//         { id: 2, type: "Merchant" },
//     ];

//     const [selectedUserType, setSelectedUserType] = useState<UserType>(userTypes[0]);

//     const handleUserTypeChange = (userType: UserType) => {
//         setSelectedUserType(userType);
//         setFilter(userType);
//     };

    
//     return (
//         <div>
//             <div className="registration__input">Register as</div>
//             <div id={id} {...register(id, {required})} className={`${errors[id] && selectedUserType.id === 0 ? 'border-rose-500' : 'border-black'}`}>
//             <Listbox
//                 value={selectedUserType}
//                 onChange={handleUserTypeChange}
                
//             >
//                 <Listbox.Button className={`flex justify-between outline-none border-2 pt-1 p-2 px-2  h-[35px] w-[580px] ${errors[id] && selectedUserType.id === 0 ? 'border-rose-500' : 'border-black'}`}>
//                     <span>{selectedUserType.type}</span>
//                     <Image src="/chevron-up-down.svg" width={20} height={20} className="pt-1" alt="chevron_up-down" />
//                 </Listbox.Button>
//                 <Transition
//                     as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
//                     leave="transition ease-in duration-100"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                 >
//                     <Listbox.Options className={`mt-2 border-2 ${errors[id] && selectedUserType.id === 0 ? 'border-rose-500' : 'border-black'} `} >
//                         {userTypes.map((userType) => (
//                             <Listbox.Option
//                                 key={userType.id}
//                                 value={userType}
//                                 className={({active}) => `pb-3 px-2 ${active ? "bg-orange-500" : "bg-white"}`}
//                             >
//                                 {userType.type}
//                             </Listbox.Option>
//                         ))}
//                     </Listbox.Options>
//                 </Transition>
//             </Listbox>
//             </div>
//         </div>
//     );
// }

// export default CustomListBox;


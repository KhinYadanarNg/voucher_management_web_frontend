import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Image from "next/image";

export default function CustomListBox() {
    const userTypes = [
        { id: 0, type: 'Choose user type' },
        { id: 1, type: 'Customer' },
        { id: 2, type: 'Merchant' }
    ]
    const [selectedUserType, setSelectedUserType] = useState(userTypes[0])
    return (
        <div>
            <Listbox
                value={selectedUserType} onChange={setSelectedUserType}>
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
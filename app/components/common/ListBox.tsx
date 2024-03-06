import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Image from "next/image";
import { CustomListBoxProps } from '@/type/customListBox';


export default function ListBox({ setFilter, customFilterTypes }: CustomListBoxProps) {
    const [selectedValue, setSelectedValue] = useState(customFilterTypes[0])
    return (

        <div>
            <div className="registration__input">Register as</div>
            <Listbox
                value={selectedValue}
                onChange={(e) => {
                    setSelectedValue(e);
                    setFilter
                }}>
                <Listbox.Button className="customfilter__btn">
                    <span>{selectedValue.value}</span>
                    <Image src='/chevron-up-down.svg' width={20} height={20} className='pt-1' alt='chevron_up-down' />
                </Listbox.Button>
                <Transition
                    as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <Listbox.Options className='mt-2 border-2 border-black'>
                        {customFilterTypes.map((filter) => (
                            <Listbox.Option key={filter.id} value={filter} className={({ active }) =>
                                `pb-3 px-2 ${active ? "bg-orange-500" : "bg-white"
                                }`
                            }>
                                {filter.value}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </Listbox>
        </div>
    );
}

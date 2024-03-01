import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Image from "next/image";
import { countryList } from '@/utils/countriesList';
import { CountryFilter } from '@/type/store';

export default function CountryDropDown({ setFilter }: CountryFilter) {
    
    const [selectedCountry, setSelectedCountry] = useState(countryList[0])
    return (
        
        <div>
            <div className="registration__input">Country</div>
            <Listbox
                value={selectedCountry}
                onChange={(e) => {
                    setSelectedCountry(e);
                    setFilter(e)
                }}>
                <Listbox.Button className="customfilter__btn">
                    <span>{selectedCountry.value}</span>
                    <Image src='/chevron-up-down.svg' width={20} height={20} className='pt-1' alt='chevron_up-down' />
                </Listbox.Button>
                <Transition
                    as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <Listbox.Options className='mt-2 border-2 border-black'>
                        {countryList.map((countryList) => (
                            <Listbox.Option key={countryList.id} value={countryList} className={({ active }) =>
                                `pb-3 px-2 ${active ? "bg-orange-500" : "bg-white"
                                }`
                            }>
                                {countryList.value}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </Listbox>
        </div>
    );
}




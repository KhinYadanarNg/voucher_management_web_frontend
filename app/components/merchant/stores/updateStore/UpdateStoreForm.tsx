'use client';
import { StoreCard } from "@/type/store";
import Input from "@/app/components/common/Input";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import CountryDropDown from "../createStore/CountryDropDown";
import { countryList } from "@/utils/countriesList";

const UpdateStoreForm: React.FC<StoreCard> = ({ store }) => {

    const [imageUrl, setImageUrl] = useState(store.image);
    const [image, setImage] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countryList[0]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImageUrl("")
        const target = event.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];
        setImage(file);

    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        formState: { isDirty },
    } = useForm<FieldValues>({
        defaultValues: {
            storeName: store.storeName,
            description: store.description,
            address1: store.address1,
            address2: store.address2,
            postalCode: store.postalCode,
            images: [],
            country: store.country,
            contactNumber: store.contactNumber,
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        if (!isDirty) {
            alert("Please update fields")
        }

    }


    return (
        <div style={{ display: "flex", gap: "5rem" }}>
            <div style={{ flex: 1 }} className="ml-10 mt-10">
                <Input
                    id="storeName"
                    label="Store Name"
                    disabled={true}
                    register={register}
                    errors={errors}
                    required
                />
                <Input
                    id="description"
                    label="Description"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input
                    id="address1"
                    label="Address"
                    placeholder="Address 1"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input
                    id="address2"
                    label=""
                    placeholder="Address 2"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input
                    id="postalCode"
                    label=""
                    placeholder="Postal Code"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input
                    id="contactNumber"
                    label="Contact Number"
                    placeholder=""
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
            <div style={{ flex: 1 }} className="justify-end mt-10">
                <CountryDropDown setFilter={setSelectedCountry} defaultValue={store.country}></CountryDropDown>

                <div className="registration__input">Image Upload</div>


                {imageUrl.length > 0 ? (
                    <span>
                        <input type="file" accept="image/*" id="image" className="w-28" style={{ color: "transparent", position: 'relative' }}
                            onChange={(e) => handleImageChange(e)} />
                        <label htmlFor="file" >{imageUrl}</label>
                    </span>) : (
                    <span>
                        {image?.name ? (
                            <span>
                                <input type="file" accept="image/*" id="image" className="w-28" style={{ color: "transparent", position: 'relative' }}
                                    onChange={(e) => handleImageChange(e)} />
                                <label htmlFor="file">{image?.name}</label>
                            </span>
                        ) : (<input type="file" accept="image/*" id="image" onChange={(e) => handleImageChange(e)} />)
                        }
                    </span>
                )}

                <div className="flex justify-end mt-64">
                    <button
                        className="border-2 hover:bg-orange-300 text-orange-700  py-3 px-4 rounded-3xl mr-3"
                        onClick={handleSubmit(onSubmit)}>
                        Update
                    </button>
                    <button
                        className="border-2 hover:bg-orange-300 text-orange-700  py-2 px-4 rounded-3xl mr-3"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpdateStoreForm
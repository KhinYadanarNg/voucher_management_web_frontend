"use client";
import Input from "@/app/components/common/Input";
import {countryList} from "@/utils/countriesList";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import CountryDropDown from "./CountryDropDown";
import {createStoreByMerchant} from "@/app/service/store";
import toast from "react-hot-toast";

export type ImageType = {
    color: string;
    colorCode: string;
    image: File | null;
};
interface CreateStoreFormProps {
    currentUser: { 
        email: string;
        name: string;
        role: string;
     }
}

const CreateStoreForm: React.FC<CreateStoreFormProps> = ({currentUser}) => {

    console.log("Printing the currentUser at createStoreForm : ", currentUser);
    const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [isStoreCreated, setIsStoreCreated] = useState(false);
    const router = useRouter();
    const createdBy = { email: currentUser.email };
    //const createdBy = currentUser.email;

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: {errors},
    } = useForm<FieldValues>({
        defaultValues: {
            storeName: "",
            description: "",
            address1: "",
            address2: "",
            postalCode: "",
            images: [],
            country: "",
            contactNumber: "",
        },
    });

    useEffect(() => {
        if (isStoreCreated) {
            reset();
            setImage(null);
            setIsStoreCreated(false);
            setIsLoading(false);
            setIsStoreCreated(false);
        }
    }, [isStoreCreated, reset]);

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        // Handle form submission
        setIsLoading(true);
        console.log(data);
        data.country = selectedCountry.value;

        console.log("Printing the data.country at CreateStoreForm : " , data.country);
        console.log("Printing the createdBy at CreateStoreForm : " , createdBy);
        try {
            const response = await createStoreByMerchant(
                data.storeName,
                data.description,
                data.address1,
                data.address2,
                data.postalCode,
                data.country,
                data.contactNumber,
                data.image,
                createdBy

            );
            const {message, result} = response;

            if (result.length > 0) {
                toast.success(message);
                reset();
                setImage(null);
                setSelectedCountry(countryList[0]);
                router.push("/components/merchant/stores");
            }else{
                toast.error(message);
            }
        } catch {}
    };

    const onCancel = () => {
        // Handle cancellation
        reset();
        setImage(null);
        setIsLoading(false);
        setIsStoreCreated(false);
        setSelectedCountry(countryList[0]);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];
        setImage(file);
    };

    return (
        <div style={{display: "flex", gap: "5rem"}}>
            <div style={{flex: 1}} className="justify-start">
                <Input
                    id="storeName"
                    label="Store Name"
                    disabled={isLoading}
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
            <div style={{flex: 1}} className="justify-end">
                <CountryDropDown setFilter={setSelectedCountry}></CountryDropDown>

                <div className="registration__input">Image Upload</div>

                <input type="file" accept="image/*" id="image" onChange={(e) => handleImageChange(e)} />

                <div className="flex justify-end mt-80">
                    <button
                        className="bg-white border-2 hover:bg-orange-100 text-orange-600  py-2 px-4 rounded-3xl mr-2"
                        onClick={handleSubmit(onSubmit)}
                    >
                        Create
                    </button>
                    <button
                        className="bg-slate-200 border-2 hover:bg-gray-300 text-orange-700  py-2 px-4 rounded-3xl"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateStoreForm;

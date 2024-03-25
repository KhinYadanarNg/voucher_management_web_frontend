"use client";
import Input from "@/app/components/common/Input";
import { countryList } from "@/utils/countriesList";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { createStoreByMerchant } from "@/app/service/store";
import toast from "react-hot-toast";
import ListBox from "@/app/components/common/ListBox";

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

const CreateStoreForm: React.FC<CreateStoreFormProps> = ({ currentUser }) => {

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
        formState: { errors },
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
        console.log(data);
        data.country = selectedCountry.id === "0" ? "" : selectedCountry.value;
        data.image = image;

        console.log("Printing the data.country at CreateStoreForm : ", data.country);
        console.log("Printing the createdBy at CreateStoreForm : ", createdBy);
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

            if (response.success) {
                toast.success(response.message);
                reset();
                setImage(null);
                setSelectedCountry(countryList[0]);
                router.push("/components/merchant/stores");
            } else {
                toast.error(response.message);
            }
        } catch { }
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
        <form>
            <div style={{ gap: "5rem" }} className="store_from_postion">
                <div>
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
                <div>
                    <div className="pt-4">Countries</div>
                    <ListBox setFilter={setSelectedCountry} customFilterTypes={countryList} defaultValue=""></ListBox>

                    <div className="registration__input mt-3">Image Upload</div>

                    <input type="file" accept="image/*" id="image" onChange={(e) => handleImageChange(e)} />

                    <div className="flex justify-end mt-80">
                        <button
                            className="createStore_btn bg-white hover:bg-orange-100 mr-2"
                            onClick={handleSubmit(onSubmit)}
                        >
                            Create
                        </button>
                        <button
                            className="createStore_btn bg-slate-200  hover:bg-gray-300"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CreateStoreForm;

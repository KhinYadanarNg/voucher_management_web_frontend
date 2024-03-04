'use client';
import { UpdateStoreCard } from "@/type/store";
import Input from "@/app/components/common/Input";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import CountryDropDown from "../createStore/CountryDropDown";
import { countryList } from "@/utils/countriesList";
import { updateStoreByMerchant } from "@/app/service/store";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const UpdateStoreForm: React.FC<UpdateStoreCard> = ({ store, currentSessionUser }) => {

    const [imageUrl, setImageUrl] = useState(store.image);
    const [storeImage, setImage] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isImageChanged, setImageChanged] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
    const updatedBy = { email: currentSessionUser.email };
    const router = useRouter();

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];
        setImageUrl("");
        setImageChanged(true);
        setImage(file);

    };

    const {
        register,
        handleSubmit,
        reset,
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

    const onCancel = () => {
        router.back()
    }

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        const isUpdatedCountry = isChangedCountry();
        if (!isImageChanged && store.image.length === 0) {
            if (!isDirty && !isUpdatedCountry) {
                alert("Please update fields");
                return;
            }
        } else {
            if (!isDirty && !isUpdatedCountry && imageUrl.length > 0) {
                alert("Please update fields");
                return;
            }
        }

        data.country = selectedCountry.id === 0 ? store.country : selectedCountry.value;
        data.image = storeImage
        try {
            const response = await updateStoreByMerchant(
                store.storeId,
                data.storeName,
                data.description,
                data.address1,
                data.address2,
                data.postalCode,
                data.country,
                data.contactNumber,
                data.image,
                updatedBy

            );
            const { message, result } = response;

            if (result.length > 0) {
                toast.success(message);
                setImage(null);
                setSelectedCountry(countryList[0]);
                router.push("/components/merchant/stores");
            } else {
                toast.error(message);
            }
        } catch { }
    }

    const isChangedCountry = () => {
        return !(store.country === selectedCountry.value || selectedCountry.id == 0)
    }


    return (
        <form>
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
                            {storeImage?.name ? (
                                <span>
                                    <input type="file" accept="image/*" id="image" className="w-28" style={{ color: "transparent", position: 'relative' }}
                                        onChange={(e) => handleImageChange(e)} />
                                    <label htmlFor="file">{storeImage?.name}</label>
                                </span>
                            ) : (<input type="file" accept="image/*" id="image" onChange={(e) => handleImageChange(e)} />)
                            }
                        </span>
                    )}

                    <div className="flex justify-end mt-64">
                        <button onClick={handleSubmit(onSubmit)}
                            className="border-2 hover:bg-orange-300 text-orange-700  py-3 px-4 rounded-3xl mr-3">
                            Update
                        </button>
                        <button onClick={handleSubmit(onCancel)}
                            className="border-2 hover:bg-orange-300 text-orange-700  py-2 px-4 rounded-3xl mr-3"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div >
        </form>
    )
}

export default UpdateStoreForm

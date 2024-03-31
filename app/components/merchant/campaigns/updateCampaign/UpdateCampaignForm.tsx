"use client";
import Input from "@/app/components/common/Input";
import ListBox from "@/app/components/common/ListBox";
import { updateCampaign } from "@/app/service/campaign";
import { MerchantUpdateCampaignProps } from "@/type/campaign";
import { CustomFilterTypeProps } from "@/type/customListBox";
import moment from "moment";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateCampaignForm: React.FC<MerchantUpdateCampaignProps> = ({
  campaign,
  stores,
  currentSessionUser,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      campaignTitle: campaign.description,
      campaignStartDate: campaign.startDate,
      campaignEndDate: campaign.endDate,
      tandc: campaign.tandc,
      maxVouchers: campaign.numberOfVouchers,
      numberOfLikes: campaign.numberOfLikes,
      tagsJson: campaign.tagsJson,
      amount: campaign.amount,
    },
  });
  const storeList: CustomFilterTypeProps[] = [
    { id: "0", value: "Choose Store" },
  ];

  {
    stores.map((store) =>
      storeList.push({
        id: store.storeId,
        value: store.storeName,
      })
    );
  }
  const [selectedListBoxValue, setSelectedListBoxValue] = useState(
    storeList[0]
  );

  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  const isChangedStore = () => {
    return !(
      campaign.store.storeName === selectedListBoxValue.value ||
      selectedListBoxValue.id == "0"
    );
  };

  const onUpdate: SubmitHandler<FieldValues> = async (fieldValues) => {
    console.log("Start Work in Campaign update function.");

    const updatedBy = { email: currentSessionUser.email };
    const store = { storeId: selectedListBoxValue.id };
    const numberOfLikes = 0;
    const tagsJson = "";
    const amount = 0;

      try {
      const response = await updateCampaign(
        campaign.campaignId,
        fieldValues.campaignTitle,
        fieldValues.campaignStartDate,
        fieldValues.campaignEndDate,
        fieldValues.tandc,
        numberOfLikes,
        tagsJson,
        fieldValues.maxVouchers,
        amount,
        store,
        updatedBy);
      const { success, message, data } = response;

      if (success && data) {
        //setSelectedListBoxValue(storeList[0]);
        toast.success(message);
        router.push("/components/merchant/campaigns");
      } else {
        toast.error(message);
      }
    } catch {
      toast.error("Failed at Campaign Update!");
    }

    console.log("End Work in Campaign update function.");
  };

  const onCancel = () => {
    router.back();
  };

  return (
    <form>
      <div style={{ display: "flex", gap: "5rem" }}>
        <div style={{ flex: 1 }}>
          <Input
            id="campaignTitle"
            label="Campaign Title"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <div className="pt-5">Stores</div>
          <ListBox
            setFilter={setSelectedListBoxValue}
            customFilterTypes={storeList}
            defaultValue={campaign.store.storeName}
          ></ListBox>

          <Input
            id="campaignStartDate"
            type="datetime-local"
            label="Campaign Start Date"
            disabled={isLoading || new Date(campaign.startDate) < currentDate}
            register={register}
            errors={errors}
            min={moment().format("YYYY-MM-DD[T]HH:mm")}
            required
          />
          <Input
            id="campaignEndDate"
            type="datetime-local"
            label="Campaign End Date"
            disabled={isLoading}
            register={register}
            errors={errors}
            min={moment().format("YYYY-MM-DD[T]HH:mm")}
            required
          />
        </div>
        <div style={{ flex: 1 }}>
          <Input
            id="tandc"
            label="Terms and Condition"
            disabled={isLoading}
            register={register}
            errors={errors}
          />

          <Input
            id="maxVouchers"
            type="number"
            label="Maximum Vouchers"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
        </div>
      </div>

      <div className="form_btn_position">
        <button
          onClick={handleSubmit(onUpdate)}
          className="updateStore__btn"
        >
          Update
        </button>
        <button
          onClick={handleSubmit(onCancel)}
          className="updateStore__btn"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UpdateCampaignForm;

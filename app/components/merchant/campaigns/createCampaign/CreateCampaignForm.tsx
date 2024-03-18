'use client'
import React, { useState } from 'react'
import Input from '../../../common/Input'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { CustomFilterTypeProps } from '@/type/customListBox';
import ListBox from '../../../common/ListBox';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import { createCampaign } from '@/app/service/campaign';
import { CreateCampaignParamsProps } from '@/type/campaign';
import toast from 'react-hot-toast';

const CreateCampaignForm = ({ stores, currentSessionUser }: CreateCampaignParamsProps) => {

  const [isLoading, setIsLoading] = useState(false);
  const storeList: CustomFilterTypeProps[] = [
    { id: "0", value: 'Choose Store' }
  ]
  const [selectedListBoxValue, setSelectedListBoxValue] = useState(storeList[0]);
  const router = useRouter();

  {
    stores.map((store) => (
      storeList.push({
        id: store.storeId,
        value: store.storeName
      })
    ))
  }

  const onCreate: SubmitHandler<FieldValues> = async (fieldValues) => {
    if (selectedListBoxValue.id == "0") {
      alert('Please choose a store');
      return;
    }

    const today = new Date();
    const startDate = Date.parse(fieldValues.campaignStartDate);
    const endDate = Date.parse(fieldValues.campaignEndDate);
    if (startDate < today.getTime()) {
      alert('Campaign start date should be greater than current date.');
      return;
    }
    if (endDate < startDate) {
      alert('Campaign end date should be greater than campaign start date.')
      return;
    }

    const createdBy = { email: currentSessionUser.email };
    const store = { storeId: selectedListBoxValue.id };
    const numberOfLikes = 0;
    const tagsJson = "";
    const amount = 0;

    try {
      const response = await createCampaign(
        fieldValues.campaignTitle, 
        fieldValues.campaignStartDate, 
        fieldValues.campaignEndDate, 
        fieldValues.tandc, 
        numberOfLikes,
        tagsJson,
        fieldValues.maxVouchers, 
        amount,
        store, 
        createdBy);
      const { success, message, data } = response;
      if (success && data) {
        setSelectedListBoxValue(storeList[0]);
        toast.success(message);
        router.push("/components/merchant/campaigns");
      } else {
        toast.error(message);
      }
    } catch {

    }
  }

  const onCancel = () => {
    router.back()
  }

  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm<FieldValues>({
      defaultValues: {
        campaignTitle: "",
        campaignStartDate: "",
        campaignEndDate: "",
        tandc: "",
        numberOfLikes: 0,
        tagsJson: "",
        amount: 0.00, 
        maxVouchers: ""
      },
    });

  return (
    <form data-testid='create-campaignForm'>
      <div style={{ display: "flex", gap: "5rem" }}>
        <div style={{ flex: 1 }}>
          <Input
            testId='title-textfield-id'
            id="campaignTitle"
            label="Campaign Title"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <div className='pt-5'>Stores</div>
          <ListBox setFilter={setSelectedListBoxValue} customFilterTypes={storeList} defaultValue=""></ListBox>

          <Input
            id="campaignStartDate"
            type='datetime-local'
            label="Campaign Start Date"
            disabled={isLoading}
            register={register}
            errors={errors}
            min={moment().format("YYYY-MM-DD[T]HH:mm")}
            required
          />
          <Input
            id="campaignEndDate"
            type='datetime-local'
            label="Campaign End Date"
            disabled={isLoading}
            register={register}
            errors={errors}
            min={moment().format("YYYY-MM-DD[T]HH:mm")}
            required
            testId='startdate-textfield-id'
          />
        </div>
        <div style={{ flex: 1 }}>

          <Input
            id="tandc"
            label="Terms and condition"
            disabled={isLoading}
            register={register}
            errors={errors}
          />
          {/* <Input
            id="condition2"
            label="Condition2"
            disabled={isLoading}
            register={register}
            errors={errors}
            testId='condition1-textfield-id'
          /> */}

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
      {/* <div>
        <Input
          id="campaignDetail"
          label="Campaign Detail"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div> */}

      <div className="flex justify-end mt-10">
        <button onClick={handleSubmit(onCreate)}
          className="border-2 hover:bg-orange-300 text-orange-700  py-3 px-4 rounded-3xl mr-3">
          Create
        </button>
        <button onClick={handleSubmit(onCancel)}
          className="border-2 hover:bg-orange-300 text-orange-700  py-2 px-4 rounded-3xl mr-3"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default CreateCampaignForm
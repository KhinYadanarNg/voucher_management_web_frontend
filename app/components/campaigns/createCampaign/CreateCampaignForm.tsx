'use client'
import React, { useState } from 'react'
import Input from '../../common/Input'
import { FieldValues, useForm } from 'react-hook-form';
import { CustomFilterTypeProps } from '@/type/customListBox';
import { StoreDetailProps } from '@/type/store';
import ListBox from '../../common/ListBox';

const CreateCampaignForm = ({ stores }: { stores: StoreDetailProps[] }) => {

  const [isLoading, setIsLoading] = useState(false);
  const storeList: CustomFilterTypeProps[] = [
    { id: 0, value: 'Choose Store' }
  ]
  const [selectedListBoxValue, setSelectedListBoxValue] = useState(storeList[0]);

  {
    stores.map((store) => (
      storeList.push({
        id: Number(store.storeId),
        value: store.storeName
      })
    ))
  }

  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm<FieldValues>({
      defaultValues: {
        campaignTitle: "",
        campaignStartDate: "",
        campaignEndDate: "",
        condition1: "",
        condition2: "",
        maxVouchers: ""
      },
    });

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

          <ListBox setFilter={setSelectedListBoxValue} customFilterTypes={storeList} defaultValue=""></ListBox>

          <Input
            id="campaignStartDate"
            type='date'
            label="Campaign Start Date"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="campaignEndDate"
            type='date'
            label="Campaign End Date"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
        </div>
        <div style={{ flex: 1 }}>

          <Input
            id="condition1"
            label="Condition 1"
            disabled={isLoading}
            register={register}
            errors={errors}
          />
          <Input
            id="condition2"
            label="Condition2"
            disabled={isLoading}
            register={register}
            errors={errors}
          />

          <Input
            id="maxVouchers"
            label="Maximum Vouchers"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
        </div>
      </div>
      <div>
        <Input
          id="campaignTitle"
          label="Campaign Title"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>

      <div className="flex justify-end mt-10">
        <button
          className="border-2 hover:bg-orange-300 text-orange-700  py-3 px-4 rounded-3xl mr-3">
          Create
        </button>
        <button
          className="border-2 hover:bg-orange-300 text-orange-700  py-2 px-4 rounded-3xl mr-3"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default CreateCampaignForm
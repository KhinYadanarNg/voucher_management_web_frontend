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
import NullData from '@/app/components/common/NullData';

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

    try {
      const response = await createCampaign(
        fieldValues.campaignTitle,
        fieldValues.campaignStartDate,
        fieldValues.campaignEndDate,
        fieldValues.tandc,
        numberOfLikes,
        tagsJson,
        fieldValues.maxVouchers,
        fieldValues.amount,
        store,
        createdBy);
      const { success, message, data } = response;
      if (success && data) {
        setSelectedListBoxValue(storeList[0]);
        toast.success(message);
        router.push("/components/merchant/campaigns/campaignsList?page=1");
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
        amount: "",
        maxVouchers: ""
      },
    });

  return (
    <div data-testid='create-campaignForm'>
      {stores.length <= 0 ? (<NullData title="Please create a store first" />) : (
        <form>
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
                testId='startDate-textfield-id'
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
                testId='endDate-textfield-id'
                id="campaignEndDate"
                type='datetime-local'
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
                testId='tandc-textfield-id'
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
                testId='amount-textfield-id'
                id="amount"
                type="number"
                label="Discount Amount"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
              {errors.amount && (
                <p className="text-red-500">{`${errors.amount.message}`}</p>
              )}

              <Input
                testId='maxVouchers-textfield-id'
                id="maxVouchers"
                type="number"
                label="Maximum Vouchers"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
              {errors.maxVouchers && (
                <p className="text-red-500">{`${errors.maxVouchers.message}`}</p>
              )}
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

          <div className="form_btn_position">
            <button onClick={handleSubmit(onCreate)}
              className="updateStore__btn">
              Create
            </button>
            <button onClick={handleSubmit(onCancel)}
              className="updateStore__btn"
            >
              Cancel
            </button>
          </div>
        </form>
      )
      }

    </div>
  )
}

export default CreateCampaignForm
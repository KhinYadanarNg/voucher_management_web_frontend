import { getCurrentUserEmail } from "@/utils";

export const fetchCampaignsByCustomer = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/campaign/all/active`
  )
  const data = await res.json()
  return data;
}

// export const fetchCampaignsByMerchant = async (useremail: string) => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/campaign/all/active`
//   )
//   const data = await res.json()
//   return data;
// }

export const fetchCampaignsByMerchant = async (useremail: string) => {
  let email = await getCurrentUserEmail(useremail);
  let blob = new Blob();
  if (email) {
    blob = new Blob([JSON.stringify({
      email
    })], {
      type: "application/json"
    })

  } else throw new Error("Undefined email")

  const formData = new FormData();
  formData.append('email', blob);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/campaign/user/email`,
    {
      method: 'POST',
      body: formData,
    })

  const data = await res.json()
  return data;
}

export const createCampaign = async (description: string, startDate: string, endDate: string, condition1: string, condition2: string, numberOfVouchers: number, store: { storeId: string }, createdBy: { email: string }) => {
  const formData = new FormData();
  const blob = new Blob([JSON.stringify({
    description,
    startDate,
    endDate,
    condition1,
    condition2,
    numberOfVouchers,
    store,
    createdBy
  })], {
    type: "application/json"
  })

  formData.append('campaign', blob);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/campaign/create`,
    {
      method: 'POST',
      body: formData,
    });
  const data = await res.json()
  return data;
}

export const updateCampaign = async (campaignId: string,description: string, startDate: string, endDate: string, condition1: string, condition2: string, numberOfVouchers: number, store: { storeId: string }, createdBy: { email: string }) => {

  console.log("Reach at updateCampaign API call ");

  const formData = new FormData();
  const blob = new Blob([JSON.stringify({
    campaignId,
    description,
  })], {
    type: "application/json"
  })

  formData.append('campaign', blob);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/campaign/update`,
    {
      method: 'POST',
      body: formData,
    });
  console.log("Checking the update campaign API response : ", res);
  const data = await res.json()
  return data;
}

// For Customer
export const getCustomerCampaignsByStoreId = async (storeId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/campaign/store/${storeId}`
  )
  const data = await res.json()
  return data;
}

// export const getCustomerCampaignsByStoreId = async (storeId: string) => {
  
//   let blob = new Blob();
//   if (storeId) {
//     blob = new Blob([JSON.stringify({
//       storeId
//     })], {
//       type: "application/json"
//     })

//   } else throw new Error("Undefined store id.")

//   const formData = new FormData();
//   formData.append('storeId', blob);
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/campaign/store`,
//     {
//       method: 'POST',
//       body: formData,
//     })

//   const data = await res.json()
//   return data;
// }
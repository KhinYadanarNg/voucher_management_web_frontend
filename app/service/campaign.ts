import { getCurrentUserEmail } from "@/utils";

//For MERCHANT
export const fetchCampaignsByMerchant = async (useremail: string) => {
  const requestBody = {
    email: useremail,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/campaign/getAllByEmail`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }
  );

  const data = await res.json();
  return data;
};

export const createCampaign = async (
  description: string,
  startDate: string,
  endDate: string,
  tandc: string,
  numberOfLikes: number,
  tagsJson: string,
  numberOfVouchers: number,
  amount: number,
  store: { storeId: string },
  createdBy: { email: string }
) => {
  const requestBody = {
    description,
    startDate,
    endDate,
    numberOfVouchers,
    numberOfLikes,
    tagsJson,
    amount,
    tandc,
    store,
    createdBy,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/campaign/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }
  );

  const data = await res.json();
  return data;
};

export const updateCampaign = async (
  campaignId: string,
  description: string,
  startDate: string,
  endDate: string,
  tandc: string,
  numberOfLikes: number,
  tagsJson: string,
  numberOfVouchers: number,
  amount: number,
  store: { storeId: string },
  updatedBy: { email: string }
) => {
  console.log("Reach at updateCampaign API call ");

  const requestBody = {
    campaignId,
    description,
    startDate,
    endDate,
    numberOfVouchers,
    numberOfLikes,
    tagsJson,
    amount,
    tandc,
    store,
    updatedBy,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/campaign/update`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }
  );

  const data = await res.json();
  return data;
};

export const promoteCampaignByMerchant = async (campaignId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/campaign/promote/${campaignId}`,
    {
      method: "POST",
    }
  );
  const data = await res.json();
  return data;
};
// *********** END of MERCHANT ***************** //

// For Customer
export const fetchCampaignsByCustomer = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/campaign/all/active`
  );
  const data = await res.json();
  return data;
};

export const getCustomerCampaignsByStoreId = async (storeId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/campaign/store/${storeId}`
  );
  const data = await res.json();
  return data;
};

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


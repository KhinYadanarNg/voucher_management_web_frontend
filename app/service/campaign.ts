import { getCurrentUserEmail } from "@/utils";
import { getCurrentUser } from "../auth/getCurrentUser";

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

  console.log("Reach at updateCampaign API call : JSON.stringify(requestBody) : ", JSON.stringify(requestBody));

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

export const promoteCampaignByMerchant = async (campaignId: string, updatedBy: { email: string }) => {
  let body = {
    campaignId,
    updatedBy
  }

  const headers = {
    'Content-Type': 'application/json'
  };
  console.log(body);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/campaign/promote`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
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
  const requestBody = {
    storeId: storeId,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/campaign/getAllByStoreId?status=PROMOTED`,
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

export const fetchCampaignByID = async (campaignId: string) => {
  const requestBody = {
    campaignId: campaignId,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/campaign/getById`,
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
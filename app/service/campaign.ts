
//For MERCHANT
export const fetchCampaignsByMerchant = async (useremail: string) => {
  console.log("Printing fetchCampaignsByMerchant api call : ");
  const requestBody = {
    email: useremail,
  };

  console.log("Printing fetchCampaignsByMerchant api call json request : ", JSON.stringify(requestBody));
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

  console.log("Printing fetch campaign by merchant response : ", res);
  const data = await res.json();
  console.log("Printing fetch campaign by merchant response json : ", data);
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
  console.log("Printing createCampaign api call : ");
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

  console.log("Printing createCampaign api call json request : ", JSON.stringify(requestBody));
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

  console.log("Printing create campaign by merchant response : ", res);
  const data = await res.json();
  console.log("Printing create campaign by merchant response json : ", data);
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

  console.log("Printing update campaign by merchant response : ", res);
  const data = await res.json();
  console.log("Printing update campaign by merchant response json : ", data);
  return data;
};

export const promoteCampaignByMerchant = async (campaignId: string, updatedBy: { email: string }) => {
  console.log("Printing promoteCampaignByMerchant api call : ", `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/campaign/promote`);
  let body = {
    campaignId,
    updatedBy
  }

  const headers = {
    'Content-Type': 'application/json'
  };

  console.log("Printing promoteCampaignByMerchant api call json request : ", JSON.stringify(body));
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/campaign/promote`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    }
  );

  console.log("Printing promote campaign by merchant response : ", res);
  const data = await res.json();
  console.log("Printing promote campaign by merchant response json : ", data);
  return data;
};
// *********** END of MERCHANT ***************** //

// For Customer
export const fetchCampaignsByCustomer = async () => {
  console.log("fetchCampaignsByCustomer api call: ", `${process.env.NEXT_PUBLIC_BACKEND_URL_INT}/api/campaign/all/active`);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL_INT}/api/campaign/all/active`
  );

  console.log("Printing fetch campaign by customer response : ", res);
  const data = await res.json();
  console.log("Printing fetch campaign by customer response  : ", data);
  return data;
};

export const getCustomerCampaignsByStoreId = async (storeId: string) => {
  console.log("getCustomerCampaignsByStoreId api call: ");
  const requestBody = {
    storeId: storeId,
  };

  console.log("getCustomerCampaignsByStoreId api call json request: ", JSON.stringify(requestBody));
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

  console.log("Printing getCustomerCampaignsByStoreId response : ", res);
  const data = await res.json();
  console.log("Printing getCustomerCampaignsByStoreId response json : ", data);
  return data;
};

export const fetchCampaignByID = async (campaignId: string) => {
  console.log("fetchCampaignByID api call: ");
  const requestBody = {
    campaignId: campaignId,
  };

  console.log("fetchCampaignByID api call json request: ", JSON.stringify(requestBody));
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

  console.log("Printing fetchCampaignByID response : ", res);
  const data = await res.json();
  console.log("Printing fetchCampaignByID response json : ", data);
  return data;
};
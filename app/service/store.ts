import { getCurrentUserEmail } from "@/utils";

export const fetchStoreListByMerchant = async (useremail: string, page?: number, size?: number) => {
  console.log("Printing fetchStoreListByMerchant api call : ");
  let body = {}
  let email = await getCurrentUserEmail(useremail);
  if (email) {
    body = {
      email
    }
  } else throw new Error("Undefined email");

  const headers = {
    'Content-Type': 'application/json'
  };

  let url = ""
  if (page != undefined) {
    url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/store/getAllByUser?page=${page}&size=${size}`
  } else {
    url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/store/getAllByUser`
  }

  console.log("Printing fetchStoreListByMerchant api url : ", url);
  console.log("Printing fetchStoreListByMerchant api call json request : ", JSON.stringify(body));
  const res = await fetch(
    `${url}`, {
    headers: headers,
    method: 'POST',
    body: JSON.stringify(body)
  }
  )
  console.log("Printing fetchStoreListByMerchant api reaponse : ", res);
  const data = await res.json()
  console.log("Printing fetchStoreListByMerchant api reaponse json : ", data);
  return data;
}

export async function createStoreByMerchant(storeName: string, description: string, address1: string, address2: string, postalCode: string, country: string, contactNumber: string, image?: File, createdBy?: { email: string }) {
  let formData = new FormData();
  console.log("Printing createStoreByMerchant api call : ");
  const blob = new Blob([JSON.stringify({
    storeName,
    description,
    address1,
    address2,
    postalCode,
    contactNumber,
    country,
    createdBy
  })], {
    type: "application/json"
  })

  formData.append('store', blob);
  if (image != null) {
    formData.append("image", image);
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/store/create`,
      {
        method: 'POST',
        body: formData

      });

    console.log("Printing createStoreByMerchant api reaponse : ", response);
    const result = await response.json();
    console.log("Printing createStoreByMerchant api reaponse json : ", result);
    return result;
  } catch {
    return { success: false, message: "Fetch data failed to create store." };
  }
}


export async function updateStoreByMerchant(storeId: string, storeName: string, description: string, address1: string, address2: string, postalCode: string, country: string, contactNumber: string, image?: File, updatedBy?: { email: string }) {
  let formData = new FormData();
  console.log("Printing updateStoreByMerchant api call : ");
  const deleted = false
  const blob = new Blob([JSON.stringify({
    storeId,
    storeName,
    description,
    address1,
    address2,
    postalCode,
    contactNumber,
    country,
    updatedBy,
    deleted
  })], {
    type: "application/json"
  })

  formData.append('store', blob);
  if (image != null) {
    formData.append("image", image);
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/store/update`,
    {
      method: 'POST',
      body: formData

    });

  console.log("Printing updateStoreByMerchant api response : ", response);
  const result = await response.json();
  console.log("Printing updateStoreByMerchant api response json : ", result);
  return result;
}

//For Customer
export const fetchAllActiveStore = async ( page?: number, size?: number) => {
  console.log("Printing fetchAllActiveStore api call : ");
  let url = ""
  if (page != undefined) {
    url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/store/getAll?page=${page}&size=${size}`
  } else {
    url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/store/getAll`
  }

  console.log("Printing fetchAllActiveStore api url : ", url);
  try {
    const response = await fetch(`${url}`);
    if (!response.ok) {
      throw new Error('Failed to fetch all active store data from the API');
    }
    console.log("Printing fetchAllActiveStore api response : ", response);
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch data from the API');
  }
};
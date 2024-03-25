import { getCurrentUserEmail } from "@/utils";

export const fetchStoreListByMerchant = async (useremail: string) => {
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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/store/getAllByUser`, {
    headers: headers,
    method: 'POST',
    body: JSON.stringify(body)
  }
  )
  const data = await res.json()
  return data;
}

export async function createStoreByMerchant(storeName: string, description: string, address1: string, address2: string, postalCode: string, country: string, contactNumber: string, image?: File, createdBy?: { email: string }) {
  let formData = new FormData();

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

    const result = await response.json();
    return result;
  } catch {
    return { success: false, message: "Fetch data failed to create store." };
  }
}


export async function updateStoreByMerchant(storeId: string, storeName: string, description: string, address1: string, address2: string, postalCode: string, country: string, contactNumber: string, image?: File, updatedBy?: { email: string }) {
  let formData = new FormData();
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

  const result = await response.json();
  return result;
}

//For Customer
export const fetchAllActiveStore = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/store/getAll`);
    if (!response.ok) {
      throw new Error('Failed to fetch all active store data from the API');
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch data from the API');
  }
};
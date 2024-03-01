import { serverURL } from "@/utils";
import { getCurrentUser } from "../auth/getCurrentUser";

export const fetchStoreListByMerchant = async () => {
  const currentUser = await getCurrentUser();
  const email = currentUser && currentUser.email;
  const body = {
    email
  }
  const headers = {
    'Content-Type': 'application/json'
  };
  const res = await fetch(
    `${serverURL}/api/store/getAllByUser`, {
    cache: 'no-store',
    headers: headers,
    method: 'POST',
    body: JSON.stringify(body)
  }
  )
  const data = await res.json()
  return data;
}

export async function createStoreByMerchant( storeName: string, description: string, address1: string, address2: string, postalCode: string, country: string,contactNumber: string, image?: File, createdBy?: { email: string }) {
  let formData = new FormData();
  const currentUser = await getCurrentUser();
  console.log("Printing the currentUser at createStoreByMerchant api call : ", currentUser);
  
  const blob = new Blob([JSON.stringify({
      storeName,
      description,
      address1,
      address2,
      postalCode,
      country,
      createdBy
  })], {
      type: "application/json"
  })

  formData.append('store', blob);
  if (image != null) {
      formData.append("image", image);
  }

  const response = await fetch(
      `${serverURL}/api/store/create`,
      {
          method: 'POST',
          body: formData

      });

  const result = await response.json();
  return result;
}

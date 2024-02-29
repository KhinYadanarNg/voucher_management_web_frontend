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
    `${serverURL}/store/getAllByUser`, {
    cache: 'no-store',
    headers: headers,
    method: 'POST',
    body: JSON.stringify(body)
  }
  )
  const data = await res.json()
  return data;
}

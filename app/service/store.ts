const serverURL = process.env.NEXT_PUBLIC_APP_API_ENDPOINT;
export const fetchStoreListByMerchant = async () => {
  const res = await fetch(
    `${serverURL}/store/getAll`, {
      cache: 'no-store'
  }
  )
  const data = await res.json()
  return data;
}

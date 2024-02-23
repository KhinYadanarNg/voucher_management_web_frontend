export const fetchStoreListByMerchant = async () => {
  const res = await fetch(
    'http://localhost:8080/api/store/getAll', {
      cache: 'no-store'
  }
  )
  const data = await res.json()
  return data;
}

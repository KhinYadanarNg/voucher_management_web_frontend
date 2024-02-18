export const fetchStoreListByMerchant = async () => {
    const res = await fetch(
        'https://65d15d72ab7beba3d5e44f21.mockapi.io/api/v1/stores/Stores'
      )
      const data = await res.json()
      return data;
}

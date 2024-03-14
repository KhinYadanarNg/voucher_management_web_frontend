export const fetchCampaignsByMerchant = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/campaign/getAll`
  )
  const data = await res.json()
  return data;
}

export const createCampaign = async (description: string, startDate: string, endDate: string, condition1: string, condition2: string, numberOfVouchers: number, store: { storeId: string }, createdBy: { email: string }) => {
  const formData = new FormData();
  const blob = new Blob([JSON.stringify({
    description,
    startDate,
    endDate,
    condition1,
    condition2,
    numberOfVouchers,
    store,
    createdBy
  })], {
    type: "application/json"
  })

  formData.append('campaign', blob);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/campaign/create`,
    {
      method: 'POST',
      body: formData,
    });
  const data = await res.json()
  console.log(data)
  return data;
}
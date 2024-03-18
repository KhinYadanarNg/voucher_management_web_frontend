export const redeemCampaignsClaimVouchers = async (
  campaign: { campaignId: string },
  claimedBy: { email: string }
) => {
  const requestBody = {
    campaign,
    claimedBy,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/voucher/claim`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }
  );
  const data = await res.json();
  console.log("Checking the redeemCampaignsClaimVouchers response in API : ", data);
  return data;
};

export const fetchVouchersByCustomerEmail = async (useremail: string) => {

  const requestBody = {
    email: useremail,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/voucher/getByEmail`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }
  );
  
  const data = await res.json()
  return data;
};

export const fetchVouchersByCampaignId = async (campaignId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/voucher/getByCampaignId/${campaignId}`
  )
  const data = await res.json()
  return data;
};

export const getVoucherListByCustomer = async () => {
    const res = await fetch(
        'https://65d15d72ab7beba3d5e44f21.mockapi.io/api/v1/stores/vouchers'
      )
      const data = await res.json()
      return data;
};

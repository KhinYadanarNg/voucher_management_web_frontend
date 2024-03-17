export const redeemCampaignsClaimVouchers = async (
  campaign: { campaignId: string },
  claimedBy: { email: string }
) => {
  const formData = new FormData();

  const blob = new Blob(
    [
      JSON.stringify({
        campaign,
        claimedBy,
      }),
    ],
    {
      type: "application/json",
    }
  );

  formData.append("voucher", blob);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/voucher/claim`,
    {
      method: "POST",
      body: formData,
    }
  );
  const data = await res.json();
  return data;
};

export const fetchVouchersByCustomerEmail = async (useremail: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/voucher/getByEmail/${useremail}`
  )
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

export const redeemCampaignsClaimVouchers = async (
  campaign: { campaignId: string },
  claimedBy: { email: string }
) => {
  console.log("Printing redeemCampaignsClaimVouchers api call : ");
  const requestBody = {
    campaign,
    claimedBy,
  };

  console.log("Printing redeemCampaignsClaimVouchers api call json request : ", JSON.stringify(requestBody));
  try {
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
    console.log("Printing redeemCampaignsClaimVouchers api response : ", res);
    const data = await res.json();
    console.log("Checking the redeemCampaignsClaimVouchers json response in API : ", data);
    return data;
  } catch {
    return { success: false, message: "Fetch data failed to redeem campaign." };
  }

};

export const fetchVouchersByCustomerEmail = async (useremail: string) => {
  console.log("Printing fetchVouchersByCustomerEmail api call : ");
  const requestBody = {
    email: useremail,
  };

  console.log("Printing fetchVouchersByCustomerEmail api json request : ", JSON.stringify(requestBody));
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

  console.log("Printing fetchVouchersByCustomerEmail api response : ", res);
  const data = await res.json()
  console.log("Printing fetchVouchersByCustomerEmail api json response : ", data);
  return data;
};

export const consumeVoucherByCustomer = async (voucherId: string) => {
  console.log("Printing consumeVoucherByCustomer api call : ");
  const body = {
    voucherId
  }

  console.log("Printing consumeVoucherByCustomer api json request : ", JSON.stringify(body));
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/voucher/consume`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    console.log("Printing consumeVoucherByCustomer api  response : ", res);
    const data = await res.json();
    console.log("Printing consumeVoucherByCustomer api json  response : ", data);
    return data;
  } catch {
    return { success: false, message: "Fetch data failed to consume voucher." };
  }


}

export const fetchVouchersByCampaignId = async (campaignId: string) => {
  console.log("Printing fetchVouchersByCampaignId api call : ");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/voucher/getByCampaignId/${campaignId}`
  )
  console.log("Printing fetchVouchersByCampaignId api response : ", res);
  const data = await res.json()
  console.log("Printing fetchVouchersByCampaignId api json response : ", data);
  return data;
};

export const getVoucherListByCustomer = async () => {
  console.log("Printing getVoucherListByCustomer api call : ");
  const res = await fetch(
    'https://65d15d72ab7beba3d5e44f21.mockapi.io/api/v1/stores/vouchers'
  )
  console.log("Printing getVoucherListByCustomer api response : ", res);
  const data = await res.json()
  console.log("Printing getVoucherListByCustomer api json response : ", data);
  return data;
};

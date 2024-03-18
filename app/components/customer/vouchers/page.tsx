import { getCurrentUser } from "@/app/auth/getCurrentUser";
import { CampaignProps } from "@/type/campaign";
import React from "react";
import NullData from "../../common/NullData";
import CustomerVouchersList from "./CustomerVouchersList";
import { fetchVouchersByCustomerEmail } from "@/app/service/vouchers";
import Container from "../../Container";

const getVouchersByCustomerEmail = async (email: string) => {
  try {
    const vouchers = await fetchVouchersByCustomerEmail(email);
    return vouchers;
  } catch (error) {
    console.log(error);
  } finally {
  }
};

const RedeemCampaigns = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "CUSTOMER") {
    return <NullData title="Oops! Access denied" />;
  }

  const vouchers = await getVouchersByCustomerEmail(currentUser.email);

  return (
    <div>
      {vouchers ? (
          <Container>
            <CustomerVouchersList vouchers={vouchers.data} currentSessionUser={currentUser}  />
            {/* <VoucherList vouchers={vouchers.data} /> */}
          </Container>
      ) : (
        <NullData title="No vouchers record found" />
      )}
    </div>
  );
};

export default RedeemCampaigns;
import { getCurrentUser } from "@/app/auth/getCurrentUser";
import React  from "react";
import NullData from "../../common/NullData";
import CustomerVouchersList from "./CustomerVouchersList";
import { fetchVouchersByCustomerEmail } from "@/app/service/vouchers";
import Container from "../../Container";
import { pageSize } from "@/utils";
import Loading from "../../common/Loading";

const getVouchersByCustomerEmail = async (email: string, pageNumber: number, size: number) => {
  try {
    const vouchers = await fetchVouchersByCustomerEmail(email, pageNumber - 1, size);
    return vouchers;
  } catch (error) {
    console.log(error);
  } finally {
  }
};

const RedeemCampaigns = async ({ searchParams }: {
  searchParams: {
    page: string;
  }
}) => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "CUSTOMER") {
    return <NullData title="Oops! Access denied" />;
  }

  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
  const size = pageSize;
  const vouchers = await getVouchersByCustomerEmail(currentUser.email, page, size);

  return (
    <div>
      {vouchers ? (
        <Container>
          <CustomerVouchersList vouchers={vouchers.data} currentSessionUser={currentUser} pageNumber={page} totalRecord={vouchers.totalRecord} size={size} />
          {/* <VoucherList vouchers={vouchers.data} /> */}
        </Container>
      ) : (
        // <NullData title="Fetch data failed" />
        <Loading/>
      )}
    </div>
  );
};

export default RedeemCampaigns;

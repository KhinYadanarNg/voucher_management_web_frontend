import Heading from "@/app/components/common/Heading";
import { verifyUser } from "@/app/service/authentication";
import React from "react";

interface urlParams {
  verifyId: string;
}

const VerifyPage = async ({ params }: { params: urlParams }) => {
  const { verifyId } = params;
  let verifyResponse;

//   if (verifyId) {
//     verifyResponse = await verifyUser(verifyId);
//   } else {
//     console.error("Verify ID is not defined.");
//   }

  console.log("Reaching at verification page");
  console.log("This is verify id tokenParams : ", verifyId);
  return (
    <>
      <Heading title={`Activating your account - ${verifyId}`} center={true} />
    </>
  );
};

export default VerifyPage;

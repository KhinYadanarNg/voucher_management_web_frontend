'use client'
import Heading from "@/app/components/common/Heading";
import { verifyUser } from "@/app/service/authentication";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface urlParams {
  verifyId: string;
}

const VerifyPage = ({ params }: { params: urlParams }) => {
  const { verifyId } = params;
  const router = useRouter();

  useEffect(() => {
    const verify = async () => {
      try {
        if (verifyId) {
          const verifyResponse = await verifyUser(verifyId);
          console.error("Printing the verifyResponse: ", verifyResponse);
          if (verifyResponse.success) {
            router.push("/components/login");
          } else {
            console.error("Verification failed.");
          }
        } else {
          console.error("Verify ID is not defined.");
        }
      } catch (error) {
        console.error("Error verifying user:", error);
      }
    };

    verify();
  }, [verifyId, router]);

  return (
    <>
      <Heading title={`Loading ... `} center={true} />
    </>
  );
};

export default VerifyPage;

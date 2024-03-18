"use client";
import React from "react";
import { CampaignProps } from "@/type/campaign";
import Link from "next/link";
import VouchersSpentProgressBar from "./VouchersSpentProgressBar";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { redeemCampaignsClaimVouchers } from "@/app/service/vouchers";

export interface CampaignCardProps {
  campaign: CampaignProps;
  userRole: string;
  userEmail: string;
}
const Campaign = ({ campaign, userRole, userEmail }: CampaignCardProps) => {
  const router = useRouter();
  const encodedData = encodeURIComponent(JSON.stringify(campaign));

  let campaignId = campaign.campaignId

  //Redeem Campaigns to use Vouchers
  const redeemCampaigns = async () => {
    if (userRole === "CUSTOMER") {
    const campaign = { campaignId:  campaignId};
    const claimedBy = { email:  userEmail};

    try{
      const response = await redeemCampaignsClaimVouchers(campaign, claimedBy);

      if(response.success){
        toast.success("Your claim voucher is succesfully redeem.")
        router.push(`/components/customer/vouchers`);
      }else{
        toast.error("So sorry, your redeem is not success!")
      }

    }catch{
      toast.error("Failed at Redeem Vouchers");
    }


        
    } else {
      toast.error(
        "You are not logged in yet, please proceed to register or log-in!"
      );
      router.push(`/components/login`);
    }
  };

  return (
    <div className="border px-2 py-2">
      <h3 className="pb-2">{campaign.description}</h3>
      <VouchersSpentProgressBar
        totalVouchers={campaign.numberOfVouchers}
        noOfClaimedVouchers={campaign.numberOfClaimedVouchers}
      ></VouchersSpentProgressBar>
      <div className="border mt-3 px-2 grid grid-cols-2">
        <div className="border h-32 flex justify-center items-center bg-orange-500">
          {campaign.store.storeName}
        </div>
        <div>
          <p className="px-2 py-3">{campaign.tandc}</p>
        </div>
      </div>
      {/* <h3 className='mt-6'>{policy}</h3> */}

      {userRole !== "" ? (
        <div>
          {userRole === "MERCHANT" ? (
            <div>
              <Link
                className="border-2 hover:bg-orange-300 w-20 mt-3 float-right rounded-3xl text-center"
                href={`/components/merchant/campaigns/detail?campaign=${encodedData}`}
              >
                View
              </Link>
            </div>
          ) : (
            <button
              className="border-2 hover:bg-orange-300 w-20 h-8 my-3 float-right rounded-3xl"
              onClick={redeemCampaigns}
            >
              Redeem
            </button>
          )}
        </div>
      ) : (
        <div>
          <button
            className="border-2 hover:bg-orange-300 w-24 h-10 my-3 float-right rounded-3xl"
            onClick={redeemCampaigns}
          >
            Redeem
          </button>
        </div>
      )}
    </div>
  );
};
export default Campaign;

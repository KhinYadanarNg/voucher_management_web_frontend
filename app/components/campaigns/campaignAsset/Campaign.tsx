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
      const campaign = { campaignId: campaignId };
      const claimedBy = { email: userEmail };

      try {
        const response = await redeemCampaignsClaimVouchers(campaign, claimedBy);
        if (response.success) {
          alert(response.message);
          router.push(`/components/customer/vouchers`);
        } else {
          alert(response.message);
        }

      } catch {
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
      <div className="sub_card">
        <div className="sub_cardDetail">
          {campaign.store.storeName}
        </div>
        <div>
          <p className="card_padding">{campaign.tandc} <br /> ${campaign.amount} off</p><br />
        </div>
      </div>
      {/* <h3 className='mt-6'>{policy}</h3> */}

      {userRole !== "" ? (
        <div>
          {userRole === "MERCHANT" ? (
            <div>
              <Link
                className="campaigncard_btn text-center"
                href={`/components/merchant/campaigns/detail?campaign=${encodedData}`}
              >
                View
              </Link>
            </div>
          ) : (
            <button
              className="campaigncard_btn h-8"
              onClick={redeemCampaigns}
            >
              Redeem
            </button>
          )}
        </div>
      ) : (
        <div>
          <button
            className="campaigncard_btn h-8"
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

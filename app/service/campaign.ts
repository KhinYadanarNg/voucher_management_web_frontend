import { serverURL } from "@/utils";

export const fetchCampaignsByMerchant = async () => {
    const res = await fetch(
        `${serverURL}/api/campaign/getAll`
      )
      const data = await res.json()
      return data;
}
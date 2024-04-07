import React from 'react'
import Link from "next/link";
import { FeedProps } from '@/type/feed';


export const feedCloumns = [
  {

    key: "description",
    label: "Campaign Description"
  },
  {
    key: 'action',
    label: 'Action'
  }
];

export const renderFeedCell = (feed: FeedProps, columnKey: React.Key) => {

  const encodedCamapignData = encodeURIComponent(JSON.stringify(feed.campaign));
  const endcodeFeedStatus = encodeURIComponent(JSON.stringify(feed.read));

  switch (columnKey) {
    case 'action':
      return (
        <div className="relative flex items-center gap-2">
          <span className="cursor-pointer text-black">
            <Link href={`/components/customer/campaignDetailByFeed?campaign=${encodedCamapignData}&&feedStatus=${endcodeFeedStatus}`}>
              View Campaign Detail
            </Link>
          </span>
        </div>
      )
    case 'description':
      return (
        <div className="relative flex items-center gap-2">
          {feed.campaign.description}
        </div>
      )
    default:
      return
  }
};

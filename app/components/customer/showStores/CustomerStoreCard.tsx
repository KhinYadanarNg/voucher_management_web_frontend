"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from 'next/image'

type CustomerStoreCardProps = {
  data: any;
};

const CustomerStoreCard: React.FC<CustomerStoreCardProps> = ({ data }) => {
  const router = useRouter();

  return (
    <div
      onClick={() =>
        router.push(`/components/customer/campaigns/${data.storeId}`)
      }
      className="col-span-1
    cursor-pointer
    border-[1.2px]
    border-slate-200
    bg-slate-50
    rounded-sm
    p-2
    transition
    hover:scale-105
    text-center
    text-sm
    "
    >
      <div
        className="
      flex
      flex-col
      items-center
      w-full
      gap-1
      "
      >
        <Image src={data.image} alt={''} width={220} height={200} />
        {/* <div className="aspect-square overflow-hidden relative w-full">{data.storeName}</div> */}
      </div>
    </div>
  );
};

export default CustomerStoreCard;

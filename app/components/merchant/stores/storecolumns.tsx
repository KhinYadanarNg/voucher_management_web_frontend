import React from 'react'
import { StoreDetailProps } from "@/type/store";
import Link from "next/link";


export const storeColumns = [
  {
    key: "storeId",
    label: "Store ID",
  },
  {
    key: "storeName",
    label: "Store Name",
  },
  {
    key: "description",
    label: "Store Description",
  },
  {
    key: 'address',
    label: 'Address'
  },
  {
    key: 'action',
    label: 'Action'
  }
];

export const renderCell = (store: StoreDetailProps, columnKey: React.Key) => {
  const cellValue = store[columnKey as keyof StoreDetailProps];

  const encodedData = encodeURIComponent(JSON.stringify(store));

  switch (columnKey) {
    case 'action':
      return (
        <div className="relative flex items-center gap-2">
          <span className="cursor-pointer text-black">
            {/* <EyeIcon id={stringStoreNumber}  onClick={viewImageClicked}/> */}
            <Link href={`/components/merchant/stores/detail?store=${encodedData}`}>
              View Detail
            </Link>
          </span>
        </div>
      )
    default:
      return cellValue
  }
};

"use client";
import { fetchAllActiveStore } from "@/app/service/store";
import { StoreDetailProps, StoreTableCard } from "@/type/store";
import React, { useEffect, useState } from "react";
import Container from "../../Container";
import CustomerStoreCard from "./CustomerStoreCard";
import { toast } from "react-toastify";
import NullData from "../../common/NullData";
import PaginationLink from "../../common/PaginationLink";

const CustomerStoreLists = ({ stores, pageNumber, totalRecord, size }: StoreTableCard) => {
  // const [loading, setLoading] = useState(true);


  // if (loading)
  //   return (
  //     <div className="w-full h-[50vh] flex items-center justify-center text-xl md:text-2xl font-semibold">
  //       Loading...
  //     </div>
  //   );

  return (
    <div className="p-8">
      {stores && stores.length > 0 ? (
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {stores.map((store) => (
              <CustomerStoreCard data={store} key={store.storeId} />
            ))}
          </div>
          <PaginationLink pageNumber={pageNumber} totalRecord={totalRecord} size={size} path={'/components/customer/showStores'}></PaginationLink>
        </Container>
      ) : (
        <NullData title="There is no store list" />)}
    </div>
  );
};

export default CustomerStoreLists;

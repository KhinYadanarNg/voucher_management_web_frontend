"use client";
import { fetchAllActiveStore } from "@/app/service/store";
import { StoreDetailProps } from "@/type/store";
import React, { useEffect, useState } from "react";
import Container from "../../Container";
import CustomerStoreCard from "./CustomerStoreCard";
import { toast } from "react-toastify";
import NullData from "../../common/NullData";

const CustomerStoreLists = () => {
  const [activeStores, setActiveStores] = useState<StoreDetailProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAllActiveStore();
        const allActiveStores = response.data;
        console.log(
          "Printing the response from fetchAllActiveStore : ",
          allActiveStores
        );

        if (Array.isArray(allActiveStores)) {
          setActiveStores(allActiveStores);
        } else {
          throw new Error("Response is not an array");
        }
        setLoading(false);
      } catch (error: any) {
        console.error("Error fetching active stores:", error);
        setLoading(false);
        const errorMessage = error.message || "Unknown error";
        toast.error(`Error fetching active stores: ${errorMessage}`);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="w-full h-[50vh] flex items-center justify-center text-xl md:text-2xl font-semibold">
        Loading...
      </div>
    );

  return (
    <div className="p-8">
      {activeStores.length > 0 ? (
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {activeStores.map((store) => (
              <CustomerStoreCard data={store} key={store.storeId} />
            ))}
          </div>
        </Container>
      ) : (
        <NullData title="There is no store list" />)}
    </div>
  );
};

export default CustomerStoreLists;

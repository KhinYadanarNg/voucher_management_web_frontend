'use client';
import React from "react";

export default function StoreDetailPage({
    searchParams,
}: {
    searchParams: {
        storeId: string;
        storeName: string;
    };
}) {
    console.log(searchParams.storeId);
    return (
        <div>This is detail</div>
    );
}
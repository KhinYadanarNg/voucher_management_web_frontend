"use client";
import React from "react";
import Container from "../Container";
import SubNavItem from "./SubNavItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomerNavBar = () => {
  const pathname = usePathname();

  let basePath = pathname?.split("/").slice(0, 4).join("/");

  console.log("Checking the pathName : ", pathname);

  if (pathname === "/") {
    basePath = "/components/customer/campaigns";
  }

  return (
    <div className="top-0 w-full bg-[#F07D13] z-30 shadow-none">
      <Container>
        <div className="flex flex-row items-center justify-between md:justify-start overflow-auto flex-nowrap gap-2 md-gap-12">
          <Link href="/components/customer/showStores?page=1">
            <SubNavItem
              label={"Stores"}
              selected={pathname === "/components/customer/showStores"}
            />
          </Link>

          <Link href="/components/customer/campaigns?page=1">
            {pathname ? (
              <SubNavItem
                label={"Campaigns"}
                selected={
                  pathname.startsWith(
                    "/components/campaigns/campaignsByStoreIdName"
                  ) || basePath === "/components/customer/campaigns"
                }
              />
            ) : (
              <SubNavItem
                label={"Campaigns"}
                selected={basePath === "/components/customer/campaigns"}
              />
            )}
          </Link>

          <Link href="/components/customer/vouchers?page=1">
            <SubNavItem
              label={"My Vouchers"}
              selected={pathname === "/components/customer/vouchers"}
            />
          </Link>
          <Link href="/components/customer/feeds?page=1">
            <SubNavItem
              label={"Feeds"}
              selected={pathname === "/components/customer/feeds"}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CustomerNavBar;

'use client'
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UserSubscriptionContext } from "../(context)/UserSubscriptionContext";
import { InstantCreditUpdate } from "../(context)/InstantCreditUpdate";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [totalUse, setTotalUse] = useState<number>(0);
  const [userSubscription, setUserSubscription] = useState<boolean>(false);
  const [creditUpdate, setCreditUpdate] = useState<any>('');



  return (
      <TotalUsageContext.Provider value={{ totalUse, setTotalUse }}>
        <UserSubscriptionContext.Provider value={{ userSubscription, setUserSubscription }}>
          <InstantCreditUpdate.Provider value={{ creditUpdate, setCreditUpdate }}>
              <div className=" min-h-screen" >
                <div className="hidden md:block md:w-64 fixed">
                  <SideNav />
                </div>
                <div className="md:ml-64">
                  <Header />
                  {children}
                </div>
              </div>
          </InstantCreditUpdate.Provider>
        </UserSubscriptionContext.Provider>
      </TotalUsageContext.Provider>
  )
}

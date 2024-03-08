"use client";

import Cookies from "js-cookie";
import React, { useEffect } from "react";
import ProductImage from "../components/ProductImage";
import DetailDevice from "../components/DetailDevice";
import TodayTask from "../components/TodayTask";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Dashboard() {
  return (
    <>
      <div className="container" style={{ paddingTop: "10px" }}>
        <div className="row">
          <ProductImage />
          <DetailDevice />
        </div>
        <hr />
        <TodayTask />
      </div>
    </>
  );
}

export default Dashboard;

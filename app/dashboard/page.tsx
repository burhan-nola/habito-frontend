"use client";

import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import ProductImage from "../components/ProductImage";
import DetailDevice from "../components/DetailDevice";
import TodayTask from "../components/TodayTask";
import axios, { AxiosResponse } from "axios";
import Loader from "../components/Loader";

function Dashboard() {
  const session: any = Cookies.get("userData");
  const parseSession: any = JSON.parse(session);
  console.log(parseSession);
  const id = parseSession.deviceID;

  const [data, setData]: any = useState();
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const user = async () => {
      const cek: AxiosResponse = await axios.get(
        `https://habito-api.vercel.app/cek?id=${id}`
      );
      const userData: AxiosResponse = await axios.get(
        `https://habito-api.vercel.app/user-device?id=${id}`
      );
      setData(userData.data);
      isLoading(false);
    };
    user();
  }, []);
  console.log(data);

  return (
    <>
      <div className="container" style={{ paddingTop: "10px" }}>
        {loading ? (
          <div className="text-center">
            <Loader />
          </div>
        ) : (
          <>
            <div className="row">
              <ProductImage />
              <DetailDevice data={data} />
            </div>
            <hr />
            <TodayTask data={data} />
          </>
        )}
      </div>
    </>
  );
}

export default Dashboard;

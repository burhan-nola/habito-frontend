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
  const parseSession = session ? JSON.parse(session) : null;
  const id = parseSession ? parseSession.idDevice : null;

  const [data, setData]: any = useState();
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const user = async () => {
      const cek: AxiosResponse = await axios.get(
        `https://habito-api.vercel.app/cek?id=${id}`,
        { headers: { token: parseSession.token } }
      );
      setData(cek.data);
      isLoading(false);
    };
    user();
  }, []);

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

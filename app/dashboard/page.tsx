"use client";

import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import ProductImage from "../components/ProductImage";
import DetailDevice from "../components/DetailDevice";
import TodayTask from "../components/TodayTask";
import axios, { AxiosResponse } from "axios";
import Loader from "../components/Loader";
import Quotes from "../components/Quotes";
import TableHistory from "../components/TableHistory";

function Dashboard() {
  const session: any = Cookies.get("userData");
  const parseSession = session ? JSON.parse(session) : null;
  const id = parseSession ? parseSession.idDevice : null;

  const [data, setData]: any = useState();
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const user = async () => {
      const cek: AxiosResponse = await axios.get(
        `https://api.habito.id/cek?id=${id}`,
        { headers: { token: parseSession.token } }
      );
      setData(cek.data);
      isLoading(false);
    };
    const interval = setInterval(() => {
      user();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="container"
        style={{ paddingTop: "20px", paddingBottom: "50px" }}
      >
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
            <hr />
            <div className="row">
              <Quotes />
              <div className="col-md-6" style={{justifyContent: "center"}}>
                <h3 style={{ textAlign: "center" }}>History</h3>
                <TableHistory />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Dashboard;

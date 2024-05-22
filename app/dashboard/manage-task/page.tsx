"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios, { AxiosResponse } from "axios";
import { FaSquareCheck } from "react-icons/fa6";
import Link from "next/link";

interface Entry {
  status: boolean;
  date: string;
  _id: string;
}

interface Data {
  red: Entry[];
  green: Entry[];
  blue: Entry[];
  yellow: Entry[];
  _id: string;
}

const DataTable: React.FC = () => {
  const session = Cookies.get("userData");
  const parseSession = session ? JSON.parse(session) : null;
  const id = parseSession ? parseSession.idDevice : null;

  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const lightStatus = async () => {
      try {
        const status: AxiosResponse<Data> = await axios.get(
          `https://api.habito.id/filter-light?id=${id}`
        );
        setData(status.data);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    lightStatus();
  }, [id]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const abortTask = (color: string) => {
    const res = axios.get(
      `https://api.habito.id/abort-task?id=${id}&color=${color}`
    );
    // console.log(res);
    window.location.reload();
  };
  return (
    <>
      <div className="container">
        <table className="text-center table table-striped">
          <thead>
            <tr>
              <th>Task</th>
              <th>Time</th>
              <th>Today Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="/icons/check/red.png" alt="" height={30} width={30} />
              </td>
              <td>
                {data && data.red.length > 0 && data.red[0].status == true
                  ? JSON.stringify(data.red[0].date).split("T")[1].split(".")[0]
                  : ""}
              </td>
              <td>
                {data && data.red.length > 0 && data.red[0].status == true ? (
                  <FaSquareCheck />
                ) : (
                  ""
                )}
              </td>
              <td>
                {data && data.red.length > 0 && data.red[0].status == true ? (
                  <img
                    src="/delete.svg"
                    alt=""
                    height={20}
                    width={20}
                    onClick={() => abortTask("red")}
                  />
                ) : (
                  ""
                )}
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="/icons/check/green.png"
                  alt=""
                  height={30}
                  width={30}
                />
              </td>
              <td>
                {data && data.green.length > 0 && data.green[0].status == true
                  ? JSON.stringify(data.green[0].date)
                      .split("T")[1]
                      .split(".")[0]
                  : ""}
              </td>
              <td>
                {data && data.green.length > 0 && data.green[0].status ? (
                  <FaSquareCheck />
                ) : (
                  ""
                )}
              </td>
              <td>
                {data &&
                data.green.length > 0 &&
                data.green[0].status == true ? (
                  <img
                    src="/delete.svg"
                    alt=""
                    height={20}
                    width={20}
                    onClick={() => abortTask("green")}
                  />
                ) : (
                  ""
                )}
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="/icons/check/blue.png"
                  alt=""
                  height={30}
                  width={30}
                />
              </td>
              <td>
                {data && data.blue.length > 0 && data.blue[0].status == true
                  ? JSON.stringify(data.blue[0].date)
                      .split("T")[1]
                      .split(".")[0]
                  : ""}
              </td>
              <td>
                {data && data.blue.length > 0 && data.blue[0].status == true ? (
                  <FaSquareCheck />
                ) : (
                  ""
                )}
              </td>
              <td>
                {data && data.blue.length > 0 && data.blue[0].status == true ? (
                  <img
                    src="/delete.svg"
                    alt=""
                    height={20}
                    width={20}
                    onClick={() => abortTask("blue")}
                  />
                ) : (
                  ""
                )}
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="/icons/check/yellow.png"
                  alt=""
                  height={30}
                  width={30}
                />
              </td>
              <td>
                {data && data.yellow.length > 0 && data.yellow[0].status == true
                  ? JSON.stringify(data.yellow[0].date)
                      .split("T")[1]
                      .split(".")[0]
                  : ""}
              </td>
              <td>
                {data &&
                data.yellow.length > 0 &&
                data.yellow[0].status == true ? (
                  <FaSquareCheck />
                ) : (
                  ""
                )}
              </td>
              <td>
                {data &&
                data.yellow.length > 0 &&
                data.yellow[0].status == true ? (
                  <img
                    src="/delete.svg"
                    alt=""
                    height={20}
                    width={20}
                    onClick={() => abortTask("yellow")}
                  />
                ) : (
                  ""
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataTable;

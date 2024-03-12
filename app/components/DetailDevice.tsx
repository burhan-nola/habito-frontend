"use client";

import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface ChildProps {
  data: any;
}
const DetailDevice: React.FC<ChildProps> = ({ data }) => {
  return (
    <div className="col-md-6">
      <h3>Detail Device</h3>
      <table className="table">
        <tbody>
          <tr>
            <td>Device ID</td>
            <td>: {data ? data.idDevice : null}</td>
          </tr>
          <tr>
            <td>Owner</td>
            <td>: {data ? data.owner : null}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>
              : {data ? (data.status == false ? "offline" : "online") : null}
            </td>
          </tr>
          <tr>
            <td>Last Update</td>
            <td>: {data ? data.lastUpdate : null}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailDevice;

import React from "react";

interface ChildProps {
  data: any;
}
const DetailDevice: React.FC<ChildProps> = ({ data }) => {
  console.log(data);
  return (
    <div className="col-md-6">
      <h3>Detail Device</h3>
      <table className="table">
        <tbody>
          <tr>
            <td width="30%">Device ID</td>
            <td>: {data ? data.idDevice : null}</td>
          </tr>
          <tr>
            <td>Owner</td>
            <td>: {data ? data.owner : null}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>
              :{" "}
              {data
                ? data.status == false
                  ? // <img src="./next.svg" width="10%" />
                    "offline"
                  : "online"
                : null}
            </td>
          </tr>
          {/* <tr>
            <td>Last Update</td>
            <td>: {data ? data.lastUpdate : null}</td>
          </tr> */}
          <tr>
            <td>SSID</td>
            <td>: {data ? (data.logs.SSID ? data.logs.SSID : "-") : null}</td>
          </tr>
          <tr>
            <td>IP Address</td>
            <td>
              :{" "}
              {data ? (data.logs.ipAddress ? data.logs.ipAddress : "-") : null}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailDevice;

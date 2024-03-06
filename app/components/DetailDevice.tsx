import React from "react";

function DetailDevice() {
  return (
    <div className="col-md-6">
      <h3>Detail Device</h3>
      <table className="table">
        <tbody>
          <tr>
            <td>Device ID</td>
            <td>: habito_001</td>
          </tr>
          <tr>
            <td>Owner</td>
            <td>: Habito Team</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>: offline</td>
          </tr>
          <tr>
            <td>Last Update</td>
            <td>: 00-00-0000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DetailDevice;

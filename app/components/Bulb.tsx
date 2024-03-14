import React from "react";
import style from "../css/bulbTask.module.css";

interface BulbProps {
  color: string[];
  status: boolean;
  task: string;
}
const Bulb: React.FC<BulbProps> = ({ color, status, task }) => {
  // console.log(status);
  return (
    <>
      <div
        className={`${style.flexcenter} col-6 col-md-3`}
        style={{ paddingBottom: "50px" }}
      >
        <table className="text-center">
          <tbody>
            <tr>
              <td>
                <img
                  src={`./icons/${status ? "check" : "cross"}/${color}.png`}
                  alt=""
                  width="50%"
                  className={style.imgcenter}
                />
              </td>
            </tr>
            <tr>
              <td>
                <h5>{task}</h5>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Bulb;

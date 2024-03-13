import React from "react";
import style from "../css/bulbTask.module.css";

interface BulbProps {
  color: string[];
  status: any;
}
const Bulb: React.FC<BulbProps> = ({ color, status }) => {
  console.log(status);
  return (
    <div
      className={`${style.flexcenter} col-6 col-md-3`}
      style={{ paddingBottom: "50px" }}
    >
      <img
        src={`./icons/${status ? "check" : "cross"}/${color}.png`}
        alt=""
        width="50%"
        className={style.imgcenter}
      />
    </div>
  );
};

export default Bulb;

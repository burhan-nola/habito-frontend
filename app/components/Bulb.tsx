import React from "react";
import BulbImage from "./BulbImage";
import style from "../css/bulbTask.module.css";
import Image from "next/image";

interface BulbProps {
  color: string[];
  status: boolean;
}
const Bulb: React.FC<BulbProps> = ({ color, status }) => {
  return (
    <div
      className={`${style.flexcenter} col-xs`}
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

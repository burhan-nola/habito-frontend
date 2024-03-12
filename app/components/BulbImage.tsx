import React from "react";
import style from "../css/bulbTask.module.css";

interface BulbProps {
  color: string[];
  status: boolean;
}

const BulbImage: React.FC<BulbProps> = ({ color, status }) => {
  return (
    <img
      src={`./icons/${status ? "check" : "cross"}/${color}.png`}
      alt=""
      width="50%"
      className={style.imgcenter}
    />
  );
};

export default BulbImage;

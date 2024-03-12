"use client";
import React, { useEffect, useState } from "react";
import style from "../css/bulbTask.module.css";
import RedBulbCheck from "./bulb/check/RedBulbCheck";
import GreenBulbCheck from "./bulb/check/GreenBulbCheck";
import BlueBulbCheck from "./bulb/check/BlueBulbCheck";
import YellowBulbCheck from "./bulb/check/YellowBulbCheck";
import RedBulbCross from "./bulb/cross/RedBulbCross";
import GreenBulbCross from "./bulb/cross/GreenBulbCross";
import BlueBulbCross from "./bulb/cross/BlueBulbCross";
import YellowBulbCross from "./bulb/cross/YellowBulbCross";
import axios, { AxiosResponse } from "axios";
import Bulb from "./Bulb";

interface ChildProps {
  data: any;
}

const Task: React.FC<ChildProps> = ({ data }) => {
  console.log(data);
  const lightArr = ["Red", "Green", "Blue", "Yellow"];
  const [light, setLight] = useState([]);

  useEffect(() => {
    const lightStatus = async () => {
      const status: AxiosResponse = await axios.get(
        `https://habito-api.vercel.app/light-status?id=${data.idDevice}`
      );
      setLight(status.data);
    };
    lightStatus();
  }, []);

  const colorList: any = Object.entries(light).filter(
    ([key]) => key !== "id" && key !== "$basePath"
  );

  return (
    <>
      <div className="row">
        {colorList.map(([color, colorData]: [color: any, colorData: any]) => (
          <Bulb color={color} status={colorData.status} key={color} />
        ))}
      </div>
    </>
  );
};

export default Task;

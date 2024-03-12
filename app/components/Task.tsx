"use client";
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Bulb from "./Bulb";

interface ChildProps {
  data: any;
}

const Task: React.FC<ChildProps> = ({ data }) => {
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

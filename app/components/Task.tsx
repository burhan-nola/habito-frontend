"use client";
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Bulb from "./Bulb";

interface ChildProps {
  data: any;
}

const Task: React.FC<ChildProps> = ({ data }) => {
  const [light, setLight]: any = useState([]);

  useEffect(() => {
    const lightStatus = async () => {
      const status: AxiosResponse = await axios.get(
        `https://habito-api.vercel.app/filter-light?id=${data.idDevice}`
      );
      setLight(status.data);
    };
    const interval = setInterval(() => {
      lightStatus();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const newData: any = {
    red: { status: false },
    green: { status: false },
    blue: { status: false },
    yellow: { status: false },
  };

  for (const key in light) {
    // If the value is an array and not empty, take the first element
    if (Array.isArray(light[key]) && light[key].length > 0) {
      newData[key] = { ...light[key][light[key].length - 1] }; // Copy the first element to newData
    }
  }
  // Iterate through each property in the data object

  console.log(newData);
  const colorList: any = Object.entries(newData).filter(
    ([key]) => key !== "id" && key !== "$basePath"
  );
  console.log(colorList);
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

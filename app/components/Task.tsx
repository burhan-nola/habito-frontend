"use client";
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Bulb from "./Bulb";
import Loader from "./Loader";

interface ChildProps {
  data: any;
}

const Task: React.FC<ChildProps> = ({ data }) => {
  const [light, setLight]: any = useState([]);
  const [detailLight, setDetailLight] = useState({});
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const lightStatus = async () => {
      const status: AxiosResponse = await axios.get(
        `https://api.habito.id/filter-light?id=${data.idDevice}`
      );
      setLight(status.data);
      isLoading(false);
    };

    const interval = setInterval(() => {
      lightStatus();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const detail = async () => {
      const res: AxiosResponse = await axios.get(
        `https://api.habito.id/detail-task?id=${data.idDevice}`
      );
      setDetailLight(res.data);
    };
    detail();
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

  interface ColorData {
    status: boolean;
    date: string;
    _id: string;
  }

  interface DetailLight {
    [key: string]: string;
  }

  function mergeData(
    newData: Record<string, ColorData>,
    detailLight: any
  ): Record<string, ColorData & { task: string }> {
    const mergedData: Record<string, ColorData & { task: string }> = {};
    for (const color in newData) {
      if (newData.hasOwnProperty(color)) {
        mergedData[color] = {
          ...newData[color],
          task: detailLight[color],
        };
      }
    }
    return mergedData;
  }

  // Menggabungkan data
  const mergedData = mergeData(newData, detailLight);
  const colorList: any = Object.entries(mergedData).filter(
    ([key]) => key !== "id" && key !== "$basePath"
  );

  return (
    <>
      <div className="row">
        {loading ? (
          <div className="text-center">
            <Loader />
          </div>
        ) : (
          colorList.map(([color, colorData]: [color: any, colorData: any]) => (
            <>
              <Bulb
                color={color}
                status={colorData.status}
                key={color}
                task={colorData.task}
              />
            </>
          ))
        )}
      </div>
    </>
  );
};

export default Task;

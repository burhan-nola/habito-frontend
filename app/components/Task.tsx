import React from "react";
import style from "../css/bulbTask.module.css";
import RedBulbCheck from "./bulb/check/RedBulbCheck";
import GreenBulbCheck from "./bulb/check/GreenBulbCheck";
import BlueBulbCheck from "./bulb/check/BlueBulbCheck";
import YellowBulbCheck from "./bulb/check/YellowBulbCheck";
import RedBulbCross from "./bulb/cross/RedBulbCross";
import GreenBulbCross from "./bulb/cross/GreenBulbCross";
import BlueBulbCross from "./bulb/cross/BlueBulbCross";
import YellowBulbCross from "./bulb/cross/YellowBulbCross";

interface ChildProps {
  data: any;
}

const Task: React.FC<ChildProps> = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="row">
        <div className={`${style.flexcenter} col col-xs-6`}>
          {data.light.red.status == false ? <RedBulbCross /> : <RedBulbCheck />}
        </div>
        <div className={`${style.flexcenter} col col-xs-6`}>
          {data.light.green.status == false ? (
            <GreenBulbCross />
          ) : (
            <GreenBulbCheck />
          )}
        </div>
        <div className={`${style.flexcenter} col col-xs-6`}>
          {data.light.blue.status == false ? (
            <BlueBulbCross />
          ) : (
            <BlueBulbCheck />
          )}
        </div>
        <div className={`${style.flexcenter} col col-xs-6`}>
          {data.light.yellow.status == false ? (
            <YellowBulbCross />
          ) : (
            <YellowBulbCheck />
          )}
        </div>
      </div>
    </>
  );
};

export default Task;

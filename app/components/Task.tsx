import React from "react";
import style from "../css/bulbTask.module.css";
import RedBulbCheck from "./bulb/check/RedBulbCheck";
import GreenBulbCheck from "./bulb/check/GreenBulbCheck";
import BlueBulbCheck from "./bulb/check/BlueBulbCheck";
import YellowBulbCheck from "./bulb/check/YellowBulbCheck";

function Task() {
  return (
    <>
      <div className="row">
        <div className={`${style.flexcenter} col col-xs-6`}>
          <RedBulbCheck />
        </div>
        <div className={`${style.flexcenter} col col-xs-6`}>
          <GreenBulbCheck />
        </div>
        <div className={`${style.flexcenter} col col-xs-6`}>
          <BlueBulbCheck />
        </div>
        <div className={`${style.flexcenter} col col-xs-6`}>
          <YellowBulbCheck />
        </div>
      </div>
    </>
  );
}

export default Task;

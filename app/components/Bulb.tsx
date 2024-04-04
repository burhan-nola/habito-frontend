import React from "react";
import style from "../css/bulbTask.module.css";
import styleCard from "../css/cardTask.module.css";

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
        <div className={`${styleCard.customCard} text-center`}>
          <img
            src={`./icons/${status ? "check" : "cross"}/${color}.png`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <br />
            <h5 className="card-title">Detail Task</h5>
            <p className="card-text">{task}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bulb;

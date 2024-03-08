import React from "react";
import Task from "./Task";

interface ChildProps {
  data: any;
}
const TodayTask: React.FC<ChildProps> = ({ data }) => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Today Task</h2>
      <Task data={data} />
    </>
  );
};

export default TodayTask;

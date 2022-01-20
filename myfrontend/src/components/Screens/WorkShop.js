import React from "react";
import Header from "../Header";
import Calendar from "./Calendar";
const WorkShop = () => {
  
  return (
    <>
      <Header />
      <div className="flex">

        <div className="calendar">
        <Calendar />
        </div>
      </div>
    </>
  );
};

export default WorkShop;

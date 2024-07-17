import React from "react";

const MachineDetailedInfo = (props) => {
  const machineList = props.machineList;
  if (!machineList) {
    return <div></div>;
  }
  return (
    <div className="overflow-scroll machine-details-container">
      <div
  style={{margin: "auto",width: "20%"}}
      >
        Machine Detailed Info {props.filterType}
      </div>
      {machineList.map((machineInfo) => (
        <div
          className="border border-solid border-gray-200 h-60 text-left p-5"
          key={machineInfo.id}
        >
          <div className="text-2xl">{machineInfo.name}</div>
          <div>Health Status : {machineInfo.health}</div>
          <div>Current Status : {machineInfo.status}</div>
          <div>Latest Report : {machineInfo.latestReport}</div>
          <div> Detailed Description : Some info </div>
        </div>
      ))}
    </div>
  );
};

export default MachineDetailedInfo;

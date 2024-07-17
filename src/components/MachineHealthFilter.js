import React from "react";

const MachineHealthFilter = (props) => {
    const {machinesReport,filterMachineList} = {...props}
    const inAcceptableState = machinesReport.filter(machine => machine.health.toLowerCase() === "acceptable").length;
    const inMonitorState = machinesReport.filter(machine => machine.health.toLowerCase() === "monitor").length;
    const inAlarmState = machinesReport.filter(machine => machine.health.toLowerCase() === "alarm").length;
    const inDangerState = machinesReport.filter(machine => machine.health.toLowerCase() === "danger").length;
    const inUnderMaintainanceState = machinesReport.filter(machine => machine.status.toLowerCase() === "under-maintainance").length;
  return (
    <div className="machine-filter-container px-5">
      <h2 className="text-3xl">Compare Machines</h2>
      <div className="filter-button-container py-6">
        <button
          type="button"
          onClick={()=>filterMachineList("acceptable")}
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Acceptable ({inAcceptableState})
        </button>
        <button
          type="button"
          onClick={()=>filterMachineList("monitor")}
          className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Monitor ({inMonitorState})
        </button>
        <button
          type="button"
          onClick={()=>filterMachineList("alarm")}
          className="text-white bg-orange-600 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900"
        >
          Alarm ({inAlarmState})
        </button>
        <button
          type="button"
          onClick={()=>filterMachineList("danger")}
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Danger ({inDangerState})
        </button>

        <button
          type="button"
          onClick={()=>filterMachineList("noStatus")}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          No Status ({inUnderMaintainanceState})
        </button>
        <button
          type="button"
          onClick={()=>filterMachineList("")}
          className="text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default MachineHealthFilter;

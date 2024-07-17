import React, { useState } from 'react'
import MachineHealthFilter from './MachineHealthFilter'
import MachineDetailedInfo from './MachineDetailedInfo'
// import report from "../utils/machineStatus.json"
import useGetMachineReport from "../utils/useGetMachineReport"
const MonitorManchines = () => {
    const report = useGetMachineReport()
    const [filteredList,setFilteredList] = useState(report)
    const [filterType,setFilterType] = useState("")
    
    // filter machines based on selected filter from report
    const filterMachineList = (filterInput) => {
        setFilterType(filterInput)
        if(filterInput === "noStatus"){
           const mactchedList = report.filter(machine => machine.status.toLowerCase() === "under-maintainance")
           setFilteredList(mactchedList)
        }
        else if(filterInput){
            const mactchedList = report.filter(machine => machine.health.toLowerCase() === filterInput)
            setFilteredList(mactchedList) 
        }else{
            setFilteredList(report)
        }
    }

    if(!report){
        return <div>Loading...</div>
    }
    else{
  return (
    <div className='monitor-machines'>
        <MachineHealthFilter machinesReport={report} filterMachineList={filterMachineList}/>
        <MachineDetailedInfo machineList = {Array.isArray(filteredList) ? filteredList : report} filterType={filterType}/>
    </div>
  )
}
}

export default MonitorManchines
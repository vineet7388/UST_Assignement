import { useState,useEffect } from "react";
const useGetMachineReport = () => {
  const [reportInfo, setReportInfo] = useState(null);

  // fetchdata
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/c/b2e4-a00b-4d36-a6aa");
    const json = await data.json();
    setReportInfo(json.machines);
  };

  return reportInfo;
};

export default useGetMachineReport;
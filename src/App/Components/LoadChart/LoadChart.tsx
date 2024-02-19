import { useState } from "react";
import { ISingleProcess } from "../../Interfaces/PcInterface";
import { MyGaugeChart } from "../Charts/GaugeChart";
import { LineChart } from "../lineChart/LineChart";

interface IProps {
  snapchatData: ISingleProcess[] | undefined;
  posNumber: number;
}

export const LoadChart = (props: IProps) => {
  const WorkingSetSize = () => {
    if (props.snapchatData) {
      const totalWorkingSetSize = props.snapchatData.reduce(
        (total, process) => {
          return total + (process.WorkingSetSize || 0);
        },
        0
      );
      return (totalWorkingSetSize / (1024 * 1024)).toFixed(2);
    } else return "0";
  };



  const cpu = () => {
    if (props.snapchatData) {
      const totalCpuUsage = props.snapchatData.reduce((total, process) => {
        return total + (process.cpuUsage || 0);
      }, 0);
      return (totalCpuUsage / (1024 * 1024)).toFixed();
    } else return "0";
  };

  const handleMaxMemory = () => {
    if (!props.snapchatData) {
      return null; // return null or any appropriate fallback if snapchatData is undefined
    }

    let localMaxMemory;
    if (props.posNumber === 1) {
      localMaxMemory =
        JSON.parse(localStorage.getItem("maxMemory1") || "[]") || [];
    } else {
      localMaxMemory =
        JSON.parse(localStorage.getItem("maxMemory2") || "[]") || [];
    }

    const totalWorkingSetSize = props.snapchatData.reduce((total, process) => {
      return total + (process.WorkingSetSize || 0);
    }, 0);

    let memory = (totalWorkingSetSize / (1024 * 1024)).toFixed(2);

    if (!localMaxMemory.includes(parseInt(memory))) {
      localMaxMemory.push(parseInt(memory));
      localStorage.setItem(
        `maxMemory${props.posNumber}`,
        JSON.stringify(localMaxMemory)
      );
    }

    const maxNumber = Math.max(...localMaxMemory);

    return (
      <div className="maxMemory min">
        <div>Max Used </div>
        <div className="maxMemory-value">{maxNumber} MB</div>
      </div>
    );
  };


  

  return (
    <div>
      <div className="speed-chart">
        <div className="my-charte-div-content">
          <h3>Memory info {WorkingSetSize()} </h3>
          <div className="my-charte-div">
            {props.snapchatData ? (
              <MyGaugeChart value={WorkingSetSize()} min={0} max={8000} />
            ) : (
              ""
            )}
          </div>
          <div>{handleMaxMemory()}</div>
        </div>
        <div className="my-charte-div-content">
          <h3>CPU info {cpu()} </h3>
          <div className="my-charte-div">
            {props.snapchatData ? (
              <MyGaugeChart value={cpu()} min={0} max={100} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="speed-chart">
          <div>
          <LineChart posNumber={props.posNumber} />
          <span className="line-chart-lable">Memory Usage</span>
          </div>
      </div>
    </div>
  );
};

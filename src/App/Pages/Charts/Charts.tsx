

import { PosInfo } from "../../Components/Posinfo/PosInfo";
import { LoadChart } from "../../Components/LoadChart/LoadChart";
import { useGetAllData } from "../../Hooks/useGetAllData";
import "./charts.scss";

// const socket = io("http://10.0.120.98:3005"); // Replace with your WebSocket server URL

export const  Charts = () =>  {
  const posOneprocessData = "http://10.0.120.218:3000/processData";
  const posOneOsDataURL = "http://10.0.120.218:3000/osInfo";

  const posTwoprocessData = "http://10.0.120.116:3000/processData";
  const posTwoOsDataURL = "http://10.0.120.116:3000/osInfo";

  const { snapchatData: snapchatDataOne, systemData: systemDataOne } =
    useGetAllData({
      processDataURL: posOneprocessData,
      osInfoURL: posOneOsDataURL,
    });

  const { snapchatData: snapchatDataTwo, systemData: systemDataTwo } =
    useGetAllData({
      processDataURL: posTwoprocessData,
      osInfoURL: posTwoOsDataURL,
    });

  // const { snapchatData: snapchatDataTwo } =
  // useGetJava({
  //   processDataURL: posTwoprocessData,

  // });

  console.log(snapchatDataOne)

  return (
    <div className="chart-div">
      <div className="chart-div-content">
        <div className="pos-content">
          <div className="pos-content-div">
            <h2>POS 1</h2>

            {systemDataOne !== undefined ? (
              <div>
                <PosInfo systemData={systemDataOne} />
                <LoadChart snapchatData={snapchatDataOne} posNumber={1}/>
                
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="pos-content">
          <div className="pos-content-div">
            <h2>POS 2</h2>

            {snapchatDataTwo !== undefined ? (
              <div>
                <PosInfo systemData={systemDataTwo} />
                <LoadChart snapchatData={snapchatDataTwo} posNumber={2}/>
                
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


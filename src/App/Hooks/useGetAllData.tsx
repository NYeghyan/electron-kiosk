import { useEffect, useState } from "react";
import { ISingleProcess, IosInfo } from "../Interfaces/PcInterface";

interface IProps {
  processDataURL: string;
  osInfoURL: string;
}

export const useGetAllData = (props: IProps) => {
  const [snapchatData, setSnapchatData] = useState<ISingleProcess[] | undefined>(
    undefined
  );
  const [systemData, setSystemData] = useState<IosInfo | undefined>(undefined);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [processResponse, pcResponse] = await Promise.all([
          fetch(props.processDataURL),
          fetch(props.osInfoURL),
        ]);
        const processData = await processResponse.json();
        const data = processData.processes.filter(
          (process: ISingleProcess) => process.Caption === "java.exe"
        )
        console.log(data)
        if(data.length > 0) {
          setSnapchatData(data)
        } else {
          setSnapchatData(
            processData.processes.filter(
              (process: ISingleProcess) => process.Caption === "javaw.exe"
            )
          );
        }
   
        const pcData = await pcResponse.json();
        setSystemData(pcData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAllData();

    const intervalId = setInterval(fetchAllData, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [props.processDataURL, props.osInfoURL]);

  return {
    snapchatData,
    systemData,
  };
};

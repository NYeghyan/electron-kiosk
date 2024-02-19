import { useEffect, useState } from "react";
import { ISingleProcess } from "../Interfaces/PcInterface";

interface IProps {
  processDataURL: string;
}

export const useGetJava = (props: IProps) => {
  const [snapchatData, setSnapchatData] = useState<ISingleProcess[] | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [processResponse] = await Promise.all([
          fetch(props.processDataURL),
        ]);

        const processData = await processResponse.json();
        setSnapchatData(
          processData.processes.filter(
            (process: ISingleProcess) => process.Caption === 'java.exe'
          )
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAllData();

    const intervalId = setInterval(fetchAllData, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [props.processDataURL]);

  return {
    snapchatData
  };
};

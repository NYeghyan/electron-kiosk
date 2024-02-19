import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFileData } from "../../Redax/futures/fileSlice";


const useGetFiels = (path: string) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`"${path}"`).then(response => response.json()).then(data => {dispatch(setFileData(data))})
  }, []);
};

export default useGetFiels;

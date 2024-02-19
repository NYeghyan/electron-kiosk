import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Link } from "../../assets/helper";

import { setFolderState } from "../../Redax/futures/folderSlice";

const useGetFolders = () => {
  const dispatch = useDispatch();




  useEffect(() => {
    // Function to fetch data
    const fetchData = () => {
      fetch(Link.googleDriveLink, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // You can include additional headers if needed
        },
      })
      .then(response => response.json())
      .then(data => {
        dispatch(setFolderState(data));
      });
    };

    fetchData();
  
    const intervalId = setInterval(fetchData, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [dispatch]); // Added dispatch to the dependency array

};


export default useGetFolders;

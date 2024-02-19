import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


interface IData {
  message : string
}


export const Home = () => {
  const [data,setData] = useState<IData | undefined>(undefined)




  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };

  useEffect(() =>{
    fetch('http://localhost:3001/api')
  .then(response => response.json())
  .then(data => setData(data));
  },[])


  return (
    <div>
      <div>Home Page</div>
      {data ?  data.message  : "nodata"}
      <div>
        <button onClick={() => handleClick()}>Click me</button>
      </div>
    </div>
  );
};

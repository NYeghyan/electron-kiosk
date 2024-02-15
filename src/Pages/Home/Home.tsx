import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [data,setData] = useState('')

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };

  useEffect(() =>{
    fetch('http://localhost:3001/api')
  .then(response => response.json())
  .then(data => setData(data));

  })


  return (
    <div>
      <div>Home Page</div>
      {data.length > 0 ?  data  : "nodata"}
      <div>
        <button onClick={() => handleClick()}>Click me</button>
      </div>
    </div>
  );
};

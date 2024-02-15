import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };
  return (
    <div>
      <div>Home Page</div>
      <div>
        <button onClick={() => handleClick()}>Click me</button>
      </div>
    </div>
  );
};

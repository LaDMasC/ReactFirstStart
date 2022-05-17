import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onClickGoCounter = () => {
    navigate("/counter");
  };

  return (
    <div>
      <h1>홈화면</h1>
      <p onClick={onClickGoCounter}>go Counter!!</p>
    </div>
  );
};

export default Home;

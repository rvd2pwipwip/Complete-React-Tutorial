import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("dude");

  const handleClick = () => {
    setName("dudette");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={(e) => handleClick()}>Click me</button>
    </div>
  );
};

export default Home;

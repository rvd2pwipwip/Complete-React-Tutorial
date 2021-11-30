const Home = () => {
  const handleClick = (e, name) => {
    console.log(e.target, `hello, ${name}`);
  };
  const name = "dude"

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={(e) => handleClick(e, name)}>Click me</button>
    </div>
  );
};

export default Home;

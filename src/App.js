import { useEffect } from "react";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return <h1>APP</h1>;
};

export default App;

import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

const Error = () => (
  <div className="error">
    <h1>Error...</h1>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((tours) => {
        setTours(tours.parse());
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {isLoading ? <Loading /> : isError ? <Error /> : <Tours tours={tours} />}
    </>
  );
}

export default App;

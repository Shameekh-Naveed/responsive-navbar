import React, { useState, useEffect } from "react";

const WeatherData = () => {
  const [data, setData] = useState([]);

  // console.log(process.env.REACT_APP_API_KEY)

  // Example POST method implementation:
  const getData = async () => {
    let url =
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=NewYorkCity/";
    // Default options are marked with *
    const response = await fetch(url, {
      //   method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: "no-cors", // no-cors, *cors, same-origin
      //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //   credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        // "Content-Type": "application/json",
        Authorization: process.env.REACT_APP_API_KEY,
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
        Origin: "*",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    const res = await response.json();
    console.log(res);
    setData(res.businesses);
    // return response.json(); // parses JSON response into native JavaScript objects
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          margin: "1rem",
        }}
      >
        Popular Resturaunts in New York
      </h1>
      <div
        style={{
          'display': "flex",
          'flexWrap':'wrap'
        }}
      >
        {data.map((element) => {
          return (
            <div
              style={{
                'margin': "1rem",
              }}
            >
              <h3>{element.name}</h3>
              <img
                src={`${element.image_url}`}
                alt="Resturaunt Image"
                style={{
                  width: "200px",
                  height: "auto",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherData;

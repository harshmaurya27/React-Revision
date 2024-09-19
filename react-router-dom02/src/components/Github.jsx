import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState();
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/harshmaurya27")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       })
  //       .catch((error) => console.error(error));
  //   }, []);
  return (
    <div>
      follower:{data?.followers} <img src={data.avatar_url}></img>
    </div>
  );
};

export default Github;

export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/harshmaurya27");

  return response.json();
};

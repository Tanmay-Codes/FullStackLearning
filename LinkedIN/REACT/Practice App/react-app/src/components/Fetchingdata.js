import React, { useEffect, useState } from "react";
const Fetchingdata = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/Tanmay-Codes")
      .then((response) => response.json())
      .then(setData).then(()=>setLoading(false)).then(setError)
  }, []);
  if (loading) return <pre><h1>LOADING....</h1></pre>
  if (error) return <pre><h2>{JSON.stringify(error)}</h2></pre>;
  if (!data) return <pre>There is no Data</pre>
  return <div>
    <h1>Hello, My Name is {data.name}</h1>
    <p>Twitter:   {data.twitter_username}</p>
  </div>;
};

export default Fetchingdata;

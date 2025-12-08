// Create a react app that fetches data from a public api

import { useState, useEffect } from "react";

function Api() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
      .then((res) => res.json())
      .then((result) => {
        setData(result.entries);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Public APIs List</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <strong>{item.API}</strong> — {item.Description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Api;

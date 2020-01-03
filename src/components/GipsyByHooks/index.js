import React, { useState, useEffect } from "react";

function useGiphy(query) {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.giphy.com/v1/stickers/search?api_key=NTh1IucR1hjKQwKKcyLsK8yCQFzg4hLc&q=${query}&limit=25&offset=0&rating=G&lang=en`
        );
        const json = await response.json();
        setResult(json.data.map(item => item.images.preview.mp4));
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    if (query !== "") {
      fetchData();
    }
  }, [query]);

  return [loading, result];
}

function HooksDemo() {
  const [search, setsearch] = useState("");
  const [query, setQuery] = useState("");
  const [loading, result] = useGiphy(query);

  function handleSubmitSearch(event) {
    event.preventDefault();
    setQuery(search);
  }

  return (
    <div>
      <h1>Async React Hooks</h1>
      <form onSubmit={handleSubmitSearch}>
        <input
          type="text"
          className="searrch-field"
          value={search}
          onChange={event => setsearch(event.target.value)}
        />
        <button type="submit" className="search-btn">
          Submit
        </button>
      </form>
      <div>
        {loading ? (
          <h1>Give me Gifs</h1>
        ) : (
          result.map(item => (
            <video key={item} src={item} loop autoPlay>
              {item}
            </video>
          ))
        )}
      </div>
    </div>
  );
}

export default HooksDemo;

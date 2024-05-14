import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Shimmer from "./Shimmer";

const MainPage = () => {
  let api_key = "7308c8e8c82c4a9dbcb4107fbc596cb5";
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("general");
  const [authorName, setAuthorName] = useState("");
  const [datetime, setDatetime] = useState("");

  useEffect(() => {
    fetchNews();
  }, [searchQuery, category, authorName, datetime]);

  const fetchNews = async () => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`;
      if (searchQuery) url += `&q=${searchQuery}`;
      if (category !== "all") url += `&category=${category}`;
      if (authorName) url += `&q=${authorName}`;
      if (datetime) url += `&from=${datetime}`;

      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return articles.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="banner text-center py-4">
        <h1 className="text-center text-3xl py-3 font-bold">
          Top News Headlines
        </h1>
        <div className="text-center">
          <input
            type="text"
            placeholder="Search by title"
            className="w-4/6 p-2 rounded-lg mb-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <br />
        </div>
        <select
          className="mx-4 p-2 w-[14%] rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="general">General</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
        <input
          type="text"
          className="mx-4 p-2 w-[14%] rounded-md"
          placeholder="Search by author name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        <input
          type="datetime-local"
          className="mx-4 p-2 w-[14%] rounded-md"
          value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
        />
      </div>
      <div className="card-container">
        {articles.map((article, index) => (
          <NewsCard info={article} />
        ))}
      </div>
    </>
  );
};

export default MainPage;

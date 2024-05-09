import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Shimmer from "./Shimmer";

const MainPage = () => {
  let api_key = "7308c8e8c82c4a9dbcb4107fbc596cb5";
  const [articles, setArticles] = useState([]);
  const [filterItem, setFilterItem] = useState("");

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const data = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=" +
        api_key
    );
    const json = await data.json();
    console.log(json);

    setArticles(json.articles);
  };


  // const handleFilteredArticles = () => {
  //   const filteredItem = articles.filter((item) => {
  //     item.title.toLowerCase().includes(filterItem.toLowerCase());
  //   });
  //   setArticles(filteredItem);
  // };

  return articles.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="text-center banner py-5">
        <input
          type="text"
          placeholder="Search by Title"
          className="rounded-md border border-gray-300 py-2 px-2 mx-2 mt-10 w-4/6"
          value={filterItem}
          onChange={(e) => setFilterItem(e.target.value)}
        />
        <button
          className="btn btn-outline-success mb-2 font-bold"
          // onClick={handleFilteredArticles()}
        >
          Search
        </button>
        <br />

        <div className="my-5">
          <div className="flex justify-center">
            <div className="mx-3">
              <input
                type="text"
                className="rounded-md border border-gray-500 p-2"
                placeholder="Categories"
              />
              <button className="btn btn-outline-success ml-1">Search</button>
            </div>

            <div className="mx-3">
              <input
                type="text"
                className="rounded-md border border-gray-500 p-2"
                placeholder="Author Name"
              />
              <button className="btn btn-outline-success ml-1">Search</button>
            </div>
            <div className="mx-3">
              <input
                type="datetime-local"
                className="rounded-md border border-gray-500 p-2"
              />
              <button className="btn btn-outline-success ml-1">Search</button>
            </div>
          </div>
        </div>
      </div>

      {articles.map((articles) => (
        <NewsCard key={articles?.source?.id} info={articles} />
      ))}
    </>
  );
};

export default MainPage;

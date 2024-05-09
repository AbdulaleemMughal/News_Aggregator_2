import React, { useState } from "react";
import NewsCard from "./NewsCard";

const Categories = () => {
  let api_key = "7308c8e8c82c4a9dbcb4107fbc596cb5";
  const [category, setCategory] = useState("");
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/everything?q=${category}&from=2024-04-08&sortBy=publishedAt&apiKey=` +
        api_key
    );
    const json = await data.json();

    setArticles(json.setArticles);

    console.log(articles);

  };

  return (
    <>
      <div className="text-center banner py-5">
        <h1 className="text-center text-3xl text-green-700 font-serif">
          Set Your Favourite Category Here
        </h1>
        <div className="mt-3 flex justify-center">
          <input
            type="text"
            className="rounded-md border border-gray-500 py-2 px-2 w-[50%]"
            placeholder="Categories"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <button className="btn btn-outline-success" onClick={() => fetchData()}>
            Set Category
          </button>
        </div>
      </div>
      {/* {articles.map((articles) => <NewsCard info={articles} />)} */}
    </>
  );
};

export default Categories;

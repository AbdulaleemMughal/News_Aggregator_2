import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { addTopNews, addAuthor } from "../utils/topNewsSlice";

const MainPage = () => {
  let api_key = "7308c8e8c82c4a9dbcb4107fbc596cb5";
  const dispatch = useDispatch();
  // const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("");
  const [filterItem, setFilterItem] = useState("");
  const [filterAuthor, setFilterAuthor] = useState("");
  const user = useSelector((store) => store.topNews.isTopNews);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=` +
        api_key
    );
    const json = await data.json();
    dispatch(addTopNews(json.articles));
    // setArticles(json.articles);
  };

  // const handleFilteredItems = () => {
  //   const filteredNews = user.filter((item) =>
  //     item.source.name.toLowerCase().includes(filterItem.toLowerCase())
  //   );
  //   // setArticles(filteredNews);
  //   dispatch(addTopNews(filteredNews));
  // };


  // const handleAuthorNews = () => {
  //   const filteredAuthor = user.filter((item) =>
  //     item.author.toLowerCase().includes(filterAuthor.toLowerCase())
  //   );
  //   // setArticles(filteredNews);
  //   dispatch(addAuthor(filteredAuthor));
  // };


  const handleCategory = async () => {
    const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&${category}=business&apiKey=` + api_key);
    const json = await data.json();

    dispatch(addTopNews(json.articles));
  };

  return user.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="text-center banner py-5">
        <input
          type="text"
          placeholder="Search by Name"
          className="rounded-md border border-gray-300 py-2 px-2 mx-2 mt-10 w-4/6"
          value={filterItem}
          onChange={(e) => setFilterItem(e.target.value)}
        />
        <button
          className="btn btn-outline-success mb-2 font-bold"
          // onClick={() => handleFilteredItems()}
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
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <button
                className="btn btn-outline-success ml-1"
                onClick={() => handleCategory()}
              >
                Search
              </button>
            </div>

            <div className="mx-3">
              <input
                type="text"
                className="rounded-md border border-gray-500 p-2"
                placeholder="Author Name"
                value={filterAuthor}
                onChange={(e) => setFilterAuthor(e.target.value)}
              />
              <button
                className="btn btn-outline-success ml-1"
                // onClick={() => handleAuthorNews()}
              >
                Search
              </button>
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

      {user.map((articles) => (
        <NewsCard key={articles?.source?.id} info={articles} />
      ))}
    </>
  );
};

export default MainPage;

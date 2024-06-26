import React, { useState } from "react";
import NewsCard from "./NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { addNews } from "../utils/newsSlice";

const Categories = () => {
  let api_key = "7308c8e8c82c4a9dbcb4107fbc596cb5";
  // const [searchNews, setSearchNews] = useState([]);
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/everything?q=${category}&from=2024-04-13&sortBy=publishedAt&apiKey=` +
        api_key
    );
    const json = await data.json();
    // console.log(json);
    // setSearchNews(json.articles);

    // console.log(searchNews);

    dispatch(addNews(json.articles));
  };

  const user = useSelector((store) => store?.news?.isNews);

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
          <button
            className="btn btn-outline-success"
            onClick={() => fetchData()}
          >
            Set Category
          </button>
        </div>
      </div>
      {user.map((user) => (
        <NewsCard key={user?.source?.id} info={user} />
      ))}
    </>
  );
};

export default Categories;

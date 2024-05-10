import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsCard from "./NewsCard";
import { clearNews } from "../utils/newsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store?.news?.isNews);

  const handleClearItem = () => {
    dispatch(clearNews())
  };

  return (
    <>
      <h1 className="text-center text-4xl font-serif text-red-600 font-bold">
        Interested News
      </h1>

      <button
        className="btn btn-outline-dark"
        onClick={() => handleClearItem()}
      >
        Clear News
      </button>

      <div>
        {user.map((user) => (
          <NewsCard key={user?.source?.id} info={user} />
        ))}
      </div>
    </>
  );
};

export default Home;

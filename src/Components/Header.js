import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="row m-0 bg-green-700 py-3">
        <div className="col-md-3">
          <h1 className="text-3xl text-white font-serif text-center py-3">
            News Aggregator
          </h1>
        </div>
        <div className="col-md-9 flex items-center justify-end">
          <ul className="mt-2 md:flex">
            <Link to={"/"}>
              <li className="mr-28 md:mx-6 my-1 p-3 font-serif text-white">Top News</li>
            </Link>
            <Link to={"/home"}>
              <li className="mr-28 md:mx-6 my-1 p-3 font-serif text-white">Home</li>
            </Link>
            <Link to={"/categories"}>
              <li className="mr-28 md:mx-6 my-1 p-3 font-serif text-white">Set Categories</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

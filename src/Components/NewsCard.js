import React from "react";
import { Link } from "react-router-dom";


const NewsCard = ({ info }) => {

  return (
    <>
      <div className="pt-1 pb-4 container shadow-md w-5/6 mt-4 hover:shadow-xl">
        <h1 className="text-xl md:text-3xl mt-6 m-7 text-red-600 underline">
          {info?.title}
        </h1>
        <div className="row">
          <div className="col-md-4">
            <img src={info?.urlToImage} />
          </div>
          <div className="col-md-8">
            <h1 className="my-2 font-semibold">Author Name: {info?.author}</h1>
            <p className="font-serif">
              {info?.description}
            </p>
            <Link to={info?.url}>
              <button type="button" className="btn btn-outline-dark mt-3">
                Read More
              </button>
              </Link>
            <p className="mt-5 text-red-600 underline">
              Published At: {info?.publishedAt}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;

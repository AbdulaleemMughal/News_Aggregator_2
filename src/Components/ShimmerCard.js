const ShimmerCard = () => {
    return (
      <>
        <div className="my-4 pt-1 pb-4 w-5/6 bg-gray-200 m-auto h-[400px]">
          <div className="container">
            <h1 className="w-5/6 h-20 bg-gray-300"></h1>
          </div>
  
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="mt-9 bg-gray-300 h-[250px] w-[400px]"></div>
              </div>
  
              <div className="col-md-8">
                  <div className="mt-9 w-full bg-gray-300 h-[200px]"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default ShimmerCard;
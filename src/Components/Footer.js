import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <div className="row py-5 m-0">
          <div className="col-md-6 text-center">
            <ul className="text-red-600 font-serif">
              <Link to={"/"}><li className="inline mx-3">Top News</li></Link>
              <Link to={"/home"}><li className="inline mx-3">Home</li></Link>
              <Link to={"/categories"}><li className="inline mx-3">Set Categories</li></Link>
            </ul>
            <p className="font-serif text-sm text-white mt-3">Copyright © 2022. All rights reserved.</p>
          </div>

          <div className="col-md-6 text-center text-white">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-snapchat"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
            <ion-icon name="logo-youtube"></ion-icon><br />

            <p className="font-serif mt-3 text-white">Powered by <span className="text-red-600">Flourida</span> & <span className="text-red-600">Wordpress.</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
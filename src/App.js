import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body";
import MainPage from "./Components/MainPage";
import Home from "./Components/Home";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <><Header /><MainPage /><Footer/></>,
        },
        {
          path: "/home",
          element: <><Header /><Home /><Footer/></>,
        },
        {
          path: "/categories",
          element: <><Header /><Categories /><Footer/></>,
        },
      ],
      errorElement: <Error />
    },
  ]);

  return (
    <div className="App">
      <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;

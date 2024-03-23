import "./App.css";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Textile from "./routes/textile";
import Footwear from "./routes/footwear";
import Furniture from "./routes/furniture";
import Art from "./routes/art";
import Sanitaryware from "./routes/sanitaryware";
import Industrial from "./routes/industrial";
import ProductEn from "./routes/productEn";
import PartnershipEn from "./routes/partnershipEn";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/textile",
      element: <Textile />,
    },
    {
      path: "/footwear",
      element: <Footwear />,
    },
    {
      path: "/furniture",
      element: <Furniture />,
    },
    {
      path: "/art",
      element: <Art />,
    },
    {
      path: "/sanitaryware",
      element: <Sanitaryware />,
    },
    {
      path: "/sanitaryware",
      element: <Sanitaryware />,
    },
    {
      path: "/industrial",
      element: <Industrial />,
    },
    {
      path: "/productEnquiry",
      element: <ProductEn />,
    },
    {
      path: "/partnershipEnquiry",
      element: <PartnershipEn />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;

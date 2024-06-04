import "./App.css";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Footwear from "./routes/footwear";
import Furniture from "./routes/furniture";
import Industrial from "./routes/industrial";
import ProductEn from "./routes/productEn";
import PartnershipEn from "./routes/partnershipEn";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/product/Footwear-Emporium",
      element: <Footwear />,
    },
    {
      path: "/product/Furniture-&Home_Essentials",
      element: <Furniture />,
    },

    {
      path: "/product/Industrial-Solutions",
      element: <Industrial />,
    },
    {
      path: "/enquiry/product-enquiry",
      element: <ProductEn />,
    },
    {
      path: "/enquiry/partnership-enquiry",
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

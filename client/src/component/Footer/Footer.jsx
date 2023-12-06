import React from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  const hideFooterRoutes = [
    "/admin/dashboard",
    "/admin/products",
    "/admin/products/addproducts",
    "/admin/products/addproducts/edit",
    "/admin/users",
  ];

  // Check if the current route matches any of the paths to hide the footer
  const shouldHideFooter = hideFooterRoutes.some((path) =>
    location.pathname.startsWith(path)
  );
  return (
    <>
      {!shouldHideFooter && (
        <footer>
          <div className="flex flex-col md:flex-row text-gray-900 md:items-center justify-between md:p-20 pl-10 md:pl-40 md:pr-40 gap-20">
            <div className="md:w-1/4 md:h-28 -mt-16">
              <img
                className="w-48"
                src="https://i.ibb.co/0sHCMWj/woodhy-high-resolution-logo-transparent.png"
                alt="woodhy-high-resolution-logo-transparent"
                border="0"
              />
              <p className="mt-5 text-lg text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur magnam debitis iure laboriosam vero
              </p>
            </div>

            <div className="md:w-1/4 md:h-28 -mt-10">
              <p className="text-xl font-semibold">Category</p>
              <ul className="mt-3">
                <li>Chair</li>
                <li>Sofa</li>
                <li>Bed</li>
                <li>Table</li>
                <li>Closet</li>
              </ul>
            </div>
            <div className="md:w-1/4 md:h-28 -mt-10">
              <p className="text-xl font-semibold">Popular Product</p>
              <ul className="mt-3">
                <li>Single Sofa Black</li>
                <li>Wooden Bookcase</li>
                <li>Wooden Chair</li>
                <li>Luxury White Bed</li>
              </ul>
            </div>
            <div className="md:w-1/4 md:h-28 -mt-10">
              <p className="text-xl font-semibold">Sitemap</p>
              <ul className="mt-3">
                <li>Product</li>
                <li>Service</li>
                <li>Article</li>
                <li>ABout US</li>
                <li>Refund and Return Ploicy</li>
              </ul>
            </div>
          </div>
          <div className="border border-zinc-500 mt-10 ml-10 md:ml-40 mr-10 md:mr-40"></div>
          <div className="flex items-start ml-10 md:pl-40 md:pr-40 text-gray-800 mt-5">
            © 2023 by Woodhy Furniture. All rights reserved{" "}
          </div>
        </footer>
      )}
    </>
  );
}

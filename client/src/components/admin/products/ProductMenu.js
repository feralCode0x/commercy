import React, { Fragment, useContext, useState } from "react";
import { ProductContext } from "./index";
import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";
import { productReducer } from "./ProductContext"
const ProductMenu = (props) => {
  const { data, dispatch } = useContext(ProductContext);
    const [dropdown, setDropdown] = useState(false);
  return (
    <Fragment>
      <div className="col-span-1 flex justify-between items-center">
        <div className="flex items-center">
          {/* It's open the add product modal */}
          <span
            style={{ background: "#303031" }}
            onClick={(e) =>
              dispatch({ type: "addProductModal", payload: true })
            }
            className="rounded-full cursor-pointer p-2 bg-gray-800 flex items-center text-gray-100 text-sm font-semibold uppercase"
          >
            <svg
              className="w-6 h-6 text-gray-100 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            Add Product
          </span>
        </div>
        <span className="pr-2">Filter</span>
            </div>
            <div
              style={{ background: "#303031" }}
              className={`${
                dropdown ? "" : "hidden"
              } absolute top-0 left-0 mt-12 rounded-lg overflow-hidden w-full md:w-48 flex flex-col z-10`}
            >
              <span
                onClick={(e) =>
                  
                  productReducer("All", data, dispatch, dropdown, setDropdown)
                }
                className="px-4 py-2 hover:bg-black text-center cursor-pointer"
              >
                All
              </span>
              <span
                onClick={(e) =>
                  productReducer(
                    "Not processed",
                    data,
                    dispatch,
                    dropdown,
                    setDropdown
                  )
                }
                className="px-4 py-2 hover:bg-black text-center cursor-pointer"
              >
                Not processed
              </span>
              <span
                onClick={(e) =>
                 productReducer(
                    "Processing",
                    data,
                    dispatch,
                    dropdown,
                    setDropdown
                  )
                }
                className="px-4 py-2 hover:bg-black text-center cursor-pointer"
              >
                Processing
              </span>
              <span
                onClick={(e) =>
                 productReducer("Shipped", data, dispatch, dropdown, setDropdown)
                }
                className="px-4 py-2 hover:bg-black text-center cursor-pointer"
              >
                Shipped
              </span>
              <span
                onClick={(e) =>
                 productReducer(
                    "Delivered",
                    data,
                    dispatch,
                    dropdown,
                    setDropdown
                  )
                }
                className="px-4 py-2 hover:bg-black text-center cursor-pointer"
              >
                Delivered
              </span>
              <span
                onClick={(e) =>
                  productReducer(
                    "Cancelled",
                    data,
                    dispatch,
                    dropdown,
                    setDropdown
                  )
                }
                className="px-4 py-2 hover:bg-black text-center cursor-pointer"
              >
                Cancelled
              </span>
            </div>
    
          <div>
         
          </div>
 
        <AddProductModal />
        <EditProductModal />

    </Fragment>
  );
};

export default ProductMenu;
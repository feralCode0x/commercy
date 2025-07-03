import { useState, useEffect } from 'react';
import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const cartListProduct = async () => {
  let carts = JSON.parse(localStorage.getItem("cart"));
  let productArray = [];
  if (carts) {
    for (const cart of carts) {
      productArray.push(cart.id);
    }
  }
  try {
    let res = await axios.post(`${apiURL}/api/product/cart-product`, 'withCredentials: true', {
      productArray,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

function useSetData() {
 const [isLoading, setIsLoading] = useState(true);  
 useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 9000)); 
                // Process data
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false); // Set to false even on error
            }
        };

        fetchData();
    }, []); // Empty dependency array means it runs once on mount
}
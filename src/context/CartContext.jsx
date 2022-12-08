
import React, { useEffect, useState } from "react";
const url = "http://localhost:3000";
const CartContext = React.createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(0);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [users, setUsers] = useState([]);
  const [tours, setTours] = useState([]);
  useEffect(() => {
    getData();
    getDestinations();
    getUsers();
    getBlogs()
  }, []);

  const getData = async () => {
    setIsLoading(true);
    const response = await fetch(`${url}/tours`);
    const result = await response.json();
    setTours(result);
    setIsLoading(false);
  };

  const getDestinations = async () => {
    setIsLoading(true);
    const response = await fetch(`${url}/destinations`);
    const result = await response.json();
    setDestinations(result);
    setIsLoading(false);
  };
  const getUsers = async () => {
    setIsLoading(true);
    const response = await fetch(`${url}/users`);
    const result = await response.json();
    setUsers(result);
    setIsLoading(false);
  };

  const getBlogs = async () => {
    setIsLoading(true);
    const response = await fetch(`${url}/blogs`);
    const result = await response.json();
    setArticles(result);
    setIsLoading(false);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        articles,
        setArticles,
        isLoading,
        tours,
        destinations,
        users
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider, url };
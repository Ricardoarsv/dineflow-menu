import React, { useState, useEffect } from "react";
import Card from "./UI/Card";
import { motion } from "framer-motion";
import Products from "../../mock/Products.MockData.json";
import { CardSkeleton } from "./UI/Card.skeleton";
import { Link } from "react-router-dom";

export default function Menu() {
  const [products, setProducts] = useState({
    breakfast: [],
    lunch: [],
    Dessers: [],
  });

  useEffect(() => {
    Products.map((product) => {
      if (product.category === "desayunos") {
        setProducts((prev) => ({
          ...prev,
          breakfast: [...prev.breakfast, product],
        }));
      } else if (product.category === "almuerzos") {
        setProducts((prev) => ({
          ...prev,
          lunch: [...prev.lunch, product],
        }));
      } else if (product.category === "postres") {
        setProducts((prev) => ({
          ...prev,
          Dessers: [...prev.Dessers, product],
        }));
      }
    });
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full overflow-y-auto bg-black p-5">
      <div className="flex flex-row gap-8 ">
        <h1 className="text-white font-AdventureFont text-6xl">Menu</h1>
        <Link to="/" className="text-yellow-500 font-AdventureFont text-6xl">
          Home
        </Link>
      </div>
      <div className="flex flex-col items-start justify-start w-full py-2 gap-4">
        <h1 className="text-white font-AdventureFont text-4xl">Breakfast</h1>
        <div className="flex flex-row gap-4 pb-4 overflow-x-auto overflow-y-hidden max-w-full">
          {products.breakfast.length === 0
            ? Array.from({ length: 4 }).map((_, index) => (
                <CardSkeleton key={index} />
              ))
            : products.breakfast.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-44 md:w-72"
                >
                  <Card element={product} />
                </motion.div>
              ))}
        </div>
      </div>
      {/* ALMUERZOS */}
      <div className="flex flex-col items-start justify-start w-full py-2 gap-4">
        <h1 className="text-white font-AdventureFont text-4xl">Lunch</h1>
        <div className="flex flex-row gap-4 pb-4 overflow-x-auto overflow-y-hidden max-w-full">
          {products.lunch.length === 0
            ? Array.from({ length: 4 }).map((_, index) => (
                <CardSkeleton key={index} />
              ))
            : products.lunch.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-44 md:w-72"
                >
                  <Card element={product} />
                </motion.div>
              ))}
        </div>
      </div>

      <div className="flex flex-col items-start justify-start py-2 w-full gap-4">
        <h1 className="text-white font-AdventureFont text-4xl">Desserts</h1>
        <div className="flex flex-row gap-4 pb-4 overflow-x-auto overflow-y-hidden max-w-full">
          {products.Dessers.length === 0
            ? Array.from({ length: 4 }).map((_, index) => (
                <CardSkeleton key={index} />
              ))
            : products.Dessers.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-44 md:w-72"
                >
                  <Card element={product} />
                </motion.div>
              ))}
        </div>
      </div>
    </div>
  );
}

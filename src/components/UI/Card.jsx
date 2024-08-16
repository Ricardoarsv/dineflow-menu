import React from 'react'
import formatCurrency from "../../utils/formatCurrency";
import { motion } from 'framer-motion';
import ProductModal from './Product.modal';

export default function Card({ element }) {
    const [hover, setHover] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const awayRef = React.useRef(null);

    React.useEffect(() => {
      function handleClickOutside(event) {
        if (awayRef.current && !awayRef.current.contains(event.target)) {
          setShowForm(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [awayRef]);
    
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={() => {
        setShowModal(!showModal);
        setHover(false);
      }}
      className={`flex flex-col cursor-pointer gap-2 text-sm md:text-md lg:text-lg p-4 font-serif border-2 border-white rounded-xl text-yellow-500 ${
        hover ? "bg-[#ffc84770] duration-1000" : "bg-black"
      }`}
    >
      <div className="flex justify-center h-32 md:h-60">
        <img
          className={`sticky object-cover rounded-xl ${
            hover
              ? "shadow-2xl w-32 h-32 md:w-60 md:h-60 duration-1000"
              : "shadow-xl w-28 h-28 md:w-56 md:h-56  duration-500"
          }`}
          src={element.image || "https://via.placeholder.com/150"}
        />
      </div>
      <h1>{element.name}</h1>
      <div className="flex flex-row gap-2">
        <h1 className="text-white">Calificación</h1>
        <h1>{element.calification}</h1>
      </div>
      <div className="flex flex-row gap-2">
        <h1 className="text-white">Precio</h1>
        <h1>{formatCurrency(element.price)}</h1>
      </div>
      <div className="flex flex-row gap-2">
        <h1 className="text-white">status</h1>
        <h1
          className={`${
            element.status === "disponible" ? "text-green-500" : "text-red-500"
          }`}
        >
          {element.status}
        </h1>
      </div>
      {showModal && (
        <div className="bg-[#00000038] w-full h-full absolute top-0 left-0 flex justify-center items-center">
          <ProductModal
            image={element.image}
            name={element.name}
            ref={awayRef}
          />
        </div>
      )}
    </motion.div>
  );
}

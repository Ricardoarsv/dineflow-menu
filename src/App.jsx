import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./components/ContactForm.Modal";
import { Link } from "react-router-dom";
function App() {
    const [showForm, setShowForm] = React.useState(false)
    const [hover, setHover] = React.useState([false, '']);
    const awayRef = React.useRef(null);

    const handleMouseEnter = (target) => {
      console.log(target);
      setHover([true, target]);
    };

    const handleMouseLeave = () => {
      setHover([false, ""]);
    };

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-full flex flex-col justify-center items-center bg-black"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-white font-AdventureFont text-6xl"
      >
        Welcome!
      </motion.h1>
      <p className="text-white font-mono pb-2">
        ⬇ explore some options below ⬇
      </p>
      <div className="flex flex-col gap-2 w-full max-w-56">
        <Link
          to={"/menu"}
          className="flex items-center justify-center bg-yellow-600 hover:bg-yellow-100 hover:text-yellow-600 text-white font-bold font-sans py-2 px-4 rounded"
        >
          MENU
        </Link>
        <button
          className="bg-yellow-600 hover:bg-yellow-100 hover:text-yellow-600 text-white font-bold font-sans py-2 px-4 rounded"
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          CONTACT US
        </button>
        <h1 className="text-white font-mono text-center">⬇ Social medias ⬇</h1>
        <div className="flex flex-row gap-2">
          <a
            href="#"
            className="bg-yellow-600 hover:bg-yellow-100 hover:text-yellow-600 text-white font-bold font-sans py-2 px-4 rounded"
            onMouseEnter={() => handleMouseEnter("FB")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://img.icons8.com/?size=100&id=118467&format=png&color=000000"
              className={`w-10 h-10 transition-transform duration-300 ease-in-out ${
                hover[0] && hover[1] === "FB"
                  ? "transform scale-125 rotate-12"
                  : ""
              }`}
              alt="Facebook"
            />
          </a>
          <a
            href="#"
            className="bg-yellow-600 hover:bg-yellow-100 hover:text-yellow-600 text-white font-bold font-sans py-2 px-4 rounded"
            onMouseEnter={() => handleMouseEnter("IG")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://img.icons8.com/?size=100&id=32309&format=png&color=000000"
              className={`w-10 h-10 transition-transform duration-300 ease-in-out ${
                hover[0] && hover[1] === "IG"
                  ? "transform scale-125 rotate-12"
                  : ""
              }`}
              alt="Instagram"
            />
          </a>
          <a
            href="#"
            className="bg-yellow-600 hover:bg-yellow-100 hover:text-yellow-600 text-white font-bold font-sans py-2 px-4 rounded"
            onMouseEnter={() => handleMouseEnter("TW")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://img.icons8.com/?size=100&id=8824&format=png&color=000000"
              className={`w-10 h-10 transition-transform duration-300 ease-in-out ${
                hover[0] && hover[1] === "TW"
                  ? "transform scale-125 rotate-12"
                  : ""
              }`}
              alt="Twitter"
            />
          </a>
        </div>
        {showForm && (
          <div className="bg-[#00000038] w-full h-full absolute top-0 left-0 flex justify-center items-center">
            <ContactForm ref={awayRef} />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default App;

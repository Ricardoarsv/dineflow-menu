import React from "react";

const ProductModal = React.forwardRef((props, ref) => {
  return (
    <div
      className="bg-transparent absolute z-50 w-[80%] flex flex-col justify-center items-center"
      ref={ref}
    >
      <img
        src={props.image || "https://via.placeholder.com/700"}
        alt={props.name}
        className="object-cover w-96 h-96 rounded-xl"
      />
    </div>
  );
});

export default ProductModal;

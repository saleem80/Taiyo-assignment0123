import React from "react";

const Button = ({ text, onClick, width, variant }: any) => {
  return (
    <>
      {variant === "edit" ? (
        <button onClick={onClick} className="bg-yellow-400 p-2 border text-base  uppercase w-full rounded hover:shadow-md">
          {text}
        </button>
      ) : variant === "delete" ? (
        <button onClick={onClick} className="bg-red-500 p-2 border text-base hover:bg-red-100 uppercase w-full rounded hover:shadow-md">
          {text}
        </button>
      ) : (
        <button
          onClick={onClick}
          className={`bg-green-700 p-4 text-base font-medium text-white tracking-widest hover:shadow-md ${
            width ? width : "w-full"
          } uppercase `}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;

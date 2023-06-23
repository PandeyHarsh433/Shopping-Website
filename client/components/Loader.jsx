import React from "react";
import { useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="h-screen bg-white">
      <div className="flex justify-center items-center h-full">
        {isLoading ? (
          <img
            className="h-16 w-16"
            src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
            alt=""
          />
        ) : null}
      </div>
    </div>
  );
};

export default Loader;

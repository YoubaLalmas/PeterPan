import React from "react";
import SearchToolForm from "../components/forms/SearchToolForm";

function Home() {
  return (
    <div className="flex p-20 items-center">
      <div className="w-full lg:w-1/2 my-auto p-6 text-center lg:text-left">
        <h2 className="text-6xl font-bold">
          Join Clarity & Learn About The Latest ui/ux Patterns.
        </h2>

        <p className="text-2xl py-6">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate.
        </p>
        <a
          href="tel:213668811186"
          className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Contacter Nous
        </a>
      </div>
      <div className="hidden lg:block ">
        <img
          src="https://www.eclipsecctv.com/cdn-cgi/image/quality%3D85/assets/images/max-8ak3hx%20kit.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import Blocknumber from "../components/Blocknumber";
import GetBlock from "../components/GetBlock";
import NavBar from "../components/NavBar";

const ShowBlocks = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col pt-16">
        <Blocknumber />
        <GetBlock />
      </div>
    </div>
  );
};

export default ShowBlocks;

import React from "react";
import Blocknumber from "../components/Blocknumber";
import GetBlock from "../components/GetBlock";
import NavBar from "../components/NavBar";

const ShowBlocks = () => {
  return (
    <div>
      <NavBar />
      <Blocknumber />
      <GetBlock />
    </div>
  );
};

export default ShowBlocks;

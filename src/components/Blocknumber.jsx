import React from "react";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../contexts/Context";

const Blocknumber = () => {
  const { block, blockNumber } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center">
      <div
        className="card bg-base-200 shadow-lg m-5 flex justify-center items-center cursor-pointer"
        onClick={() => navigate(`/blocktransactions/${block.hash}`)}
      >
        <div className="card-body">
          <p className="text-xl font-bold text-primary">
            Current Block: {blockNumber}{" "}
          </p>
          <div className="">
            <p>Hash: {block && block.hash}</p>
            <p>Parent Hash: {block && block.parentHash}</p>
            <p>Miner: {block && block.miner}</p>
            <p>
              Time: {new Date(block && block.timestamp * 1000).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blocknumber;

import React from "react";
import { useContext, useState, useEffect } from "react";
import Context from "../contexts/Context";

const Blocknumber = () => {
  const { block, blockNumber, blocksArray } = useContext(Context);
  const [time, setTime] = useState();

  useEffect(() => {
    setTime(new Date(block && block.timestamp * 1000).toLocaleString());
  }, [block]);

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-body">
            <p className="text-xl font-bold text-primary">
              Blocknumber: {blockNumber}{" "}
            </p>
            <div className="">
              <p>Hash: {block && block.hash}</p>
              <p>Parent Hash: {block && block.parentHash}</p>
              <p>Time: {time && time}</p>
            </div>
          </div>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};

export default Blocknumber;

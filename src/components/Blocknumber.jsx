import React from "react";
import { useContext, useState, useEffect } from "react";
import Context from "../contexts/Context";

const Blocknumber = () => {
  const { block, blockNumber } = useContext(Context);
  const [time, setTime] = useState();

  useEffect(() => {
    setTime(new Date(block && block.timestamp * 1000).toLocaleString());
  }, [block]);

  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-200 shadow-lg m-5 w-5/6 flex justify-center items-center">
        <div className="card-body">
          <p className="text-xl font-bold text-primary">
            Current Block: {blockNumber}{" "}
          </p>
          <div className="">
            <p>Hash: {block && block.hash}</p>
            <p>Parent Hash: {block && block.parentHash}</p>
            <p>Time: {time && time}</p>
          </div>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};

export default Blocknumber;

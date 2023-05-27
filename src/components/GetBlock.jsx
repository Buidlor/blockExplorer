import React from "react";
import { useContext } from "react";
import Context from "../contexts/Context";

const GetBlock = () => {
  const { blocksArray } = useContext(Context);

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        {blocksArray &&
          blocksArray.map((block) => {
            return (
              <div key={block.hash} className="m-2">
                <p className="text-xl font-bold text-primary">
                  Blocknumber: {block.number}{" "}
                </p>
                <div>
                  <p>Hash: {block.hash}</p>
                  <p>Parent Hash: {block.parentHash}</p>
                  <p>
                    Time: {new Date(block.timestamp * 1000).toLocaleString()}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GetBlock;

import React from "react";
import { useContext } from "react";
import Context from "../contexts/Context";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./GetBlock.css";

const GetBlock = () => {
  const { blocksArray } = useContext(Context);

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <TransitionGroup className="block-list">
          {blocksArray &&
            blocksArray.map((block) => {
              return (
                <CSSTransition key={block.hash} timeout={500} classNames="item">
                  <div className="m-2">
                    <p className=" font-bold text-primary">
                      Blocknumber: {block.number}{" "}
                    </p>
                    <div>
                      <p>Hash: {block.hash}</p>
                      <p>Parent Hash: {block.parentHash}</p>
                      <p>
                        Time:{" "}
                        {new Date(block.timestamp * 1000).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default GetBlock;

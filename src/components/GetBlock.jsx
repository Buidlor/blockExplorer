import React from "react";
import { useContext } from "react";
import Context from "../contexts/Context";

const GetBlock = () => {
  const { blockNumber, block } = useContext(Context);

  return <div></div>;
};

export default GetBlock;

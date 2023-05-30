import React from "react";
import { useContext, useState, useEffect } from "react";
import Context from "../contexts/Context";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const BlockTransactions = () => {
  const { blockhash } = useParams();
  const { getClickedBlock, clickedBlock } = useContext(Context);

  useEffect(() => {
    getClickedBlock(blockhash);
  }, [blockhash]);

  return (
    <div>
      <NavBar />
      <pre>
        <code>{JSON.stringify(clickedBlock, null, 2)}</code>
      </pre>
    </div>
  );
};

export default BlockTransactions;

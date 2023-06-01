import React from "react";
import { useContext, useState, useEffect } from "react";
import Context from "../contexts/Context";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const BlockTransactions = () => {
  const { blockhash } = useParams();
  const { getClickedBlock, clickedBlock } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getClickedBlock(blockhash).then(() => setIsLoading(false));
  }, [blockhash]);

  if (isLoading) {
    return (
      <div>
        <NavBar />
        <div className="flex justify-center items-center pt-16">
          <div className="card bg-base-200 shadow-lg m-5 flex justify-center items-center cursor-pointer">
            <div className="card-body">
              <p className="text-xl font-bold text-primary">
                Loading block data...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      {/* a list of all the transactions in that block */}
      <div className="flex justify-center items-center pt-16">
        <div className="card bg-base-150 shadow-lg m-5 flex justify-center items-center  w-screen">
          <div className="card-body">
            <p className="text-xl font-bold text-primary">
              Blocknumber: {clickedBlock.number}{" "}
            </p>
            <div>
              <p>Hash: {clickedBlock.hash}</p>
              <p>Parent Hash: {clickedBlock.parentHash}</p>
              <p>Miner: {clickedBlock.miner}</p>
              <p>
                Time: {new Date(clickedBlock.timestamp * 1000).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-5">
        <p className=" text-lg font-semibold">Transactions: </p>
        {clickedBlock.transactions.map((transaction) => {
          return (
            // a list of all the transactions in that block
            <ul className="" key={transaction}>
              <li className=" list-item">
                {" "}
                <a
                  className="link"
                  onClick={() => navigate(`/transactionreceipt/${transaction}`)}
                >
                  {transaction}
                </a>{" "}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default BlockTransactions;

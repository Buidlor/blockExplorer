import React from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Context from "../contexts/Context";

const TransactionReceipt = () => {
  const { transactionhash } = useParams();
  const { getTransaction, transactionReceipt } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTransaction(transactionhash).then(() => setIsLoading(false));
    console.log(transactionReceipt);
  }, [transactionhash]);

  if (isLoading) {
    return (
      <div>
        <NavBar />
        <div className="flex justify-center items-center">
          <div className="card bg-base-200 shadow-lg m-5 flex justify-center items-center cursor-pointer">
            <div className="card-body">
              <p className="text-xl font-bold text-primary">
                Loading transaction data...
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
      <p>{transactionhash}</p>
    </div>
  );
};

export default TransactionReceipt;

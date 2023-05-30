import React from "react";
import ShowBlocks from "./pages/ShowBlocks";
import BlockTransactions from "./pages/BlockTransactions";
import TransactionReceipt from "./pages/TransactionReceipt";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowBlocks />} />
          <Route
            path="/blocktransactions/:blockhash"
            element={<BlockTransactions />}
          />
          <Route
            path="/transactionreceipt/:transactionhash"
            element={<TransactionReceipt />}
          />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import ShowBlocks from "./pages/ShowBlocks";
import BlockTransactions from "./pages/BlockTransactions";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

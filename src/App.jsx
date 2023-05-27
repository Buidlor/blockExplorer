import React from "react";
import ShowBlocks from "./pages/ShowBlocks";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowBlocks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

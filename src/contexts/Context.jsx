import { createContext, useState, useEffect } from "react";
import { Alchemy, Network } from "alchemy-sdk";

const settings = {
  apiKey: import.meta.env.VITE_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);
const Context = createContext(null);

export const UseGlobalContext = ({ children }) => {
  const [blockNumber, setBlockNumber] = useState();
  const [block, setBlock] = useState();
  const [blocksArray, setBlocksArray] = useState([]);

  async function getBlockNumber() {
    const number = await alchemy.core.getBlockNumber();
    setBlockNumber(number);
  }

  const getBlocksArray = async (number) => {
    const blocks = [];
    for (let i = 0; i < 10; i++) {
      const block = await alchemy.core.getBlock(number - i);
      blocks.push(block);
    }
    setBlocksArray(blocks);
  };

  const getBlock = async () => {
    const block = await alchemy.core.getBlock(blockNumber);
    setBlock(block);
  };

  useEffect(() => {
    getBlockNumber();
    getBlock();
    getBlocksArray(blockNumber);
  }, [blockNumber]);

  return (
    <Context.Provider
      value={{
        blockNumber: blockNumber,
        block: block,
        blocksArray: blocksArray,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;

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
    // array with 10 recent blocks
    const blockNumbers =
      number && Array.from({ length: 10 }, (_, i) => number - 1 - i);
    const blocks =
      blockNumbers &&
      (await Promise.all(
        blockNumbers.map(async (n) => await alchemy.core.getBlock(n))
      ));
    setBlocksArray(blocks);
    console.log(blocks);
  };

  const getBlock = async () => {
    const block = await alchemy.core.getBlock(blockNumber);
    setBlock(block);
  };

  useEffect(() => {
    getBlockNumber();
    getBlock();
    getBlocksArray(blockNumber);
    const interval = setInterval(() => {
      getBlockNumber();
      getBlock();
      getBlocksArray(blockNumber);
    }, 15000);
    return () => clearInterval(interval);
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

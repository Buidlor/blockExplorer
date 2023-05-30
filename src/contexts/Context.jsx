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
  const [clickedBlock, setClickedBlock] = useState();

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
  };

  const getBlock = async (blockNumber) => {
    const block = await alchemy.core.getBlock(blockNumber);
    setBlock(block);
  };

  const getClickedBlock = async (blockHash) => {
    const block = await alchemy.core.getBlock(blockHash);
    setClickedBlock(block);
    return block;
  };

  useEffect(() => {
    getBlockNumber();
    getBlock(blockNumber);
    getBlocksArray(blockNumber);
    const interval = setInterval(() => {
      getBlockNumber();
      getBlock(blockNumber);
      getBlocksArray(blockNumber);
    }, 10000);
    return () => clearInterval(interval);
  }, [blockNumber]);

  return (
    <Context.Provider
      value={{
        blockNumber: blockNumber,
        block: block,
        blocksArray: blocksArray,
        clickedBlock: clickedBlock,
        getClickedBlock: getClickedBlock,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;

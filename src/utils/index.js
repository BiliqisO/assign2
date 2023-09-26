import { ethers } from "ethers";
import { supportedChains } from "../constants";

export const isSupportedChain = (chainId) =>
    supportedChains.includes(Number(chainId));

export const shortenAccount = (account) =>
    `${account.substring(0, 6)}...${account.substring(38)}`;

export const getReadOnlyProvider = () =>
    new ethers.JsonRpcProvider("https://goerli.base.org");

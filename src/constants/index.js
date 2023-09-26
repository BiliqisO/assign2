export const supportedChains = [11155111, 84531];

export const networkInfoMap = {
    11155111: {
        chainId: `0x${(11155111).toString(16)}`,
        chainName: "Sepolia test network",
        rpcUrls: ["https://sepolia.infura.io/v3/"],
        blockExplorerUrls: ["https://sepolia.etherscan.io"],
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18,
        },
    },
    84531: {
        chainId: `0x${(84531).toString(16)}`,
        chainName: "Base Goerli",
        rpcUrls: ["https://goerli.base.org/"],
        blockExplorerUrls: ["https://goerli.basescan.org/"],
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18,
        },
    },
};

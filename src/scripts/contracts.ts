import DiamondABI from "./abis/DiamondABI.json";
import { contractInterfaces, networkInterface } from "@/types";

export const SKALE_LankyIllFunnyTestnet: networkInterface = {
  id: 37084624,
  rpc: "https://testnet.skalenodes.com/v1/lanky-ill-funny-testnet",
};

export const fetchDiamondContract: contractInterfaces = {
  address: "0x7CC5d09557105753b3B2bF035435392727fc3F02",
  abi: DiamondABI.abi,
  chainId: SKALE_LankyIllFunnyTestnet.id,
};

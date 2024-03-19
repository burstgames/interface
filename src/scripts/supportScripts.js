import { Contract, JsonRpcProvider } from "ethers";
const { ethers } = require("ethers");

export function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function convertIpfsUrl(ipfsURL) {
  const ipfsPrefix = "ipfs://";

  if (ipfsURL && ipfsURL.startsWith(ipfsPrefix)) {
    const convertedUrl = `https://ipfs.infura.io/ipfs/${
      ipfsURL.split("://")[1]
    }`;
    return convertedUrl;
  }

  return ipfsURL;
}

export function formatTimestampGMT(timestamp) {
  const date = new Date(timestamp * 1000);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");

  return `${month} ${day}, ${hour}:${minute}`;
}

export function GetContractAt(address, abi, network) {
  const Provider = new JsonRpcProvider(network.rpc);
  if (!address || address.length !== 42 || !abi || !network.id) {
    return;
  }
  return new Contract(address, abi, Provider);
}

export function format6DecimalsAsEther(value) {
  const bigValue = ethers.parseUnits(value.toString(), 6);
  const multipliedValue = bigValue / ethers.toBigInt(1e6);
  const formattedValue = ethers.formatUnits(multipliedValue, 6);
  return formattedValue;
}

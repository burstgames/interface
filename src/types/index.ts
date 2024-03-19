import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  authenticationRequired?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface GetParams {
  slug: any;
  language?: string;
}

export interface contractInterfaces {
  address: `0x${string}`;
  abi: object[];
  chainId: number;
}

export interface networkInterface {
  id: number;
  rpc: string;
}

export interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

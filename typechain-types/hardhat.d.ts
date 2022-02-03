/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IAccountBalance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccountBalance__factory>;
    getContractFactory(
      name: "IClearingHouse",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IClearingHouse__factory>;
    getContractFactory(
      name: "IExchange",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IExchange__factory>;
    getContractFactory(
      name: "IMarketRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMarketRegistry__factory>;
    getContractFactory(
      name: "IOrderBook",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOrderBook__factory>;
    getContractFactory(
      name: "IVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVault__factory>;

    getContractAt(
      name: "IAccountBalance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccountBalance>;
    getContractAt(
      name: "IClearingHouse",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IClearingHouse>;
    getContractAt(
      name: "IExchange",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IExchange>;
    getContractAt(
      name: "IMarketRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMarketRegistry>;
    getContractAt(
      name: "IOrderBook",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOrderBook>;
    getContractAt(
      name: "IVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVault>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}

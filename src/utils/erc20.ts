import { ethers } from "ethers";
import ERC20_ABI from "./ERC20_ABI.json"; // Add your ERC20 ABI here
import ERC20_BYTECODE from "./ERC20_BYTECODE.json"; // Add your ERC20 bytecode here

const provider = new ethers.JsonRpcProvider(process.env.EVM_PROVIDER_URL);
const wallet = new ethers.Wallet(process.env.DEPLOYER_PRIVATE_KEY, provider);

export async function deployErc20(name: string, symbol: string, initialSupply: string) {
  const factory = new ethers.ContractFactory(ERC20_ABI, ERC20_BYTECODE, wallet);
  const contract = await factory.deploy(name, symbol, initialSupply);
  await contract.waitForDeployment();
  return contract.target as string;
}

export async function transferErc20(contractAddress: string, to: string, amount: string) {
  const contract = new ethers.Contract(contractAddress, ERC20_ABI, wallet);
  const tx = await contract.transfer(to, amount);
  await tx.wait();
  return tx.hash;
}
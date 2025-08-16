import { ethers } from "hardhat";
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/../.env.contracts' });

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer:", deployer.address);

  const usdc =
    (process.env.USDC_BASE_SEPOLIA && (await ethers.provider.getNetwork()).chainId === 84532n)
      ? process.env.USDC_BASE_SEPOLIA
      : process.env.USDC_BASE_MAINNET;

  if (!usdc) throw new Error("Set USDC address for current network in .env.contracts");

  const SBT = await ethers.getContractFactory("YouFiSBT");
  const sbt = await SBT.deploy();
  await sbt.deployed();
  console.log("YouFiSBT:", sbt.address);

  const REG = await ethers.getContractFactory("YouFiRegistry");
  const reg = await REG.deploy();
  await reg.deployed();
  console.log("YouFiRegistry:", reg.address);

  const TRE = await ethers.getContractFactory("YouFiTreasury");
  const tre = await TRE.deploy(usdc);
  await tre.deployed();
  console.log("YouFiTreasury:", tre.address);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

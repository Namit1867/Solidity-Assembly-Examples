import { ethers } from "hardhat";

import { ViewContractPrompt } from "hardhat-contract-prompts";

async function temp() {
  const CallDataLoad = await ethers.getContractFactory("CalldataLoad");
  const callDataLoad = await CallDataLoad.deploy();
  await callDataLoad.deployed();

  const vcp = new ViewContractPrompt();
  vcp.Parser(undefined);

  await vcp.prepare("CalldataLoad", "Call Data Load test prompts.");

  const res = await vcp.execute(callDataLoad);
  console.log(res);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
temp().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { ethers } from "hardhat";

import { ViewContractPrompt } from "hardhat-contract-prompts";

async function temp() {
  const CallDataCopy = await ethers.getContractFactory("CallDataCopy");
  const calldataCopy = await CallDataCopy.deploy();
  await calldataCopy.deployed();

  const vcp = new ViewContractPrompt();
  vcp.Parser(undefined);

  await vcp.prepare("CallDataCopy", "Call Data Copy test prompts.");

  const res = await vcp.execute(calldataCopy);
  console.log(res);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
temp().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

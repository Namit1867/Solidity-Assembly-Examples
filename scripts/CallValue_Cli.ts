import { ethers } from "hardhat";

import { ViewContractPrompt } from "hardhat-contract-prompts";

async function temp() {
  const CallValue = await ethers.getContractFactory("CallValue");
  const callValue = await CallValue.deploy();
  await callValue.deployed();

  const vcp = new ViewContractPrompt();
  vcp.Parser(undefined);

  await vcp.prepare("CallValue", "Call Value test prompts.");

  const res = await vcp.execute(callValue);
  console.log(res);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
temp().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

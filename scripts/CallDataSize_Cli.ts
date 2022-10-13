import { ethers } from "hardhat";

import { ViewContractPrompt } from "hardhat-contract-prompts";

async function temp() {
  const CallDataSize = await ethers.getContractFactory("CallDataSize");
  const calldataSize = await CallDataSize.deploy();
  await calldataSize.deployed();

  const vcp = new ViewContractPrompt();
  vcp.Parser(undefined);

  await vcp.prepare("CallDataSize", "Call Data Size test prompts.");

  const res = await vcp.execute(calldataSize);
  console.log(res);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
temp().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

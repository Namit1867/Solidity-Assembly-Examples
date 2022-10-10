import { ethers } from "hardhat";

import { ViewContractPrompt } from "hardhat-contract-prompts";

async function temp() {
  const SDiv = await ethers.getContractFactory("SDiv");
  const sdiv = await SDiv.deploy();
  await sdiv.deployed();

  const vcp = new ViewContractPrompt();
  vcp.Parser(undefined);

  await vcp.prepare("SDiv", "SDiv test prompts.");

  const res = await vcp.execute(sdiv);
  console.log(res);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
temp().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

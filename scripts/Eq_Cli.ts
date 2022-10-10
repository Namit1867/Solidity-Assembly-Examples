import { ethers } from "hardhat";

import { ViewContractPrompt } from "hardhat-contract-prompts";

async function temp() {
  const Eq = await ethers.getContractFactory("Eq");
  const eq = await Eq.deploy();
  await eq.deployed();

  const vcp = new ViewContractPrompt();
  vcp.Parser(undefined);

  await vcp.prepare("Eq", "Equality test prompts.");

  const res = await vcp.execute(eq);
  console.log(res);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
temp().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

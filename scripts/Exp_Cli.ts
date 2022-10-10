import { ethers } from "hardhat";

import { ViewContractPrompt } from "hardhat-contract-prompts";

async function temp() {
  const Exp = await ethers.getContractFactory("Exp");
  const exp = await Exp.deploy();
  await exp.deployed();

  const vcp = new ViewContractPrompt();
  vcp.Parser(undefined);

  await vcp.prepare("Exp", "Exponential test prompts.");

  const res = await vcp.execute(exp);
  console.log(res);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
temp().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

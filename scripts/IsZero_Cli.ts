import { ethers } from "hardhat";

import { ViewContractPrompt } from "hardhat-contract-prompts";

async function temp() {
  const IsZero = await ethers.getContractFactory("IsZero");
  const isZero = await IsZero.deploy();
  await isZero.deployed();

  const vcp = new ViewContractPrompt();
  vcp.Parser(undefined);

  await vcp.prepare("IsZero", "Is Zero test prompts.");

  const res = await vcp.execute(isZero);
  console.log(res);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
temp().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

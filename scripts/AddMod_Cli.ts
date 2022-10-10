import { ethers } from "hardhat";

import { ViewContractPrompt } from "hardhat-contract-prompts";

async function temp() {
  const AddMod = await ethers.getContractFactory("AddMod");
  const addMod = await AddMod.deploy();
  await addMod.deployed();

  const vcp = new ViewContractPrompt();
  vcp.Parser(undefined);

  await vcp.prepare("AddMod", "Addition Modulo test prompts.");

  const res = await vcp.execute(addMod);
  console.log(res);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
temp().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

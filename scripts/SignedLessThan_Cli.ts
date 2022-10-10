import { ethers } from "hardhat";

import { ViewContractPrompt } from "hardhat-contract-prompts";

async function temp() {
  const Slt = await ethers.getContractFactory("Slt");
  const slt = await Slt.deploy();
  await slt.deployed();

  const vcp = new ViewContractPrompt();
  vcp.Parser(undefined);

  await vcp.prepare("Slt", "Signed Less than test prompts.");

  const res = await vcp.execute(slt);
  console.log(res);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
temp().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

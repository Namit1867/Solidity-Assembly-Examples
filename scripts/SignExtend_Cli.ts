import { ethers } from "hardhat";

import { ViewContractPrompt } from "hardhat-contract-prompts";

async function temp() {
  const SignExtend = await ethers.getContractFactory("SignExtend");
  const signExtend = await SignExtend.deploy();
  await signExtend.deployed();

  const vcp = new ViewContractPrompt();
  vcp.Parser(undefined);

  await vcp.prepare("SignExtend", "SignExtend test prompts.");

  const res = await vcp.execute(signExtend);
  console.log(res);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
temp().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

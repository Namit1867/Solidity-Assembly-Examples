import { ethers } from "hardhat";

import { ViewContractPrompt } from 'hardhat-contract-prompts';

async function temp() {
    const MulMod = await ethers.getContractFactory("MulMod");
    const mulMod = await MulMod.deploy();
    await mulMod.deployed();

    const vcp = new ViewContractPrompt();
    vcp.Parser(undefined);
    
    await vcp.prepare('MulMod', 'Multiplication Modulo test prompts.')

    const res = await vcp.execute(mulMod);
    console.log(res);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
temp().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

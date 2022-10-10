import { ethers } from "hardhat";

import { ViewContractPrompt } from 'hardhat-contract-prompts';

async function temp() {
    const Gt = await ethers.getContractFactory("Gt");
    const gt = await Gt.deploy();
    await gt.deployed();

    const vcp = new ViewContractPrompt();
    vcp.Parser(undefined);
    
    await vcp.prepare('Gt', 'Less than test prompts.')

    const res = await vcp.execute(gt);
    console.log(res);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
temp().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

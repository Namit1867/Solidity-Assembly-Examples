import { ethers } from "hardhat";

import { ViewContractPrompt } from 'hardhat-contract-prompts';

async function temp() {
    const Lt = await ethers.getContractFactory("Lt");
    const lt = await Lt.deploy();
    await lt.deployed();

    const vcp = new ViewContractPrompt();
    vcp.Parser(undefined);
    
    await vcp.prepare('Lt', 'Less than test prompts.')

    const res = await vcp.execute(lt);
    console.log(res);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
temp().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

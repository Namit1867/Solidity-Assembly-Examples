import { ethers } from "hardhat";

import { ViewContractPrompt } from 'hardhat-contract-prompts';

async function temp() {
    const SMod = await ethers.getContractFactory("SMod");
    const smod = await SMod.deploy();
    await smod.deployed();

    const vcp = new ViewContractPrompt();
    vcp.Parser(undefined);
    
    await vcp.prepare('SMod', 'Signed Mod test prompts.')

    const res = await vcp.execute(smod);
    console.log(res);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
temp().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

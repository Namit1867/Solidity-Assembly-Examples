import { ethers } from "hardhat";

import { ViewContractPrompt } from 'hardhat-contract-prompts';

async function temp() {
    const Mod = await ethers.getContractFactory("Mod");
    const mod = await Mod.deploy();
    await mod.deployed();

    const vcp = new ViewContractPrompt();
    vcp.Parser(undefined);
    
    await vcp.prepare('Mod', 'Mod test prompts.')

    const res = await vcp.execute(mod);
    console.log(res);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
temp().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

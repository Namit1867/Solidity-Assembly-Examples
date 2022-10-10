import { expect } from "chai";
import { ethers } from "hardhat";

describe("6. Modulo using Assembly and Normal Syntax :-", function () {
  let modContractInstance: any;
  let a = 5;
  let b = 3;
  let c = 2;

  it("Should Deploy the contract", async function () {
    const modContract = await ethers.getContractFactory("Mod");
    modContractInstance = await modContract.deploy();
  });

  it("Should call modulo using assembly", async function () {
    expect(await modContractInstance.modAssembly(a, b)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await modContractInstance.estimateGas.modAssembly(a, b)
    );
  });

  it("Should call modulo without assembly", async function () {
    expect(await modContractInstance.modSolidity(a, b)).to.equal(c);
    console.log(
      "Normal Gas Cost",
      await modContractInstance.estimateGas.modSolidity(a, b)
    );
  });


});

import { expect } from "chai";
import { ethers } from "hardhat";

describe("Addition Modulo using Assembly and Normal Syntax", function () {
  let addModContractInstance: any;
  let a = 2;
  let b = 3;
  let c = 3;
  let d = 2

  it("Should Deploy the contract", async function () {
    const addModContract = await ethers.getContractFactory("AddMod");
    addModContractInstance = await addModContract.deploy();
  });

  it("Should call addition modulo using assembly", async function () {
    expect(await addModContractInstance.addModAssembly(a, b, c)).to.equal(d);
    console.log(
      "Assembly Gas Cost",
      await addModContractInstance.estimateGas.addModAssembly(a, b, c)
    );
  });

  it("Should call addition modulo without assembly", async function () {
    expect(await addModContractInstance.addModSolidity(a, b, c)).to.equal(d);
    console.log(
      "Normal Gas Cost",
      await addModContractInstance.estimateGas.addModSolidity(a, b, c)
    );
  });
});

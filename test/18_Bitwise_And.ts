import { expect } from "chai";
import { ethers } from "hardhat";

describe("18. Bitwise And using Assembly and Normal Syntax :-", function () {
  let andContractInstance: any;
  let a = 2;
  let b = 3;
  let c = 2;

  it("Should Deploy the contract", async function () {
    const andContract = await ethers.getContractFactory("And");
    andContractInstance = await andContract.deploy();
  });

  it("Should call Bitwise And using assembly", async function () {
    expect(await andContractInstance.andAssembly(a, b)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await andContractInstance.estimateGas.andAssembly(a, b)
    );
  });

  it("Should call Bitwise And without assembly", async function () {
    expect(await andContractInstance.andSolidity(a, b)).to.equal(c);
    console.log(
      "Normal Gas Cost",
      await andContractInstance.estimateGas.andSolidity(a, b)
    );
  });


});

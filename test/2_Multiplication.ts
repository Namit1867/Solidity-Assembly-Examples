import { expect } from "chai";
import { ethers } from "hardhat";

describe("Multiplication using Assembly and Normal Syntax", function () {
  let mulContractInstance: any;
  let a = 3;
  let b = 2;
  let c = 6;

  it("Should Deploy the contract", async function () {
    const mulContract = await ethers.getContractFactory("Mul");
    mulContractInstance = await mulContract.deploy();
  });

  it("Should call multiplication using assembly", async function () {
    expect(await mulContractInstance.mulAssembly(a, b)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await mulContractInstance.estimateGas.mulAssembly(a, b)
    );
  });

  it("Should call multipliaction without assembly", async function () {
    expect(await mulContractInstance.mulSolidity(a, b)).to.equal(c);
    console.log(
      "Normal Gas Cost",
      await mulContractInstance.estimateGas.mulSolidity(a, b)
    );
  });
});

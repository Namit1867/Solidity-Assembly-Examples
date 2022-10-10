import { expect } from "chai";
import { ethers } from "hardhat";

describe("17. IsZero using Assembly and Normal Syntax :-", function () {
  let isZeroContractInstance: any;
  let a = 1;
  let c = false;

  it("Should Deploy the contract", async function () {
    const isZeroContract = await ethers.getContractFactory("IsZero");
    isZeroContractInstance = await isZeroContract.deploy();
  });

  it("Should call IsZero using assembly", async function () {
    expect(await isZeroContractInstance.isZeroAssembly(a)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await isZeroContractInstance.estimateGas.isZeroAssembly(a)
    );
  });

  it("Should call IsZero without assembly", async function () {
    expect(await isZeroContractInstance.isZeroSolidity(a)).to.equal(c);
    console.log(
      "Normal Gas Cost",
      await isZeroContractInstance.estimateGas.isZeroSolidity(a)
    );
  });

  it("--------------------------------------------", async function () {});
});

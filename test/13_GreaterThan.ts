import { expect } from "chai";
import { ethers } from "hardhat";

describe("13. Greater Than using Assembly and Normal Syntax :-", function () {
  let greaterThanContractInstance: any;
  let a = 2;
  let b = 1;
  let c = true;

  it("Should Deploy the contract", async function () {
    const greaterThanContract = await ethers.getContractFactory("Gt");
    greaterThanContractInstance = await greaterThanContract.deploy();
  });

  it("Should call greater than using assembly", async function () {
    expect(await greaterThanContractInstance.gtAssembly(a, b)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await greaterThanContractInstance.estimateGas.gtAssembly(a, b)
    );
  });

  it("Should call greater than without assembly", async function () {
    expect(await greaterThanContractInstance.gtSolidity(a, b)).to.equal(c);
    console.log(
      "Normal Gas Cost",
      await greaterThanContractInstance.estimateGas.gtSolidity(a, b)
    );
  });

  it("--------------------------------------------", async function () {});
});

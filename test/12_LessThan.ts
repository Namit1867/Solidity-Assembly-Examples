import { expect } from "chai";
import { ethers } from "hardhat";

describe("12. Less Than using Assembly and Normal Syntax :-", function () {
  let lessThanContractInstance: any;
  let a = 1;
  let b = 2;
  let c = true;

  it("Should Deploy the contract", async function () {
    const lessThanContract = await ethers.getContractFactory("Lt");
    lessThanContractInstance = await lessThanContract.deploy();
  });

  it("Should call less than using assembly", async function () {
    expect(await lessThanContractInstance.ltAssembly(a, b)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await lessThanContractInstance.estimateGas.ltAssembly(a, b)
    );
  });

  it("Should call less than without assembly", async function () {
    expect(await lessThanContractInstance.ltSolidity(a, b)).to.equal(c);
    console.log(
      "Normal Gas Cost",
      await lessThanContractInstance.estimateGas.ltSolidity(a, b)
    );
  });
});

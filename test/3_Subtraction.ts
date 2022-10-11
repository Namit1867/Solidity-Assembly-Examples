import { expect } from "chai";
import { ethers } from "hardhat";

describe("3. Subtraction using Assembly and Normal Syntax :-", function () {
  let subContractInstance: any;
  let a = 3;
  let b = 2;
  let c = 1;

  it("Should Deploy the contract", async function () {
    const subContract = await ethers.getContractFactory("Sub");
    subContractInstance = await subContract.deploy();
  });

  it("Should call subtraction using assembly", async function () {
    expect(await subContractInstance.subAssembly(a, b)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await subContractInstance.estimateGas.subAssembly(a, b)
    );
  });

  it("Should call subtraction without assembly", async function () {
    expect(await subContractInstance.subSolidity(a, b)).to.equal(c);
    console.log(
      "Normal Gas Cost",
      await subContractInstance.estimateGas.subSolidity(a, b)
    );
  });
});

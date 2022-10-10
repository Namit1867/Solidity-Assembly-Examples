import { expect } from "chai";
import { ethers } from "hardhat";

describe("10. Exponential using Assembly and Normal Syntax :-", function () {
  let expContractInstance: any;
  let a = 2;
  let b = 10;
  let c = 1024;

  it("Should Deploy the contract", async function () {
    const expContract = await ethers.getContractFactory("Exp");
    expContractInstance = await expContract.deploy();
  });

  it("Should call exponential using assembly", async function () {
    expect(await expContractInstance.expAssembly(a, b)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await expContractInstance.estimateGas.expAssembly(a, b)
    );
  });

  it("Should call exponential without assembly", async function () {
    expect(await expContractInstance.expSolidity(a, b)).to.equal(c);
    console.log(
      "Normal Gas Cost",
      await expContractInstance.estimateGas.expSolidity(a, b)
    );
  });


});

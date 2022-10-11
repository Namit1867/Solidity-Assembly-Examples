import { expect } from "chai";
import { ethers } from "hardhat";

describe("4. Division using Assembly and Normal Syntax :-", function () {
  let divContractInstance: any;
  let a = 6;
  let b = 3;
  let c = 2;

  it("Should Deploy the contract", async function () {
    const divContract = await ethers.getContractFactory("Div");
    divContractInstance = await divContract.deploy();
  });

  it("Should call division using assembly", async function () {
    expect(await divContractInstance.divAssembly(a, b)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await divContractInstance.estimateGas.divAssembly(a, b)
    );
  });

  it("Should call division without assembly", async function () {
    expect(await divContractInstance.divSolidity(a, b)).to.equal(c);
    console.log(
      "Normal Gas Cost",
      await divContractInstance.estimateGas.divSolidity(a, b)
    );
  });
});

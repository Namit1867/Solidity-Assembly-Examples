import { expect } from "chai";
import { ethers } from "hardhat";

describe("20. Bitwise Xor using Assembly and Normal Syntax :-", function () {
  let xorContractInstance: any;
  let a = 2;
  let b = 3;
  let c = 1;

  it("Should Deploy the contract", async function () {
    const xorContract = await ethers.getContractFactory("Xor");
    xorContractInstance = await xorContract.deploy();
  });

  it("Should call Bitwise Xor using assembly", async function () {
    expect(await xorContractInstance.xorAssembly(a, b)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await xorContractInstance.estimateGas.xorAssembly(a, b)
    );
  });

  it("Should call Bitwise Xor without assembly", async function () {
    expect(await xorContractInstance.xorSolidity(a, b)).to.equal(c);
    console.log(
      "Normal Gas Cost",
      await xorContractInstance.estimateGas.xorSolidity(a, b)
    );
  });
});

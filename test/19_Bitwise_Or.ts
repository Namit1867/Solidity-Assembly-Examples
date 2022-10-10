import { expect } from "chai";
import { ethers } from "hardhat";

describe("19. Bitwise Or using Assembly and Normal Syntax :-", function () {
  let orContractInstance: any;
  let a = 2;
  let b = 3;
  let c = 3;

  it("Should Deploy the contract", async function () {
    const orContract = await ethers.getContractFactory("Or");
    orContractInstance = await orContract.deploy();
  });

  it("Should call Bitwise Or using assembly", async function () {
    expect(await orContractInstance.orAssembly(a, b)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await orContractInstance.estimateGas.orAssembly(a, b)
    );
  });

  it("Should call Bitwise And without assembly", async function () {
    expect(await orContractInstance.orSolidity(a, b)).to.equal(c);
    console.log(
      "Normal Gas Cost",
      await orContractInstance.estimateGas.orSolidity(a, b)
    );
  });
});

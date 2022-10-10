import { expect } from "chai";
import { ethers } from "hardhat";

describe("14. Signed Less Than using Assembly and Normal Syntax :-", function () {
  let signedLessThanContractInstance: any;
  let a = -1;
  let b = 1;
  let c = true;

  it("Should Deploy the contract", async function () {
    const signedLessThanContract = await ethers.getContractFactory("Slt");
    signedLessThanContractInstance = await signedLessThanContract.deploy();
  });

  it("Should call signed less than using assembly", async function () {
    expect(await signedLessThanContractInstance.sltAssembly(a, b)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await signedLessThanContractInstance.estimateGas.sltAssembly(a, b)
    );
  });

  it("Should call signed less than without assembly", async function () {
    expect(await signedLessThanContractInstance.sltSolidity(a, b)).to.equal(c);
    console.log(
      "Normal Gas Cost",
      await signedLessThanContractInstance.estimateGas.sltSolidity(a, b)
    );
  });

  it("--------------------------------------------", async function () {});
});

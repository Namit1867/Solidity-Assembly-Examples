import { expect } from "chai";
import { ethers } from "hardhat";

describe("15. Signed More Than using Assembly and Normal Syntax :-", function () {
  let signedMoreThanContractInstance: any;
  let a = -1;
  let b = 1;
  let c = false;

  it("Should Deploy the contract", async function () {
    const signedMoreThanContract = await ethers.getContractFactory("Sgt");
    signedMoreThanContractInstance = await signedMoreThanContract.deploy();
  });

  it("Should call signed more than using assembly", async function () {
    expect(await signedMoreThanContractInstance.sgtAssembly(a, b)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await signedMoreThanContractInstance.estimateGas.sgtAssembly(a, b)
    );
  });

  it("Should call signed more than without assembly", async function () {
    expect(await signedMoreThanContractInstance.sgtSolidity(a, b)).to.equal(c);
    console.log(
      "Normal Gas Cost",
      await signedMoreThanContractInstance.estimateGas.sgtSolidity(a, b)
    );
  });

  it("--------------------------------------------", async function () {});
});

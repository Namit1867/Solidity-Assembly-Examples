import { expect } from "chai";
import { ethers } from "hardhat";

describe("Signed Modulo using Assembly and Normal Syntax", function () {
  let smodContractInstance: any;
  let a = -5;
  let b = 3;
  let c = -2;

  it("Should Deploy the contract", async function () {
    const smodContract = await ethers.getContractFactory("SMod");
    smodContractInstance = await smodContract.deploy();
  });

  it("Should call signed modulo using assembly", async function () {
    expect(await smodContractInstance.smodAssembly(a, b)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await smodContractInstance.estimateGas.smodAssembly(a, b)
    );
  });

  it("Should call signed modulo without assembly", async function () {
    expect(await smodContractInstance.smodSolidity(a, b)).to.equal(c);
    console.log(
      "Normal Gas Cost",
      await smodContractInstance.estimateGas.smodSolidity(a, b)
    );
  });
});

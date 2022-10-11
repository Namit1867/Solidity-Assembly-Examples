import { expect } from "chai";
import { ethers } from "hardhat";

describe("16. Equality using Assembly and Normal Syntax :-", function () {
  let eqContractInstance: any;
  let a = 1;
  let b = 2;
  let c = false;

  it("Should Deploy the contract", async function () {
    const eqContract = await ethers.getContractFactory("Eq");
    eqContractInstance = await eqContract.deploy();
  });

  it("Should call equality using assembly", async function () {
    expect(await eqContractInstance.eqAssembly(a, b)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await eqContractInstance.estimateGas.eqAssembly(a, b)
    );
  });

  it("Should call equality without assembly", async function () {
    expect(await eqContractInstance.eqSolidity(a, b)).to.equal(c);
    console.log(
      "Normal Gas Cost",
      await eqContractInstance.estimateGas.eqSolidity(a, b)
    );
  });
});

import { expect } from "chai";
import { ethers } from "hardhat";

describe("9. Multiplication Modulo using Assembly and Normal Syntax :-", function () {
  let mulModContractInstance: any;
  let a = 2;
  let b = 4;
  let c = 3;
  let d = 2;

  it("Should Deploy the contract", async function () {
    const mulModContract = await ethers.getContractFactory("MulMod");
    mulModContractInstance = await mulModContract.deploy();
  });

  it("Should call multiplication modulo using assembly", async function () {
    expect(await mulModContractInstance.mulModAssembly(a, b, c)).to.equal(d);
    console.log(
      "Assembly Gas Cost",
      await mulModContractInstance.estimateGas.mulModAssembly(a, b, c)
    );
  });

  it("Should call multiplication modulo without assembly", async function () {
    expect(await mulModContractInstance.mulModSolidity(a, b, c)).to.equal(d);
    console.log(
      "Normal Gas Cost",
      await mulModContractInstance.estimateGas.mulModSolidity(a, b, c)
    );
  });

  it("--------------------------------------------", async function () {});
});

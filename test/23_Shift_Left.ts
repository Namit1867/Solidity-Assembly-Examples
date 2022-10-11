import { expect } from "chai";
import { ethers } from "hardhat";

describe("23. Shift Left using Assembly and Normal Syntax :-", function () {
  let shiftLeftContractInstance: any;
  let a = 1;
  let b = 7;
  let c = 14;

  //b << a
  //0000 0111 << 1
  //0000 1110 = 14

  it("Should Deploy the contract", async function () {
    const shiftLeftContract = await ethers.getContractFactory("Shl");
    shiftLeftContractInstance = await shiftLeftContract.deploy();
  });

  it("Should call Shift Left using assembly", async function () {
    expect(await shiftLeftContractInstance.shlAssembly(a, b)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await shiftLeftContractInstance.estimateGas.shlAssembly(a, b)
    );
  });

  it("Should call Shift Left without assembly", async function () {
    expect(await shiftLeftContractInstance.shlSolidity(a, b)).to.equal(c);
    console.log(
      "Normal Gas Cost",
      await shiftLeftContractInstance.estimateGas.shlSolidity(a, b)
    );
  });
});

import { expect } from "chai";
import { ethers } from "hardhat";

describe("24. Shift Right using Assembly and Normal Syntax :-", function () {
  let shiftRightContractInstance: any;
  let a = 1;
  let b = 7;
  let c = 3;

  //b >> a
  //0000 0111 >> 1
  //0000 0011 = 3

  it("Should Deploy the contract", async function () {
    const shiftRightContract = await ethers.getContractFactory("Shr");
    shiftRightContractInstance = await shiftRightContract.deploy();
  });

  it("Should call Shift Right using assembly", async function () {
    expect(await shiftRightContractInstance.shrAssembly(a, b)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await shiftRightContractInstance.estimateGas.shrAssembly(a, b)
    );
  });

  it("Should call Shift Right without assembly", async function () {
    expect(await shiftRightContractInstance.shrSolidity(a, b)).to.equal(c);
    console.log(
      "Normal Gas Cost",
      await shiftRightContractInstance.estimateGas.shrSolidity(a, b)
    );
  });
});

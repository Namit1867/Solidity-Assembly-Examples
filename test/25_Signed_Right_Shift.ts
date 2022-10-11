import { expect } from "chai";
import { ethers } from "hardhat";

describe("25. Signed Shift Right using Assembly and Normal Syntax :-", function () {
  let signedShiftRightContractInstance: any;
  let a = 1;
  let b = -7;
  let c = -4;

  //b >> a
  //-7 = 1111111111111111111111111111111111111111111111111111111111111001 >> 1
  //-4 = 0111111111111111111111111111111111111111111111111111111111111100 

  it("Should Deploy the contract", async function () {
    const signedShiftRightContract = await ethers.getContractFactory("Sar");
    signedShiftRightContractInstance = await signedShiftRightContract.deploy();
  });

  it("Should call Signed Right Shift using assembly", async function () {
    expect(await signedShiftRightContractInstance.sarAssembly(a, b)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await signedShiftRightContractInstance.estimateGas.sarAssembly(a, b)
    );
  });

  it("Should call Signed Right Shift without assembly", async function () {
    expect(await signedShiftRightContractInstance.sarSolidity(a, b)).to.equal(c);
    console.log(
      "Normal Gas Cost",
      await signedShiftRightContractInstance.estimateGas.sarSolidity(a, b)
    );
  });
});

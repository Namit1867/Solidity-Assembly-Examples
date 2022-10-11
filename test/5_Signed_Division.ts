import { expect } from "chai";
import { ethers } from "hardhat";

describe("5. Signed Division using Assembly and Normal Syntax :-", function () {
  let sdivContractInstance: any;
  let a = 2;
  let b = -1;
  let c = -2;

  it("Should Deploy the contract", async function () {
    const sdivContract = await ethers.getContractFactory("SDiv");
    sdivContractInstance = await sdivContract.deploy();
  });

  it("Should call signed division using assembly", async function () {
    expect(await sdivContractInstance.sdivAssembly(a, b)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await sdivContractInstance.estimateGas.sdivAssembly(a, b)
    );
  });

  it("Should call signed division without assembly", async function () {
    expect(await sdivContractInstance.sdivSolidity(a, b)).to.equal(c);
    console.log(
      "Normal Gas Cost",
      await sdivContractInstance.estimateGas.sdivSolidity(a, b)
    );
  });
});

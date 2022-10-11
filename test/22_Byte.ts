import { expect } from "chai";
import { ethers } from "hardhat";

describe("22. Extracting Single Byte from word using Assembly and Normal Syntax :-", function () {
  let byteContractInstance: any;
  let a = 32766;
  let b = 31;
  let c = 254;

  it("Should Deploy the contract", async function () {
    const byteContract = await ethers.getContractFactory("Byte");
    byteContractInstance = await byteContract.deploy();
  });

  it("Should call Byte using assembly", async function () {
    expect(await byteContractInstance.byteAssembly(b, a)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await byteContractInstance.estimateGas.byteAssembly(a, b)
    );
  });

  it("Should call Byte using solidity", async function () {
    expect(await byteContractInstance.byteSolidity(a, b)).to.equal(c);
    console.log(
      "Solidity Gas Cost",
      await byteContractInstance.estimateGas.byteSolidity(a, b)
    );
  });
});

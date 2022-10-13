import { expect } from "chai";
import { ethers } from "hardhat";


describe("32. CallDataSize using Assembly and Normal Syntax :-", function () {
  let callDataSizeContractInstance: any;
  let a = 2;
  let b = 10;
  let c = 64

  it("Should Deploy the contract", async function () {
    const callDataSizeContract = await ethers.getContractFactory("CallDataSize");
    callDataSizeContractInstance = await callDataSizeContract.deploy();
  });

  it("Should call Call Data Size using assembly", async function () {
    expect(await callDataSizeContractInstance.callDataSizeAssembly(a, b)).to.equal(
      c
    );
    console.log(
      "Assembly Gas Cost",
      await callDataSizeContractInstance.estimateGas.callDataSizeAssembly(a, b)
    );
  });
});

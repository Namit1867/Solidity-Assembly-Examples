import { expect } from "chai";
import { ethers } from "hardhat";

describe("29. TX Caller Address using Assembly and Normal Syntax :-", function () {
  let callerContractInstance: any;
  let account: any;

  it("Should Deploy the contract", async function () {
    const callerContract = await ethers.getContractFactory("Caller");
    callerContractInstance = await callerContract.deploy();
    [account] = await ethers.getSigners();
  });

  it("Should call Caller Operation using assembly", async function () {
    expect(await callerContractInstance.callerAssembly()).to.equal(
      account.address
    );
    console.log(
      "Assembly Gas Cost",
      await callerContractInstance.estimateGas.callerAssembly()
    );
  });

  it("Should call Caller Operation without assembly", async function () {
    expect(await callerContractInstance.callerSolidity()).to.equal(
      account.address
    );
    console.log(
      "Normal Gas Cost",
      await callerContractInstance.estimateGas.callerSolidity()
    );
  });
});

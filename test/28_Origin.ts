import { expect } from "chai";
import { ethers } from "hardhat";

describe("28. TX Origin Address using Assembly and Normal Syntax :-", function () {
  let originContractInstance: any;
  let account: any;

  it("Should Deploy the contract", async function () {
    const originContract = await ethers.getContractFactory("Origin");
    originContractInstance = await originContract.deploy();
    [account] = await ethers.getSigners();
  });

  it("Should call Origin Operation using assembly", async function () {
    expect(await originContractInstance.originAssembly()).to.equal(
      account.address
    );
    console.log(
      "Assembly Gas Cost",
      await originContractInstance.estimateGas.originAssembly()
    );
  });

  it("Should call Origin Operation without assembly", async function () {
    expect(await originContractInstance.originSolidity()).to.equal(
      account.address
    );
    console.log(
      "Normal Gas Cost",
      await originContractInstance.estimateGas.originSolidity()
    );
  });
});

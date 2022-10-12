import { expect } from "chai";
import { ethers } from "hardhat";

describe("26. Current Executing Contract Address using Assembly and Normal Syntax :-", function () {
  let addressContractInstance: any;

  it("Should Deploy the contract", async function () {
    const addressContract = await ethers.getContractFactory("Address");
    addressContractInstance = await addressContract.deploy();
  });

  it("Should call Address Operation using assembly", async function () {
    expect(await addressContractInstance.addressAssembly()).to.equal(
      addressContractInstance.address
    );
    console.log(
      "Assembly Gas Cost",
      await addressContractInstance.estimateGas.addressAssembly()
    );
  });

  it("Should call Address Operation without assembly", async function () {
    expect(await addressContractInstance.addressSolidity()).to.equal(
      addressContractInstance.address
    );
    console.log(
      "Normal Gas Cost",
      await addressContractInstance.estimateGas.addressSolidity()
    );
  });
});

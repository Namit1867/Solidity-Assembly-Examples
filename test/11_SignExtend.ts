import { expect } from "chai";
import { ethers } from "hardhat";

//https://ethereum.stackexchange.com/questions/63062/evm-signextend-opcode-explanation

describe("11. SignExternd using Assembly and Normal Syntax :-", function () {
  let signExtendContractInstance: any;
  let a = 2;
  let b = 10;
  let c = 10;

  it("Should Deploy the contract", async function () {
    const signExtendContract = await ethers.getContractFactory("SignExtend");
    signExtendContractInstance = await signExtendContract.deploy();
  });

  it("Should call signExtend using assembly", async function () {
    expect(await signExtendContractInstance.signExtendAssembly(a, b)).to.equal(
      c
    );
    console.log(
      "Assembly Gas Cost",
      await signExtendContractInstance.estimateGas.signExtendAssembly(a, b)
    );
  });


});

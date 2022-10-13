import { expect } from "chai";
import { ethers } from "hardhat";

describe("30. Call Data Load or Input values using Assembly and Normal Syntax :-", function () {
  let callDataLoadContractInstance: any;
  let a = 1;

  it("Should Deploy the contract", async function () {
    const callDataLoadContract = await ethers.getContractFactory("CalldataLoad");
    callDataLoadContractInstance = await callDataLoadContract.deploy();
  });

  it("Should call Call Data Load Operation using assembly", async function () {
    expect(await callDataLoadContractInstance.callDataLoadAssembly(a)).to.equal(a);
    console.log(
      "Assembly Gas Cost",
      await callDataLoadContractInstance.estimateGas.callDataLoadAssembly(a)
    );
  });

  it("Should call msg.value Operation without assembly", async function () {
    expect(await callDataLoadContractInstance.callDataLoadSolidity(a)).to.equal(
      a
    );
    console.log(
      "Normal Gas Cost",
      await callDataLoadContractInstance.estimateGas.callDataLoadSolidity(a)
    );
  });
});

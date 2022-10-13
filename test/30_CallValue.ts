import { expect } from "chai";
import { ethers } from "hardhat";

describe("30. Call Value or msg.value using Assembly and Normal Syntax :-", function () {
  let callValueContractInstance: any;
  let weiToSend = ethers.utils.parseEther("1.0").toString();

  it("Should Deploy the contract", async function () {
    const callValueContract = await ethers.getContractFactory("CallValue");
    callValueContractInstance = await callValueContract.deploy();
  });

  it("Should call Call Value Operation using assembly", async function () {
    const receipt = await callValueContractInstance.callValueAssembly({value:weiToSend})
    expect(weiToSend).to.equal(
      receipt.value
    );
    console.log(
      "Assembly Gas Cost",
      await callValueContractInstance.estimateGas.callValueAssembly({value:weiToSend})
    );
  });

  it("Should call msg.value Operation without assembly", async function () {
    const receipt = await callValueContractInstance.callValueSolidity({value:weiToSend})
    expect(receipt.value).to.equal(
      weiToSend
    );
    console.log(
      "Normal Gas Cost",
      await callValueContractInstance.estimateGas.callValueSolidity({value:weiToSend})
    );
  });
});

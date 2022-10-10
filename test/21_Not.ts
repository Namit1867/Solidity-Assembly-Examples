import { expect } from "chai";
import { ethers } from "hardhat";

describe("21. Bitwise Not using Assembly and Normal Syntax :-", function () {
  let notContractInstance: any;
  let a = "115792089237316195423570985008687907853269984665640564039457584007913129639927";
  let c = 8;

  it("Should Deploy the contract", async function () {
    const notContract = await ethers.getContractFactory("Not");
    notContractInstance = await notContract.deploy();
  });

  it("Should call Bitwise Not using assembly", async function () {
    expect(await notContractInstance.notAssembly(a)).to.equal(c);
    console.log(
      "Assembly Gas Cost",
      await notContractInstance.estimateGas.notAssembly(a)
    );
  });

  it("Should call Bitwise Not without assembly", async function () {
    expect(await notContractInstance.notSolidity(a)).to.equal(c);
    console.log(
      "Normal Gas Cost",
      await notContractInstance.estimateGas.notSolidity(a)
    );
  });


});

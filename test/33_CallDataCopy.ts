import { expect } from "chai";
import { ethers } from "hardhat";

describe("33. Call Data Copy using Assembly and Normal Syntax :-", function () {
    let callDataCopyContractInstance: any;
    let a = 1;
    let b = 2;
  
    it("Should Deploy the contract", async function () {
      const callDataCopyContract = await ethers.getContractFactory("CallDataCopy");
      callDataCopyContractInstance = await callDataCopyContract.deploy();
    });
  
    it("Should call Call Data Copy Operation using assembly", async function () {
      expect(await callDataCopyContractInstance.callDataCopyAssembly(a,b)).to.equal(b);
    });
  
    it("Should call Call Data Copy Operation without assembly", async function () {
      expect(await callDataCopyContractInstance.callDataCopySolidity(a,b)).to.equal(
        b
      );
    });
  });
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Addition using Assembly and Normal Syntax", function () {
  let addContractInstance: any;
  let a = 1;
  let b = 2;
  let c = 3;

  describe("Deployment", function () {
    it("Should Deploy the contract", async function () {
      const addContract = await ethers.getContractFactory("Add");
      addContractInstance = await addContract.deploy();
    });

    it("Should call addition using assembly", async function () {
      expect(await addContractInstance.addAssembly(a, b)).to.equal(c);
      console.log(
        "Assembly Gas Cost",
        await addContractInstance.estimateGas.addAssembly(a, b)
      );
    });

    it("Should call addition without assembly", async function () {
      expect(await addContractInstance.addSolidity(a, b)).to.equal(c);
      console.log(
        "Normal Gas Cost",
        await addContractInstance.estimateGas.addSolidity(a, b)
      );
    });
  });
});

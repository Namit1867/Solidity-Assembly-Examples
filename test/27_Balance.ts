import { expect } from "chai";
import { ethers } from "hardhat";

describe("27. Balance Of Account using Assembly and Normal Syntax :-", function () {
  let balanceContractInstance: any;
  let accountBalance: any = 0;
  let account: any;

  it("Should Deploy the contract", async function () {
    const balanceContract = await ethers.getContractFactory("Balance");
    balanceContractInstance = await balanceContract.deploy();
    [account] = await ethers.getSigners();
    accountBalance = await ethers.provider.getBalance(account.address);
  });

  it("Should call Balance Of Account Operation using assembly", async function () {
    expect(
      await balanceContractInstance.balanceAssembly(account.address)
    ).to.equal(accountBalance);
    console.log(
      "Assembly Gas Cost",
      await balanceContractInstance.estimateGas.balanceAssembly(account.address)
    );
  });

  it("Should call Balance Of Account Operation without assembly", async function () {
    expect(
      await balanceContractInstance.balanceSolidity(account.address)
    ).to.equal(accountBalance);
    console.log(
      "Normal Gas Cost",
      await balanceContractInstance.estimateGas.balanceSolidity(account.address)
    );
  });
});

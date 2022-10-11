import { expect } from "chai";
import { ethers } from "hardhat";

let gasInfoArr: any = [];

describe("1. Addition using Assembly and Normal Syntax :-", function () {
  let addContractInstance: any;
  let a = 1;
  let b = 2;
  let c = 3;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const addContract = await ethers.getContractFactory("Add");
    addContractInstance = await addContract.deploy();
  });

  it("Should call addition using assembly", async function () {
    expect(await addContractInstance.addAssembly(a, b)).to.equal(c);

    assembly = Number(await addContractInstance.estimateGas.addAssembly(a, b));
  });

  it("Should call addition without assembly", async function () {
    expect(await addContractInstance.addSolidity(a, b)).to.equal(c);
    solidity = Number(await addContractInstance.estimateGas.addSolidity(a, b));

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Addition",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

describe("2. Multiplication using Assembly and Normal Syntax :-", function () {
  let mulContractInstance: any;
  let a = 3;
  let b = 2;
  let c = 6;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const mulContract = await ethers.getContractFactory("Mul");
    mulContractInstance = await mulContract.deploy();
  });

  it("Should call multiplication using assembly", async function () {
    expect(await mulContractInstance.mulAssembly(a, b)).to.equal(c);
    assembly = Number(await mulContractInstance.estimateGas.mulAssembly(a, b));
  });

  it("Should call multiplication without assembly", async function () {
    expect(await mulContractInstance.mulSolidity(a, b)).to.equal(c);
    solidity = Number(await mulContractInstance.estimateGas.mulSolidity(a, b));

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Multiplication",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

describe("3. Subtraction using Assembly and Normal Syntax :-", function () {
  let subContractInstance: any;
  let a = 3;
  let b = 2;
  let c = 1;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const subContract = await ethers.getContractFactory("Sub");
    subContractInstance = await subContract.deploy();
  });

  it("Should call subtraction using assembly", async function () {
    expect(await subContractInstance.subAssembly(a, b)).to.equal(c);
    assembly = Number(await subContractInstance.estimateGas.subAssembly(a, b));
  });

  it("Should call subtraction without assembly", async function () {
    expect(await subContractInstance.subSolidity(a, b)).to.equal(c);
    solidity = Number(await subContractInstance.estimateGas.subSolidity(a, b));

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Subtraction",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

describe("4. Division using Assembly and Normal Syntax :-", function () {
  let divContractInstance: any;
  let a = 6;
  let b = 3;
  let c = 2;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const divContract = await ethers.getContractFactory("Div");
    divContractInstance = await divContract.deploy();
  });

  it("Should call division using assembly", async function () {
    expect(await divContractInstance.divAssembly(a, b)).to.equal(c);
    assembly = Number(await divContractInstance.estimateGas.divAssembly(a, b));
  });

  it("Should call division without assembly", async function () {
    expect(await divContractInstance.divSolidity(a, b)).to.equal(c);
    solidity = Number(await divContractInstance.estimateGas.divSolidity(a, b));

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Division",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

describe("5. Signed Division using Assembly and Normal Syntax :-", function () {
  let sdivContractInstance: any;
  let a = 2;
  let b = -1;
  let c = -2;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const sdivContract = await ethers.getContractFactory("SDiv");
    sdivContractInstance = await sdivContract.deploy();
  });

  it("Should call signed division using assembly", async function () {
    expect(await sdivContractInstance.sdivAssembly(a, b)).to.equal(c);
    assembly = Number(
      await sdivContractInstance.estimateGas.sdivAssembly(a, b)
    );
  });

  it("Should call signed division without assembly", async function () {
    expect(await sdivContractInstance.sdivSolidity(a, b)).to.equal(c);
    solidity = Number(
      await sdivContractInstance.estimateGas.sdivSolidity(a, b)
    );

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Signed Division",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

describe("6. Modulo using Assembly and Normal Syntax :-", function () {
  let modContractInstance: any;
  let a = 5;
  let b = 3;
  let c = 2;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const modContract = await ethers.getContractFactory("Mod");
    modContractInstance = await modContract.deploy();
  });

  it("Should call modulo using assembly", async function () {
    expect(await modContractInstance.modAssembly(a, b)).to.equal(c);
    assembly = Number(await modContractInstance.estimateGas.modAssembly(a, b));
  });

  it("Should call modulo without assembly", async function () {
    expect(await modContractInstance.modSolidity(a, b)).to.equal(c);
    solidity = Number(await modContractInstance.estimateGas.modSolidity(a, b));

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Modulo Division",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

describe("7. Signed Modulo using Assembly and Normal Syntax :-", function () {
  let smodContractInstance: any;
  let a = -5;
  let b = 3;
  let c = -2;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const smodContract = await ethers.getContractFactory("SMod");
    smodContractInstance = await smodContract.deploy();
  });

  it("Should call signed modulo using assembly", async function () {
    expect(await smodContractInstance.smodAssembly(a, b)).to.equal(c);
    assembly = Number(
      await smodContractInstance.estimateGas.smodAssembly(a, b)
    );
  });

  it("Should call signed modulo without assembly", async function () {
    expect(await smodContractInstance.smodSolidity(a, b)).to.equal(c);
    solidity = Number(
      await smodContractInstance.estimateGas.smodSolidity(a, b)
    );

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Signed Modulo Division",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

describe("8. Addition Modulo using Assembly and Normal Syntax :-", function () {
  let addModContractInstance: any;
  let a = 2;
  let b = 3;
  let c = 3;
  let d = 2;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const addModContract = await ethers.getContractFactory("AddMod");
    addModContractInstance = await addModContract.deploy();
  });

  it("Should call addition modulo using assembly", async function () {
    expect(await addModContractInstance.addModAssembly(a, b, c)).to.equal(d);
    assembly = Number(
      await addModContractInstance.estimateGas.addModAssembly(a, b, c)
    );
  });

  it("Should call addition modulo without assembly", async function () {
    expect(await addModContractInstance.addModSolidity(a, b, c)).to.equal(d);
    solidity = Number(
      await addModContractInstance.estimateGas.addModSolidity(a, b, c)
    );

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Addition Modulo Division",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

describe("9. Multiplication Modulo using Assembly and Normal Syntax :-", function () {
  let mulModContractInstance: any;
  let a = 2;
  let b = 4;
  let c = 3;
  let d = 2;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const mulModContract = await ethers.getContractFactory("MulMod");
    mulModContractInstance = await mulModContract.deploy();
  });

  it("Should call multiplication modulo using assembly", async function () {
    expect(await mulModContractInstance.mulModAssembly(a, b, c)).to.equal(d);
    assembly = Number(
      await mulModContractInstance.estimateGas.mulModAssembly(a, b, c)
    );
  });

  it("Should call multiplication modulo without assembly", async function () {
    expect(await mulModContractInstance.mulModSolidity(a, b, c)).to.equal(d);
    solidity = Number(
      await mulModContractInstance.estimateGas.mulModSolidity(a, b, c)
    );

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Multiplication Modulo Division",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

describe("10. Exponential using Assembly and Normal Syntax :-", function () {
  let expContractInstance: any;
  let a = 2;
  let b = 10;
  let c = 1024;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const expContract = await ethers.getContractFactory("Exp");
    expContractInstance = await expContract.deploy();
  });

  it("Should call exponential using assembly", async function () {
    expect(await expContractInstance.expAssembly(a, b)).to.equal(c);
    assembly = Number(await expContractInstance.estimateGas.expAssembly(a, b));
  });

  it("Should call exponential without assembly", async function () {
    expect(await expContractInstance.expSolidity(a, b)).to.equal(c);
    solidity = Number(await expContractInstance.estimateGas.expSolidity(a, b));

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Exponential",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

//https://ethereum.stackexchange.com/questions/63062/evm-signextend-opcode-explanation

describe("11. SignExternd using Assembly and Normal Syntax :-", function () {
  let signExtendContractInstance: any;
  let a = 2;
  let b = 10;
  let c = 10;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const signExtendContract = await ethers.getContractFactory("SignExtend");
    signExtendContractInstance = await signExtendContract.deploy();
  });

  it("Should call signExtend using assembly", async function () {
    expect(await signExtendContractInstance.signExtendAssembly(a, b)).to.equal(
      c
    );
    assembly = Number(
      await signExtendContractInstance.estimateGas.signExtendAssembly(a, b)
    );

    gasInfoArr.push({
      Operation: "Sign Extend",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": "No Logic For Solidity",
      "Gas Difference": 0,
      Percentage: `${differencePercentage.toFixed(4)}%`,
    });
  });
});

describe("12. Less Than using Assembly and Normal Syntax :-", function () {
  let lessThanContractInstance: any;
  let a = 1;
  let b = 2;
  let c = true;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const lessThanContract = await ethers.getContractFactory("Lt");
    lessThanContractInstance = await lessThanContract.deploy();
  });

  it("Should call less than using assembly", async function () {
    expect(await lessThanContractInstance.ltAssembly(a, b)).to.equal(c);
    assembly = Number(
      await lessThanContractInstance.estimateGas.ltAssembly(a, b)
    );
  });

  it("Should call less than without assembly", async function () {
    expect(await lessThanContractInstance.ltSolidity(a, b)).to.equal(c);
    solidity = Number(
      await lessThanContractInstance.estimateGas.ltSolidity(a, b)
    );

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Less Than",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

describe("13. Greater Than using Assembly and Normal Syntax :-", function () {
  let greaterThanContractInstance: any;
  let a = 2;
  let b = 1;
  let c = true;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const greaterThanContract = await ethers.getContractFactory("Gt");
    greaterThanContractInstance = await greaterThanContract.deploy();
  });

  it("Should call greater than using assembly", async function () {
    expect(await greaterThanContractInstance.gtAssembly(a, b)).to.equal(c);
    assembly = Number(
      await greaterThanContractInstance.estimateGas.gtAssembly(a, b)
    );
  });

  it("Should call greater than without assembly", async function () {
    expect(await greaterThanContractInstance.gtSolidity(a, b)).to.equal(c);
    solidity = Number(
      await greaterThanContractInstance.estimateGas.gtSolidity(a, b)
    );

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Greater Than",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

describe("14. Signed Less Than using Assembly and Normal Syntax :-", function () {
  let signedLessThanContractInstance: any;
  let a = -1;
  let b = 1;
  let c = true;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const signedLessThanContract = await ethers.getContractFactory("Slt");
    signedLessThanContractInstance = await signedLessThanContract.deploy();
  });

  it("Should call signed less than using assembly", async function () {
    expect(await signedLessThanContractInstance.sltAssembly(a, b)).to.equal(c);
    assembly = Number(
      await signedLessThanContractInstance.estimateGas.sltAssembly(a, b)
    );
  });

  it("Should call signed less than without assembly", async function () {
    expect(await signedLessThanContractInstance.sltSolidity(a, b)).to.equal(c);
    solidity = Number(
      await signedLessThanContractInstance.estimateGas.sltSolidity(a, b)
    );

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Signed Less Than",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

describe("15. Signed More Than using Assembly and Normal Syntax :-", function () {
  let signedMoreThanContractInstance: any;
  let a = -1;
  let b = 1;
  let c = false;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const signedMoreThanContract = await ethers.getContractFactory("Sgt");
    signedMoreThanContractInstance = await signedMoreThanContract.deploy();
  });

  it("Should call signed more than using assembly", async function () {
    expect(await signedMoreThanContractInstance.sgtAssembly(a, b)).to.equal(c);
    assembly = Number(
      await signedMoreThanContractInstance.estimateGas.sgtAssembly(a, b)
    );
  });

  it("Should call signed more than without assembly", async function () {
    expect(await signedMoreThanContractInstance.sgtSolidity(a, b)).to.equal(c);
    solidity = Number(
      await signedMoreThanContractInstance.estimateGas.sgtSolidity(a, b)
    );

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Signed More Than",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

describe("16. Equality using Assembly and Normal Syntax :-", function () {
  let eqContractInstance: any;
  let a = 1;
  let b = 2;
  let c = false;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const eqContract = await ethers.getContractFactory("Eq");
    eqContractInstance = await eqContract.deploy();
  });

  it("Should call equality using assembly", async function () {
    expect(await eqContractInstance.eqAssembly(a, b)).to.equal(c);
    assembly = Number(await eqContractInstance.estimateGas.eqAssembly(a, b));
  });

  it("Should call equality without assembly", async function () {
    expect(await eqContractInstance.eqSolidity(a, b)).to.equal(c);
    solidity = Number(await eqContractInstance.estimateGas.eqSolidity(a, b));

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Equality Comparison",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

describe("17. IsZero using Assembly and Normal Syntax :-", function () {
  let isZeroContractInstance: any;
  let a = 1;
  let c = false;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const isZeroContract = await ethers.getContractFactory("IsZero");
    isZeroContractInstance = await isZeroContract.deploy();
  });

  it("Should call IsZero using assembly", async function () {
    expect(await isZeroContractInstance.isZeroAssembly(a)).to.equal(c);
    assembly = Number(
      await isZeroContractInstance.estimateGas.isZeroAssembly(a)
    );
  });

  it("Should call IsZero without assembly", async function () {
    expect(await isZeroContractInstance.isZeroSolidity(a)).to.equal(c);
    solidity = Number(
      await isZeroContractInstance.estimateGas.isZeroSolidity(a)
    );

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Is Zero",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

describe("18. Bitwise And using Assembly and Normal Syntax :-", function () {
  let andContractInstance: any;
  let a = 2;
  let b = 3;
  let c = 2;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const andContract = await ethers.getContractFactory("And");
    andContractInstance = await andContract.deploy();
  });

  it("Should call Bitwise And using assembly", async function () {
    expect(await andContractInstance.andAssembly(a, b)).to.equal(c);
    assembly = Number(await andContractInstance.estimateGas.andAssembly(a, b));
  });

  it("Should call Bitwise And without assembly", async function () {
    expect(await andContractInstance.andSolidity(a, b)).to.equal(c);
    solidity = Number(await andContractInstance.estimateGas.andSolidity(a, b));

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Bitwise And",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

describe("19. Bitwise Or using Assembly and Normal Syntax :-", function () {
  let orContractInstance: any;
  let a = 2;
  let b = 3;
  let c = 3;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const orContract = await ethers.getContractFactory("Or");
    orContractInstance = await orContract.deploy();
  });

  it("Should call Bitwise Or using assembly", async function () {
    expect(await orContractInstance.orAssembly(a, b)).to.equal(c);
    assembly = Number(await orContractInstance.estimateGas.orAssembly(a, b));
  });

  it("Should call Bitwise Or without assembly", async function () {
    expect(await orContractInstance.orSolidity(a, b)).to.equal(c);
    solidity = Number(await orContractInstance.estimateGas.orSolidity(a, b));

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Bitwise Or",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

describe("20. Bitwise Xor using Assembly and Normal Syntax :-", function () {
  let xorContractInstance: any;
  let a = 2;
  let b = 3;
  let c = 1;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const xorContract = await ethers.getContractFactory("Xor");
    xorContractInstance = await xorContract.deploy();
  });

  it("Should call Bitwise Xor using assembly", async function () {
    expect(await xorContractInstance.xorAssembly(a, b)).to.equal(c);
    assembly = Number(await xorContractInstance.estimateGas.xorAssembly(a, b));
  });

  it("Should call Bitwise Xor without assembly", async function () {
    expect(await xorContractInstance.xorSolidity(a, b)).to.equal(c);
    solidity = Number(await xorContractInstance.estimateGas.xorSolidity(a, b));

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Bitwise Xor",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

describe("21. Bitwise Not using Assembly and Normal Syntax :-", function () {
  let notContractInstance: any;
  let a =
    "115792089237316195423570985008687907853269984665640564039457584007913129639927";
  let c = 8;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const notContract = await ethers.getContractFactory("Not");
    notContractInstance = await notContract.deploy();
  });

  it("Should call Bitwise Not using assembly", async function () {
    expect(await notContractInstance.notAssembly(a)).to.equal(c);
    assembly = Number(await notContractInstance.estimateGas.notAssembly(a));
  });

  it("Should call Bitwise Not without assembly", async function () {
    expect(await notContractInstance.notSolidity(a)).to.equal(c);
    solidity = Number(await notContractInstance.estimateGas.notSolidity(a));

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Bitwise Not",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

describe("22. Extracting Single Byte from word using Assembly and Normal Syntax :-", function () {
  let byteContractInstance: any;
  let a = 32766;
  let b = 31;
  let c = 254;

  let assembly = 0;
  let solidity = 0;
  let difference = 0;
  let differencePercentage = 0;
  let optimizeWay = "Assembly";

  it("Should Deploy the contract", async function () {
    const byteContract = await ethers.getContractFactory("Byte");
    byteContractInstance = await byteContract.deploy();
  });

  it("Should call Byte using assembly", async function () {
    expect(await byteContractInstance.byteAssembly(b, a)).to.equal(c);
    assembly = Number(
      await byteContractInstance.estimateGas.byteAssembly(a, b)
    );
  });

  it("Should call Byte using solidity", async function () {
    expect(await byteContractInstance.byteSolidity(a, b)).to.equal(c);
    solidity = Number(
      await byteContractInstance.estimateGas.byteSolidity(a, b)
    );

    if (assembly < solidity) {
      difference = solidity - assembly;
      differencePercentage = (difference / assembly) * 100;
    } else {
      difference = assembly - solidity;
      optimizeWay = "solidity";
      differencePercentage = (difference / solidity) * 100;
    }

    gasInfoArr.push({
      Operation: "Byte",
      "Assembly Logic Gas Cost": assembly,
      "Solidity Logic Gas Cost": solidity,
      "Gas Difference": difference,
      Percentage: `${differencePercentage.toFixed(
        4
      )}% greater than ${optimizeWay}`,
    });
  });
});

describe("Gas Comparison Between Assembly and Solidity Codes For Above Operations", function () {
  it("Console", async function () {
    console.table(gasInfoArr);
  });
});

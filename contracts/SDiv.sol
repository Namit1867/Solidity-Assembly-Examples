//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SDiv {
    function sdivAssembly(int x, int y) public pure returns (int) {
        assembly {
            let result := sdiv(x, y)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function sdivSolidity(int x, int y) public pure returns (int) {
        return x / y;
    }
}

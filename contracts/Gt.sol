//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Gt {
    function gtAssembly(uint x, uint y) public pure returns (bool) {
        assembly {
            let result := gt(x, y)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function gtSolidity(uint x, uint y) public pure returns (bool) {
        return x > y;
    }
}

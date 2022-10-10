//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Or {
    function orAssembly(uint x, uint y) public pure returns (uint) {
        assembly {
            let result := or(x, y)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function orSolidity(uint x, uint y) public pure returns (uint) {
        return x | y;
    }
}

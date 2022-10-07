//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Sub {
    function subAssembly(uint x, uint y) public pure returns (uint) {
        assembly {
            let result := sub(x, y)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function subSolidity(uint x, uint y) public pure returns (uint) {
        return x - y;
    }
}

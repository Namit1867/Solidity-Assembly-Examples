//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract And {
    function andAssembly(uint x, uint y) public pure returns (uint) {
        assembly {
            let result := and(x, y)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function andSolidity(uint x, uint y) public pure returns (uint) {
        return x & y;
    }
}

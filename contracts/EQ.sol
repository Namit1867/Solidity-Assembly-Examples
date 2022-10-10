//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Eq {
    function eqAssembly(uint x, uint y) public pure returns (bool) {
        assembly {
            let result := eq(x, y)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function eqSolidity(uint x, uint y) public pure returns (bool) {
        return x == y;
    }
}

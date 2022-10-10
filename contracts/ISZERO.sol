//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IsZero {
    function isZeroAssembly(uint x) public pure returns (bool) {
        assembly {
            let result := iszero(x)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function isZeroSolidity(uint x) public pure returns (bool) {
        return x == 0;
    }
}

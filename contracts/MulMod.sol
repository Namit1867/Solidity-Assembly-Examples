//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MulMod {
    function mulModAssembly(uint x, uint y, uint n) public pure returns (uint) {
        assembly {
            let result := mulmod(x, y, n)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function mulModSolidity(uint x, uint y, uint n) public pure returns (uint) {
        return (x * y) % n;
    }
}

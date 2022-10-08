//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Exp {
    function expAssembly(uint x, uint y) public pure returns (uint) {
        assembly {
            let result := exp(x, y)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function expSolidity(uint x, uint y) public pure returns (uint) {
        return x ** y;
    }
}

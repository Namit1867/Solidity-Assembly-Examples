//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Mul {
    function mulAssembly(uint x, uint y) public pure returns (uint) {
        assembly {
            let result := mul(x, y)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function mulSolidity(uint x, uint y) public pure returns (uint) {
        return x * y;
    }
}

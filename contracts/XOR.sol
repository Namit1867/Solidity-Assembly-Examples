//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Xor {
    function xorAssembly(uint x, uint y) public pure returns (uint) {
        assembly {
            let result := xor(x, y)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function xorSolidity(uint x, uint y) public pure returns (uint) {
        return x ^ y;
    }
}

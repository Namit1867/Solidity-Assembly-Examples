//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Shr {

    //y on which shift is performed for x bits
    function shrAssembly(uint x, uint y) public pure returns (uint) {
        assembly {
            let result := shr(x, y)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function shrSolidity(uint x, uint y) public pure returns (uint) {
        return y >> x;
    }
}

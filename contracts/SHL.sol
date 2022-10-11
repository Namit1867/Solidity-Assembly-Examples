//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Shl {

    //y on which shift is performed for x bits
    function shlAssembly(uint x, uint y) public pure returns (uint) {
        assembly {
            let result := shl(x, y)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function shlSolidity(uint x, uint y) public pure returns (uint) {
        return y << x;
    }
}

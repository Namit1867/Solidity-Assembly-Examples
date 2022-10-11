//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Sar {

    //Using SHR (-7 >> 1) = 57896044618658097711785492504343953926634992332820282019728792003956564819964
    //Using SAR (-7 >> 1) = -4

    //y on which shift is performed for x bits
    function sarAssembly(uint x, int y) public pure returns (int) {
        assembly {
            let result := sar(x, y)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function sarSolidity(uint x, int y) public pure returns (int) {
        return y >> x;
    }
}

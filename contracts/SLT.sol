//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Slt {
    function sltAssembly(int x, int y) public pure returns (bool) {
        assembly {
            let result := slt(x, y)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function sltSolidity(int x, int y) public pure returns (bool) {
        return x < y;
    }
}

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SMod {
    function smodAssembly(int x, int y) public pure returns (int) {
        assembly {
            let result := smod(x, y)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function smodSolidity(int x, int y) public pure returns (int) {
        return x % y;
    }
}

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Sgt {
    function sgtAssembly(int x, int y) public pure returns (bool) {
        assembly {
            let result := sgt(x, y)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function sgtSolidity(int x, int y) public pure returns (bool) {
        return x > y;
    }
}

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SignExtend {
    function signExtendAssembly(int x, int y) public pure returns (int) {
        assembly {
            let result := signextend(x, y)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }
}

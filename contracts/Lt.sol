//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Lt {
    function ltAssembly(uint x, uint y) public pure returns (bool) {
        assembly {
            let result := lt(x, y)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function ltSolidity(uint x, uint y) public pure returns (bool) {
        return x < y;
    }
}

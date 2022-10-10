//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Not {
    function notAssembly(uint x) public pure returns (uint) {
        assembly {
            let result := not(x)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function notSolidity(uint x) public pure returns (uint) {
        return ~x;
    }
}

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CalldataLoad {
    //let data := calldataload(add(4, mul(offset, 0x20)))
    function callDataLoadAssembly(uint a) public pure returns (uint) {
        assembly {
            let data := calldataload(4)
            mstore(0x0, data)
            return(0x0, 32)
        }
    }

    function callDataLoadSolidity(uint a) public pure returns (uint) {
        return a;
    }
}
